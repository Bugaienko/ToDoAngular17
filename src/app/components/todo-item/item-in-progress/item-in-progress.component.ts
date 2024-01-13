import {Component, EventEmitter, Output} from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    NgClass
  ],
  templateUrl: './item-in-progress.component.html',
  styleUrls: ['./item-in-progress.component.scss', '../todo-base.scss']
})
export class ItemInProgressComponent extends TodoItemBase{

  // @Output() changeStatus = new EventEmitter<{status: number, indexGroup: number}>

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }


}
