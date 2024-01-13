import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ItemInProgressComponent} from "../item-in-progress/item-in-progress.component";
import {ItemNotStartedComponent} from "../item-not-started/item-not-started.component";
import {ItemDoneComponent} from "../item-done/item-done.component";
import {TodoItemBase} from "../todo-item-base.directive";
import {TodoStatus} from "../../../../interfaces/todo-group.interface";

@Component({
  selector: 'app-item-factory',
  standalone: true,
  imports: [
    CommonModule,
    ItemInProgressComponent,
    ItemNotStartedComponent,
    ItemDoneComponent,
  ],
  templateUrl: './item-factory.component.html',
  styleUrls: ['./item-factory.component.scss', '../todo-base.scss']
})
export class ItemFactoryComponent extends TodoItemBase {
  protected readonly TodoStatus = TodoStatus;

  @Output()
  public eventForGroup = new EventEmitter<{value: string, indexGroup: number, indexItem: number}>;

  @Output() changeStatusEventGroup = new EventEmitter<{status: number, indexItem: number}>;
  @Output() deleteItemEmitFactory = new EventEmitter<number>

  handleTodoEventDescr(event: { value: string; indexGroup: number }) {
    // console.log('TodoItem: ' + event.value);
    this.eventForGroup.emit({value: event.value, indexGroup: event.indexGroup, indexItem: this.index})
  }

  handleChangeStatus(event: { status: number; indexItem: number }) {
    this.changeStatusEventGroup.emit(event);
  }

  handleDeleteItem(index: number) {
    this.deleteItemEmitFactory.emit(index);
  }
}
