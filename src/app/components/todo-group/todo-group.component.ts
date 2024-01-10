import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoItemBase} from "../todo-item/todo-item-base.directive";
import {TodoGroup} from "../../../interfaces/todo-group.interface";
import {ItemFactoryComponent} from "../todo-item/item-factory/item-factory.component";

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemBase,
    ItemFactoryComponent,

  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.css'
})
export class TodoGroupComponent {

  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;
}
