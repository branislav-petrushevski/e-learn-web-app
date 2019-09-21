import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import language_questions from '../../../../../assets/questions.json';

@Component({
  selector: 'language-course-form',
  templateUrl: './language-course-form.component.html',
  styleUrls: ['./language-course-form.component.scss']
})
export class LanguageCourseFormComponent implements OnInit {

  public questionId: string;
  public questions: any[];
  public currentQuestion: any;
  
  private currentAnswer: any;
  private correctAnswer: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const self = this;
    self.questionId = self.route.snapshot.paramMap.get('id');
    self.questions = language_questions;
    self.currentQuestion = self.questions.find(x => x.id == self.questionId);
    self.correctAnswer = self.currentQuestion.correctAnswer;
  }

  public onAnswerSelected(answer: string): void {
    const self = this;
    self.currentAnswer = answer;
  }

  public onAnswerSubmitted(): void {
    const self = this;
 
    if (self.currentAnswer == self.correctAnswer) {
      console.log("correct answer");
    } else {
      console.log("incorrect answer");
    }
  }

}
