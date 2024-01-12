import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-not-started',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    NgClass
  ],
  templateUrl: './item-not-started.component.html',
  styleUrls: ['./item-not-started.component.scss', '../todo-base.scss']
})
export class ItemNotStartedComponent extends TodoItemBase{

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
