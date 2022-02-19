import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './ListUser/list-user/list-user.component';

const routes: Routes = [
  
    { path: 'ListUser', component: ListUserComponent, },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
