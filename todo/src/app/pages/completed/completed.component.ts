import { Component } from '@angular/core';
import { List } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  lists: List[] = []
  constructor(
    private listSvc: TodoService) {}

    ngOnInit() {
      this.listSvc.getTodos()
      .then(list => {
        this.lists = list.filter(el=> el.completed === true)
      })
    }

    deleteList(list: List) {
      list.completed = false
      this.listSvc.delete(list)
      .then((res) => {
        console.log(res);

      }), this.lists = this.lists.filter(el=> el.completed === true)
    }
}
