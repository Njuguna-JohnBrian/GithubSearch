import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./components/profile/profile.component";
import { ReposComponent } from "./components/repos/repos.component";

const routes: Routes = [
  {path: '', redirectTo:'/profile', pathMatch:"full"},
  {path: '**', component: ProfileComponent},
  { path: "profile", component: ProfileComponent },
  { path: "repos", component: ReposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
