import { Component } from '@angular/core';
import {TodoItemBase} from "../todo-item-base.directive";

@Component({
  selector: 'app-item-not-started',
  standalone: true,
  imports: [],
  templateUrl: './item-not-started.component.html',
  styleUrls: ['./item-not-started.component.css', '../todo-base.scss']
})
export class ItemNotStartedComponent extends TodoItemBase{

}
