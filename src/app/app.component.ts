import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodoGroupComponent} from "./components/todo-group/todo-group.component";
import {TodoGroup, TodoItem, TodoStatus} from "../interfaces/todo-group.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodoGroupComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
          {
            title: 'Сделать вторую часть',
            description: 'Вторая задача из пакета',
            status: TodoStatus.NOT_STARTED
          },
          {
            title: 'Освоить Angular',
            description: 'Почти закончили',
            status: TodoStatus.DONE
          },
        ]
      },
      {
        title: 'NOT_STARTED',
        items: [
          {
            title: 'Сделать вторую часть',
            description: 'Делаем планировщик задач',
            status: TodoStatus.NOT_STARTED
          },
        ]
      },
      {
        title: 'DONE',
        items: [
          {
            title: 'Освоить Angular',
            description: 'Делаем планировщик задач',
            status: TodoStatus.DONE
          },
        ]
      }
    ];
  }

  public addGroup() {
    let tempGroup: TodoGroup = {
      title: ''
    }

    this.todoGroups.push(tempGroup);
  }

  public handleChangeTitle(value: {value: string, index: number}) {
    this.todoGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(index: number){
    // console.log('Delete group:' + index)
    this.todoGroups.splice(index, 1);
  }

  handleAddNewItem(value: { todoItem: TodoItem; index: number }) {

    this.todoGroups[value.index].items = this.todoGroups[value.index].items || [];
    this.todoGroups[value.index].items?.push(value.todoItem);

  }
}
