import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  text = 'contact-page';
  contactForm: FormGroup = new FormGroup({});
  contact = {
    name: '',
    email: '',
    text: '',
    password: '',
  };
  submitted = false;
  constructor() {
    this.createForm();
  }
  createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl(this.contact.text, Validators.required),
      password: new FormControl(this.contact.password, [
        Validators.required,
        Validators.pattern(/\d+/g),
      ]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;
  }
}
