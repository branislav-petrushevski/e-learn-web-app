// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  public memoryQuestionType: MathQuestionType = MathQuestionType.Memory;
  
  public memoryImageUrl: string;

  private currentAnswer: any;
  private correctAnswer: any;

  private timeLeft: number = 10;
  private interval: any;
  private numberOfTicksAnswer: number = 0;

  public myForm: FormGroup;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private _router: Router) { 
    this.myForm = new FormGroup({
      numberOfTicks: new FormControl(0, [ Validators.required])
    });
  }

  ngOnInit() {
    const self = this;
    self.questionId = self.route.snapshot.paramMap.get('id');
    self.questions = math_questions;
    self.currentQuestion = self.questions.find(x => x.id == self.questionId);
    self.correctAnswer = self.currentQuestion.correctAnswer;
    
    if (self.currentQuestion.type == MathQuestionType.Memory) {
      self.memoryImageUrl = self.currentQuestion.firstImageUrl;

      self.interval = setInterval(() => {
        if (self.timeLeft > 0) {
          self.timeLeft--;
          if (self.memoryImageUrl == self.currentQuestion.firstImageUrl) {
            self.memoryImageUrl = self.currentQuestion.secondImageUrl;
            self.numberOfTicksAnswer ++;
          } else {
            self.memoryImageUrl = self.currentQuestion.firstImageUrl;
          }
        } 
      },1000)
    }
  }

  public onAnswerSelected(answer: string): void {
    const self = this;
    self.currentAnswer = answer;
  }

  public openDialog() {
    const self = this;

    if (self.currentQuestion.type == MathQuestionType.Memory) {
      if (self.numberOfTicksAnswer == self.myForm.controls['numberOfTicks'].value) {
        clearInterval(self.interval);
      }
      self.dialog.open(DialogDataExampleDialog, {
        width: '300px',
        height: '150px',
        data: {
          correct: self.numberOfTicksAnswer == self.myForm.controls['numberOfTicks'].value
        }
      });
    } else {
      self.dialog.open(DialogDataExampleDialog, {
        width: '300px',
        height: '150px',
        data: {
          correct: self.correctAnswer == self.currentAnswer
        }
      });
    }
  }

  public goBack(): void {
    const self = this;
    self._router.navigate(['courses/math-course']);
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

