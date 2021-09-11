import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interseptors/error.interceptor';
import { NotfoundComponent } from './Errors/notfound/notfound.component';
import { ServererrorComponent } from './Errors/servererror/servererror.component';
import { MembercardComponent } from './members/membercard/membercard.component';
import { HeaderInterceptorInterceptor } from './_interseptors/header-interceptor.interceptor';
import { EditmemberComponent } from './members/editmember/editmember.component';
import { LoadingInterceptor } from './_interseptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailsComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotfoundComponent,
    ServererrorComponent,
    MembercardComponent,
    EditmemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS ,useClass : ErrorInterceptor , multi : true},
    {provide :HTTP_INTERCEPTORS , useClass : HeaderInterceptorInterceptor , multi : true},
    {provide :HTTP_INTERCEPTORS , useClass : LoadingInterceptor , multi : true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
