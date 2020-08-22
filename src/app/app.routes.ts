import {provideRoutes} from '@angular/router'
import { DirectoryComponent} from './directory/directory.component'
import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {
        path : 'directory',
        component : DirectoryComponent
    },
    {
        path : '',
        component : HomeComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }