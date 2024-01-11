import {Directive, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../../interfaces/todo-group.interface";
import {FormControl} from "@angular/forms";

@Directive({
  selector: 'app-todo-item',
  standalone: true,
})
export class TodoItemBase implements OnInit{
  @Input() todoItem!: TodoItem;
  @Input() index!: number;

  public isShowDescription = false;

  public tempDescription?: string;


  ngOnInit(): void {
    this.tempDescription = this.todoItem.description;
  }


}
