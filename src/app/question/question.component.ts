import { Component, OnInit, Input } from '@angular/core';
import {QA} from '../../model/questionAns';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question: QA;
  text:string;
  constructor() { }

  ngOnInit() {
    this.text = "Show Answer";
  }

  private toggle():void{
    this.question.displayAnswer=!this.question.displayAnswer;
    if(this.question.displayAnswer)this.text = "Hide Answer";
    else this.text = "Show Answer"; 
  }

}
