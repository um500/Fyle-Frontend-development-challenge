import { Component, HostListener } from '@angular/core';
import { ApiService } from './services/api.service';
import { ToastService } from './services/toast.service';
import { userMessages } from 'src/utils/constants';
import { User } from './models/user.model';
import { Repo } from './models/repo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService, private toast: ToastService) {
    this.updateVisiblePageCount();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateVisiblePageCount();
  }

  githubUsername: string = '';
  userInfo: User | null = null;
  userRepo: Repo[] = [];
  currentPage: number = 1;
  repoPerPage: number = 10;
  totalPages: number = 0;
  visiblePageCount: number = 5;

  loader1: boolean = false;
  loader2: boolean = false;
  buttonLoader: boolean = false;
  err1: boolean = false;
  errMessage: any;
  title: any = 'fyle-frontend-challenge';


  // Function to fetch provided GitHub user's data
  getUserData(username: string): void {
    if (this.githubUsername === '') {
      this.toast.showWarning(userMessages.EMPTY_USERNAME);
      return;
    }

    if (this.repoPerPage === null) {
      this.toast.showWarning(userMessages.ENTER_NUMER);
      return;
    }
    if (this.repoPerPage > 100 || this.repoPerPage < 1) {
      this.toast.showWarning(userMessages.ENTER_VALID_NUMER);
      return;
    }


    // Loading indicators
    this.loader1 = true;
    this.buttonLoader = true;
    this.err1 = false;

    this.apiService.getUser(username).subscribe(
      (userData: User) => {
        this.userInfo = userData;

        this.currentPage = 1;
        this.totalPages = 1;

        // If no public repositories, skip the fetching
        if (this.userInfo.public_repos === 0) {
          this.err1 = true;
          this.loader1 = false;

          this.buttonLoader = false;
          this.errMessage = `${this.userInfo.name || this.userInfo.login || '-'
            } ${userMessages.NO_REPOS_FOUND}`;
          return;
        }

        if (this.userInfo.repos_url) {
          this.getRepos(1);
        }

        this.loader1 = false;
        this.buttonLoader = false;

      },
      (error) => {
        if (error.status === 404)
          this.toast.showError(userMessages.USER_NOT_FOUND);
        else if (error.status === 403)
          this.toast.showError(userMessages.FORBIDDEN);

        this.loader1 = false;
        this.buttonLoader = false;
      }
    );
  }

  async getRepos(page: number): Promise<void> {
    this.loader2 = true;
    this.currentPage = page;

    try {
      const res: { data: Repo[], headers: any } = await this.apiService.getRepositories(
        `${this.userInfo?.repos_url}?per_page=${this.repoPerPage}&page=${this.currentPage}`
      );
      this.userRepo = res.data;
      this.loader2 = false;


      // Exctracting info from Link header inorder to get the maximum page number count
      const linkHeader = res.headers.link;
      const parts = linkHeader.split(', ');
      for (const part of parts) {
        if (part.includes('rel="last"')) {
          const match = /page=(\d+)>; rel="last"/.exec(part);
          if (match) {
            this.totalPages = parseInt(match[1]);
            break;
          }
        }
      }
    }
    catch (error: any) {
      if (error.status === 403)
        this.toast.showError(userMessages.FORBIDDEN);

      this.loader1 = false;
      this.buttonLoader = false;
    }
  }


  // The range of page to show in pagination footer
  calculateVisiblePageRange(currentPage: number, totalPages: number): number[] {
    const halfCount = Math.floor(this.visiblePageCount / 2);
    let start = Math.max(currentPage - halfCount, 1);
    let end = Math.min(start + this.visiblePageCount - 1, totalPages);

    if (end - start + 1 < this.visiblePageCount) {
      start = Math.max(end - this.visiblePageCount + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }


  // Responsive Pagination Footer
  private updateVisiblePageCount(): void {
    const screenWidth = window.innerWidth;
    const isMobile1 = screenWidth < 668 && screenWidth > 500;
    const isMobile2 = screenWidth < 500 && screenWidth > 300;
    const isMobile3 = screenWidth < 300;

    this.visiblePageCount = isMobile1 ? 5 : isMobile2 ? 3 : isMobile3 ? 2 : 7;
  }
}
