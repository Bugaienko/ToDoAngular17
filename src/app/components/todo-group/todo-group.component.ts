import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoItemBase} from "../todo-item/todo-item-base.directive";
import {TodoGroup, TodoItem, TodoStatus} from "../../../interfaces/todo-group.interface";
import {ItemFactoryComponent} from "../todo-item/item-factory/item-factory.component";
import {FormsModule} from "@angular/forms";

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
export class TodoGroupComponent implements OnInit {

  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

  @Output() changeTitleEvent: EventEmitter<{ value: string, index: number }> = new EventEmitter<{
    value: string,
    index: number
  }>();

  @Output() deleteGroup = new EventEmitter<number>;

  @Output() addNewItem = new EventEmitter<{ todoItem: TodoItem, index: number }>;

  @Output()
  eventGroupChangeDescription = new EventEmitter<{value: string, indexItem: number, indexGroup: number}>;


  public isShowTitle = true;

  public groupTitle?: string;

  public selectInputText(event: FocusEvent) {
    (event.target as HTMLInputElement).select();
  }

  ngOnInit(): void {
    this.groupTitle = this.todoGroup.title;
    if (this.todoGroup.title === '') {
      this.isShowTitle = false;
    }
  }


  public onEnterValue() {
    this.isShowTitle = true;
    this.changeTitleEvent.emit({value: this.groupTitle!, index: this.index})
  }

  public onDeleteGroup() {
    this.deleteGroup.emit(this.index);
  }

  public addNewTodo(value: string) {
    console.log('value ' + value)
    this.addNewItem.emit({
      todoItem: {
        title: value,
        status: TodoStatus.NOT_STARTED,
        description: ''
      },
      index: this.index
    });
  }

  public handleChangeDescription(event: {value: string, indexItem: number}) {
    // console.log('Пришел even в to-do' + event.value)
    this.eventGroupChangeDescription.emit({value: event.value, indexItem: event.indexItem, indexGroup: this.index});
  }
}
