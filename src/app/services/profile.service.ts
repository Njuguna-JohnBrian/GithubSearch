import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  username: string;
  repoName: string;
  apikey: string = environment.ACCESS_TOKEN;
  constructor(private http: HttpClient) {
    console.log("service is now ready");
  }

  getUser() {
    return this.http.get(environment.API_USERS + this.username);
  }

  getUserRepos() {
    return this.http.get(environment.API_USERS + this.username + "/repos");
  }

  searchrepos() {
    return this.http.get(environment.API_SEARCH_REPOS + this.repoName);
  }

  UpdateUser(username: string) {
    this.username = username;
  }

  UpdateRepo(repo: string) {
    this.repoName = repo;
  }
}
