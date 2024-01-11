import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './item-done.component.html',
  styleUrls: ['./item-done.component.scss', '../todo-base.scss']
})
export class ItemDoneComponent extends TodoItemBase{

}
