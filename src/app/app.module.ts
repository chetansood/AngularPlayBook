import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { HttpModule }      from '@angular/http';
import {QuestionService} from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
