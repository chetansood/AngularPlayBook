import { Injectable } from '@angular/core';
import {QA} from '../../model/questionAns';
import {Http} from '@angular/http';

@Injectable()
export class QuestionService {

  questions:QA[];
  constructor(private http:Http) { }

  public getQuestionList() : any{
    return this.http.get('/assets/data.json');
  }

}
