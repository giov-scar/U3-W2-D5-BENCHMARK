import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/todo';
import { TodoService } from'src/app/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
newList: List = new List('',0);
message: string = '';
  lists:List[] = [];

constructor(
  private listSvc: TodoService,
  private router: Router
){}

check():boolean{
  if(!this.newList.task) return true;

  return false
}

addList(){
  this.listSvc.create(this.newList)
  .then(res => {
    this.message = `Nuovo Task creato!`

}); this.lists.push(this.newList)
}

ngOnInit() {
  this.listSvc.getTodos()
  .then(list => {
    this.lists = list;
  })
}

}
