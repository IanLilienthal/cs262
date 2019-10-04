import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];
  // test
  constructor() { }

  load(){

  }

  save(){

  }

  getTodo(id){

  }

  addTodo(todo){

  }

}
