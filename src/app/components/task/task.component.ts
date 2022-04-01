import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task! : any;
  @Input() name! : any;
  constructor() { }

  ngOnInit(): void {
  }

}
