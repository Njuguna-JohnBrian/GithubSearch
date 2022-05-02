import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  username: string;
  repoName: string;
  apikey: string = "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";
  constructor(private http: HttpClient) {
    console.log("service is now ready");
  }

  getUser() {
    return this.http.get(environment.API_USERS + this.username, {
      headers: new HttpHeaders({ Authorization: `token ${this.apikey}` }),
    });
  }

  getUserRepos() {
    return this.http.get(environment.API_USERS + this.username + "/repos", {
      headers: new HttpHeaders({ Authorization: `token ${this.apikey}` }),
    });
  }

  searchrepos() {
    return this.http.get(environment.API_SEARCH_REPOS + this.repoName, {
      headers: new HttpHeaders({ Authorization: `token ${this.apikey}` }),
    });
  }

  UpdateUser(username: string) {
    this.username = username;
  }

  UpdateRepo(repo: string) {
    this.repoName = repo;
  }
}
