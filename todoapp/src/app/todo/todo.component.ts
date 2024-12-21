import { Component } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  taskTodo:string = '';
  taskDate:Date = new Date();
  allTasks:Task[]=[]; // array of tasks


  ngOnInit():void{
    let savedTasks = localStorage.getItem('alltaskkey');
    this.allTasks = savedTasks?JSON.parse(savedTasks):[];
  }

  createTask():void{
    
    let task: Task={
      id:'id1',
      task:this.taskTodo,
      date: this.taskDate,
    }
    this.allTasks.push(task)
    this.taskTodo = '';

    this.updateLocalStorage();
    
  }

  deleteTask(index: number):void{
    this.allTasks.splice(index,1);
    this.updateLocalStorage();
  }

  updateTask(index:number):void{
    
  }

  updateLocalStorage():void{
    localStorage.setItem("alltaskkey",JSON.stringify(this.allTasks));
  }

}


interface Task {
  id:string;
  task:string;
  date:Date;
}
