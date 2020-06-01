import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { AddTodoComponent } from './todos/todo-list/add-todo/add-todo.component';
import { ButtonComponent } from './todos/todo-list/add-todo/button/button.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { ChangeContentDirective } from './directives/change-content.directive';
import { TodoCompletedDirective } from './directives/todo-completed.directive';
import { TotalItemsComponent } from './total-items/total-items.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    AddTodoComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    ChangeContentDirective,
    TodoCompletedDirective,
    TotalItemsComponent,
    DataBindingComponent,
    TodoDetailsComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
