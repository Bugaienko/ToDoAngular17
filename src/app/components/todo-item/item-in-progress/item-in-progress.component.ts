import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [],
  templateUrl: './item-in-progress.component.html',
  styleUrls: ['./item-in-progress.component.css', '../todo-base.scss']
})
export class ItemInProgressComponent extends TodoItemBase{

}
