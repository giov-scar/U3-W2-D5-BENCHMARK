import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  list:List = new List(0,'',false);

  constructor(
    private listSvc:TodoService,
    private route:ActivatedRoute) {}

    ngOnInit(){
      this.route.params.subscribe((params:any)=>{
        this.listSvc.getById(params.id).then(res => {
          this.list = res;
        })
      }
      )
  }

  save(){
    this.listSvc.update(this.list).then(res => {
      this.list = res;
    })
  }
}
