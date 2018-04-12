import { Component, OnInit } from '@angular/core';
import {QA} from '../../model/questionAns';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questionAnsList: QA[];
  constructor(private questionService:QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestionList().subscribe(res => {
                  console.log(res.json());
                  this.questionAnsList = res.json()
                });;
  }

}
