import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_guard/auth.guard';
import { NotfoundComponent } from './Errors/notfound/notfound.component';
import { ServererrorComponent } from './Errors/servererror/servererror.component';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', component : HomeComponent },
  {
    path:'',
    runGuardsAndResolvers : 'always',
    canActivate :[AuthGuard],
    children :
    [
    {path : 'members' , component : MemberListComponent , canActivate :[ AuthGuard ]},
    {path : 'members/:id' , component : MemberDetailsComponent },
    {path : 'lists' , component : ListsComponent},
    {path : 'messages' , component : MessagesComponent}
    ]
  },
  {path : 'not-found',component:NotfoundComponent},
  {path : 'errors' , component :TestErrorsComponent },
  {path : 'server-error' , component :ServererrorComponent },
  {path : '**' , component : HomeComponent , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
