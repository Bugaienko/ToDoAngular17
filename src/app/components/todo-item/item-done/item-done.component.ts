import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [],
  templateUrl: './item-done.component.html',
  styleUrls: ['./item-done.component.css', '../todo-base.scss']
})
export class ItemDoneComponent extends TodoItemBase{

}
