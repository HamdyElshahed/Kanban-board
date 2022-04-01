import { Task, Activity } from './../../models/task.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.css']
})
export class TaskpageComponent implements OnInit {
  id!: any;
  name!: any;
  data! : Task ;
  constructor(private requestsservice : RequestsService , private activateroute : ActivatedRoute) { }

  ngOnInit(): void {
      this.activateroute.params.pipe(
        mergeMap(params=>{
            console.log(params)
            this.id = params.id;
            this.name = params.name;
           return this.requestsservice.getTaskById(params.id , params.name)
        })
      ).subscribe(data => {
        this.data={...data};
        console.log(this.data)
      })
  }

  drop(event: CdkDragDrop<Activity[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.requestsservice.updateActivities(this.id , this.name ,event.container.data).subscribe((data)=>{
      this.data ={...data}
    })
    // if (event.previousContainer === event.container) {
    //    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //     );
    // }
  }

  updateCopmlete(flag : any){
    this.requestsservice.updateCopmlete(this.id , this.name ,flag ).subscribe((data)=>{
      this.data = {...data};
    })
  }

  updateActivaty(data : any){
    this.requestsservice.updateActivities(this.id , this.name ,data ).subscribe((data)=>{
      this.data = {...data};
    })
  }

  updateActivatycomplete(id: number , flag : boolean){
    this.data.activities.map((activity)=>{
      if(activity.id === id){
        activity.complete = flag;
      }
    })
    this.requestsservice.updateActivities(this.id , this.name ,this.data.activities).subscribe((data)=>{
      this.data ={...data}
    })
  }
}
