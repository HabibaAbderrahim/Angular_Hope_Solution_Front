import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationService, MessageService} from 'primeng/api';
import {SlideMenuModule} from 'primeng/slidemenu';
import {HomeComponent} from './home/home.component';
import {ListCandidatComponent} from './candidat/list-candidat/list-candidat.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListCvComponent} from './CV/list-cv/list-cv.component';
import {CardModule} from 'primeng/card';
import {AddCandidatComponent} from './candidat/add-candidat/add-candidat.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {RippleModule} from 'primeng/ripple';
import {ListAllComponent } from './CV/list-all/list-all.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptorService} from './shared/auth/jwt-interceptor.service';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCandidatComponent,
    ListCvComponent,
    AddCandidatComponent,
    ListUsersComponent,
    AddUserComponent,
    ListAllComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    SlideMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    CalendarModule,
    InputTextModule,
    FileUploadModule,
    FormsModule,
    PasswordModule,
    KeyFilterModule,
    MessageModule,
    DialogModule,
    PaginatorModule,
    ConfirmDialogModule,
    RippleModule,
    MessagesModule,
    ToastModule


  ],
  providers: [ConfirmationService , MessageService ,
    {provide: HTTP_INTERCEPTORS , useClass: JwtInterceptorService , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
