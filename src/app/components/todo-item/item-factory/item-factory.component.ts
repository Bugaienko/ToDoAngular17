import {Component, Input} from '@angular/core';
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
  styleUrls: ['./item-factory.component.css', '../todo-base.scss']
})
export class ItemFactoryComponent extends TodoItemBase {
  protected readonly TodoStatus = TodoStatus;
}
