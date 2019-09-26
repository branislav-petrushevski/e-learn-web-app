// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import Speech from 'speak-tts' // es6

// Data
import language_questions from '../../../../../assets/questions.json';

// Enums
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

  private speech: Speech;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private _router: Router) { }

  ngOnInit() {
    const self = this;
    self.questionId = self.route.snapshot.paramMap.get('id');
    self.questions = language_questions;
    self.currentQuestion = self.questions.find(x => x.id == self.questionId);
    self.correctAnswer = self.currentQuestion.correctAnswer;

    self.speech = new Speech();
    self.speech.init({
      'volume': 1,
        'lang': 'en-US',
        'rate': 1,
        'pitch': 1,
        'voice':'Microsoft Zira Desktop - English (United States)',
        'splitSentences': true,
        'listeners': {
            'onvoiceschanged': (voices) => {
                console.log("Event voiceschanged", voices)
            }
        }
    }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data);

        self.speech.setVoice('Microsoft Zira Desktop - English (United States)'); // you can pass a SpeechSynthesisVoice as returned by the init() function or just its name

        self.speech.speak({
          text: self.currentQuestion.title,
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        });
    }).catch(e => {
        console.error("An error occured while initializing : ", e);
    });

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

    self.speech.speak({
      text: self.correctAnswer == self.currentAnswer ? 'The answer is correct' : 'The answer is incorrect',
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    });
  }

  public goBack(): void {
    const self = this;
    self._router.navigate(['courses/language-course']);
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
