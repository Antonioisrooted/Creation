// import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Component, OnInit, Output, EventEmitter } from'@angular/core';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
// export class GoalFormComponent implements OnInit {

  // newGoal = new Goal(0,"","",new Date());
  export class GoalFormComponent implements OnInit {

    newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();
  
    submitGoal(){
  this.addGoal.emit(this.newGoal);
    }
  constructor() { }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-goal-form',
//   templateUrl: './goal-form.component.html',
//   styleUrls: ['./goal-form.component.css']
// })
// export class GoalFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



