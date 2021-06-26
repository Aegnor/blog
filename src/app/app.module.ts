import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './shared/services/auth.service';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './shared/services/auth.guard';
import { PostService } from './shared/services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    MainLayoutComponent,
    PostDetailPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
