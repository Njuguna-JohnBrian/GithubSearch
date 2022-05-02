import { Component, OnInit } from "@angular/core";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"],
})
export class ReposComponent implements OnInit {
  repoitems: any[];
  repoName: string = "Project-Management-System";

  constructor(private profileService: ProfileService) {}

  findRepo() {
    this.profileService.UpdateRepo(this.repoName);
    this.profileService.searchrepos().subscribe((repo) => {
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    });
  }

  ngOnInit() {
    this.findRepo();
  }
}
