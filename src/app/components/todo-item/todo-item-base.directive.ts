import {Directive, Input} from '@angular/core';
import {TodoItem} from "../../../interfaces/todo-group.interface";

@Directive({
  selector: 'app-todo-item',
  standalone: true,
})
export class TodoItemBase {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
