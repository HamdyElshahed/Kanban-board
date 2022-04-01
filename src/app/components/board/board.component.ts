import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import {first} from 'rxjs/operators'
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tasks : Task[]=[];

  todo : Task[]=[];

  done : Task[]=[];
  constructor(private requestsservice : RequestsService) { }

  ngOnInit(): void {
    this.requestsservice.allTasks('backlog').subscribe((tasks) => {
      this.tasks=[...tasks];
    })
    this.requestsservice.allTasks('todo').subscribe((todo) => {
      this.todo = [...todo];
    })
    this.requestsservice.allTasks('done').subscribe((done) => {
      this.done =[...done];
    })
  }
}

