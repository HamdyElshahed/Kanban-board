export interface Task {
  id: number;
  title?: string;
  description: string;
  img: string;
  duedate: Date;
  completionflag:boolean;
  index: number;
  tag : string;
  activities: Activity[]
}
export interface Activity {
  title: string;
  id: number;
  complete : boolean;
}
