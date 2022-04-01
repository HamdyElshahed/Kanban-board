import { Task, Activity } from './../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  allTasks(name: string) : Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:3000/${name}`).pipe(retry(3))
  }


  getTaskById(id: string, name: string): Observable<any> {
    return this.http.get(`http://localhost:3000/${name}/${id}`).pipe(retry(3))
  }

  updateCopmlete(id: string, name: string , data : Boolean) : Observable<any>{
    return this.http.patch(`http://localhost:3000/${name}/${id}` ,{completionflag:data})

  }


  updateActivities(id: string, name: string , data : Activity[]) : Observable<any>{
    return this.http.patch(`http://localhost:3000/${name}/${id}` ,{activities:data})

  }

  // getAllTasks(data: Task[], id: string , index: any) : any{
  //   let arr: Task[] = [];
  //   for (let i = 0; i < data.length; i++) {
  //     // arr= [...arr,{id:data.id , index}]
  //     arr.push({ id: data[i].id, index: i })
  //   }
  //   console.log(arr);
  //   let dataobj : {} = data.filter(task=>{return task.index === index});
  //   this.postTaskById(id, dataobj).subscribe(task=>{
  //     console.log(task)
  //     this.http.patch(`http://localhost:3000/${id}/1000`, { index: arr })
  //      .subscribe(d => {
  //        console.log(d)
  //      })
  //   })
  //   // console.log(data)
  // }
}
