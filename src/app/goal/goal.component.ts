import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
// export class GoalComponent implements OnInit {

//   goals: Goal[] = [
//     new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
//     new Goal(2,'Buy Cookies','I have to buy cookies for the parrot'),
//     new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon'),
//     new Goal(4,'Get Dog Food','Pupper likes expensive snacks'),
//     new Goal(5,'Solve math homework','Damn Math'),
//     new Goal(6,'Plot my world domination plan','Cause I am an evil overlord'),
//   ];

// export class GoalComponent implements OnInit {

//   goals: Goal[] = [
//     new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,6,4)),
//     new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2020,6,2)),
//     new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
//     new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
//     new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
//     new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
//   ];

export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'We make a living by what we get, but we make a life by what we give.', 'Winston Churchill',new Date(1987,9,14)),
    new Goal(2,'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.', 'Winston Churchill',new Date(1988,6,9)),
    new Goal(3,'You know the funny thing, I do not get along with rich people. I get along with the middle class and the poor people better than I get along with the rich people.','Donald Trump',new Date(2019,1,12)),
    new Goal(4,'Change will not come if we wait for some other person or some other time. We are the ones we have been waiting for. We are the change that we seek.','Barrack Obama',new Date(2015,11,18)),
    new Goal(5,'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','martin-luther-king-jr',new Date(1976,2,14)),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }
 
  ngOnInit() {
  }

}
