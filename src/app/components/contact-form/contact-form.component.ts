import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private readonly MIN_NUMBER_OF_LETTERS = 2;
  private readonly EMAIL_REGEXP = new RegExp(
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'
  );

  // TODO: 2019-04-16 Blockost Use Angular react forms + use built-in validators
  @ViewChild('emailAddress') private emailAddressEl!: ElementRef;
  @ViewChild('message') private messageEl!: ElementRef;

  formGroupClass = 'form-group';
  isEmailValid = true;
  isMessageValid = true;

  constructor() {}

  ngOnInit() {}

  validateEmailAddress(): boolean {
    const email = this.emailAddressEl.nativeElement.value;

    if (this.EMAIL_REGEXP.test(email)) {
      this.isEmailValid = true;
      this.formGroupClass = 'form-group has-success';
    } else {
      this.isEmailValid = false;
      this.formGroupClass = 'form-group has-danger';
    }

    return this.isEmailValid;
  }

  validateMessage(): boolean {
    const message: string = this.messageEl.nativeElement.value;

    this.isMessageValid =
      message.split('').length >= this.MIN_NUMBER_OF_LETTERS;

    return this.isMessageValid;
  }

  sendMessage() {
    if (this.validateEmailAddress() && this.validateMessage()) {
      // TODO: 2018-07-01 Blockost Create email service and send email here with given email
      // address and message
      throw new Error('Not implemented yet');
    }
  }
}
