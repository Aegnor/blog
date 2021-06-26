import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/posts', pathMatch: 'full'},
      {path: 'posts', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: 'post/:id', component: PostDetailPageComponent, canActivate: [AuthGuard]}
    ]
  },
  {
    path: 'login', component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
