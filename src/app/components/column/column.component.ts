import { Task } from './../../models/task.model';
import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { RequestsService } from 'src/app/services/requests.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() data! : any;
  @Input() name! : any;
  constructor(private requestsservice : RequestsService , private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.data)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
        // this.requestsservice.getAllTasks(event.container.data  , event.container.id , event.currentIndex )
        // this.requestsservice.getAllTasks(event.previousContainer.data  , event.previousContainer.id , event.previousIndex)
      // console.log(event)
      // console.log(event.previousContainer.id)

    }
  }
}
