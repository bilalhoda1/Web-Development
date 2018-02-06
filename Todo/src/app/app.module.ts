import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todos', component: TodosComponent  },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, TodosComponent, DashboardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
