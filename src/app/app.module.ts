import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ButtonComponent } from './add-todo/button/button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ChangeContentDirective } from './directives/change-content.directive';
import { TodoCompletedDirective } from './directives/todo-completed.directive';
import { TotalItemsComponent } from './total-items/total-items.component';
import { FancyQuotePipe } from './pipes/fancy-quote.pipe';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    AddTodoComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    TestCompComponent,
    ChangeContentDirective,
    TodoCompletedDirective,
    TotalItemsComponent,
    FancyQuotePipe,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
