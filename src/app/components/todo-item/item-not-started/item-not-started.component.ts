import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-item-not-started',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './item-not-started.component.html',
  styleUrls: ['./item-not-started.component.scss', '../todo-base.scss']
})
export class ItemNotStartedComponent extends TodoItemBase{

}
