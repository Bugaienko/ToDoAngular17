import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../../interfaces/todo-group.interface";

@Directive({
  selector: 'app-todo-item',
  standalone: true,
})
export class TodoItemBase implements OnInit {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;

  @Output() eventChangeDescription = new EventEmitter<{ value: string, indexGroup: number }>;


  public isShowDescription = false;

  public isDescriptionEditing = false;

  public tempDescription?: string;


  ngOnInit(): void {
    this.tempDescription = this.todoItem.description;
  }

  public pressEnter(value: string) {
    // console.log('Enter:' + value + '; index: ' + this.index)
    this.eventChangeDescription.emit({value: value, indexGroup: this.index});
    this.isDescriptionEditing = false;
  }


}
