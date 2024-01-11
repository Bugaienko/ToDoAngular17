import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoItemBase} from "../todo-item/todo-item-base.directive";
import {TodoGroup} from "../../../interfaces/todo-group.interface";
import {ItemFactoryComponent} from "../todo-item/item-factory/item-factory.component";
import {FormControl, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemBase,
    ItemFactoryComponent,
    FormsModule,

  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss'
})
export class TodoGroupComponent {

  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

  public isShowTitle = true;

  public selectInputText(event: FocusEvent) {
    (event.target as HTMLInputElement).select();
  }

}
