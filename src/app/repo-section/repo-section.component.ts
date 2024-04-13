import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.scss']
})

export class RepoSectionComponent {
  @Input() loader2 :boolean = false;
  @Input() userRepo :any;
}
