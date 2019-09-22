import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import language_questions from '../../../../../assets/questions.json';
import { MatDialog } from '@angular/material';

import {  Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LanguageQuestionType } from '../../models/enums.js';

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

  public letterIdentificationType: LanguageQuestionType = LanguageQuestionType.LetterIdentification;
  public analysisType: LanguageQuestionType = LanguageQuestionType.Analysis;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

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
