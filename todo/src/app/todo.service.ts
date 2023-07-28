import { Injectable } from '@angular/core';
import { List } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl:string = 'http://localhost:3000/list';

  constructor() { }

  getTodos(): Promise<List[]> {
    return fetch(this.apiUrl).then(res => res.json());
  }

  getById(id:number): Promise<List> {
    return fetch(this.apiUrl+'?id='+id).then(res => res.json());
  }

  create(task:Partial<List>): Promise<List> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(res => res.json());
  }

  update(task:List): Promise<List> {
    return fetch(this.apiUrl+'/'+task.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(res => res.json());
  }

  delete(task:List) {
    return fetch(this.apiUrl+'/'+task.id, {
      method: 'DELETE'
    }).then(res => res.json());
  }


}
