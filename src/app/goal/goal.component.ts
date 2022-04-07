import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
  // styles: ['h6 {color: red} ']
})
export class GoalComponent implements OnInit {
  // goals: Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];


  goals:Goal[] = [
    new Goal (1, 'Workout','Do ab workout',new Date(2022,3,14)),
    new Goal (2,'Practice angular','Research promises  further',new Date(2022,4,13)),
    new Goal (3,'Play chess','For entertainment',new Date(2022,5,10)),
    new Goal (4,'Play FIFA' ,'For entertainment',new Date(2022,4,12)),
    new Goal (5,'Study leadership skills' ,'LinkedIn',new Date(2022,3,6)),
    new Goal (6,'Practice UX design','Making my portfolio',new Date(2022,3,7)),
  ];
  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // completeGoal(isComplete:any, index:any){
  //   if (isComplete) {
  //     this.goals.splice(index,1);
  deleteGoal(isComplete:any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
    }
  }
}
addNewGoal(goal:Goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}

  constructor() { }

  ngOnInit(): void {
  }

}
