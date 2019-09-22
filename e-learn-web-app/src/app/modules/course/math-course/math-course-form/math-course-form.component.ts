// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

// Data
import math_questions from '../../../../../assets/math_questions.json';
import { MathQuestionType } from '../../models/enums.js';

@Component({
  selector: 'app-math-course-form',
  templateUrl: './math-course-form.component.html',
  styleUrls: ['./math-course-form.component.scss']
})
export class MathCourseFormComponent implements OnInit {

  public questionId: string;
  public questions: any[];
  public currentQuestion: any;

  public countingQuestionType: MathQuestionType = MathQuestionType.Counting;
  public comparingQuestionType: MathQuestionType = MathQuestionType.Comparing;
  
  private currentAnswer: any;
  private correctAnswer: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const self = this;
    self.questionId = self.route.snapshot.paramMap.get('id');
    self.questions = math_questions;
    self.currentQuestion = self.questions.find(x => x.id == self.questionId);
    self.correctAnswer = self.currentQuestion.correctAnswer;
  }

  public onAnswerSelected(answer: string): void {
    const self = this;
    self.currentAnswer = answer;
  }

  public openDialog() {
    const self = this;

    self.dialog.open(DialogDataExampleDialog, {
      width: '300px',
      height: '150px',
      data: {
        correct: self.correctAnswer == self.currentAnswer
      }
    });
  }

}

export interface DialogData {
  correct: true | false;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

