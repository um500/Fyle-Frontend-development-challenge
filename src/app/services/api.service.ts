import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  // fetch userinfo 
  getUser(githubUsername: string): Observable<User> {

    return this.httpClient.get<User>(
      `https://api.github.com/users/${githubUsername}`
    );
  }

  // get the repositories of a user
  async getRepositories(url: any): Promise<{ data: Repo[], headers: any }> {
    const res = await axios.get(url);
    return res;
  }
}
