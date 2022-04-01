import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TaskComponent } from './components/task/task.component';
import { TaskpageComponent } from './components/taskpage/taskpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent,
    TaskpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DragDropModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
