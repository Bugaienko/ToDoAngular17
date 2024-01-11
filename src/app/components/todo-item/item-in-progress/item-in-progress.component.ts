import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './item-in-progress.component.html',
  styleUrls: ['./item-in-progress.component.scss', '../todo-base.scss']
})
export class ItemInProgressComponent extends TodoItemBase{

}
