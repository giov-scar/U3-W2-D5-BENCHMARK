import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: '/home',
        pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
