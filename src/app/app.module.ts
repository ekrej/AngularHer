import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatCardModule } from '@angular/material';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './core/app/app.component'
import { UsecasesComponent } from './about/usecases/usecases.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { UsecaseComponent } from './about/usecases/usecase/usecase.component'
import { RouterModule } from '@angular/router'
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { GameModule } from "./game/game.module";
import { DiscussionModule } from "./discussion/discussion.module";
import { RegisterComponent } from './register/register.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { HttpInterceptor } from './shared/http.interceptor';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    UsecasesComponent,
    UsecaseComponent, 
    DashboardComponent, 
    SigninComponent, 
    RegisterComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule, 
    NgbModule, 
    AppRoutingModule, 
    DiscussionModule, 
    GameModule, 
    HttpClientModule,
    MatCardModule
  ],
  providers: [AuthService, AuthGuard, 
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}

