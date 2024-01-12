import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    NgClass
  ],
  templateUrl: './item-done.component.html',
  styleUrls: ['./item-done.component.scss', '../todo-base.scss']
})
export class ItemDoneComponent extends TodoItemBase{

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }


}
