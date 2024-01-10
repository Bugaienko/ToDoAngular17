import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodoGroupComponent} from "./components/todo-group/todo-group.component";
import {TodoGroup, TodoStatus} from "../interfaces/todo-group.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodoGroupComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [
      {
        title: 'Первый',
        items: [
          {
            title: 'Сделать Todo',
            description: 'Делаем планировщик задач',
            status: TodoStatus.IN_PROGRESS
          },
        ]
      }
    ];
  }
}
