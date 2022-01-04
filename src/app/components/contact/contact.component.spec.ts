import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { TestService } from 'src/app/service/test.service';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let testService: TestService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers:[TestService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        testService = TestBed.inject(TestService);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have Testservice',async () => {
    expect(testService).toBeTruthy();
  })
  it('should have text contact-page ', async () => {
    expect(comp.text).toEqual('contact-page');
  });

  it('should set submitted to true ', async () => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  });

  it('should call the onSubmit method', async () => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form to be invalid', async () => {
    comp.contactForm.controls['email'].setValue('');
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  });

  it('form to be valid', async()=>{
    comp.contactForm.controls['email'].setValue('asd@asd.com');
    comp.contactForm.controls['name'].setValue('asd@asd.com');
    comp.contactForm.controls['text'].setValue('asd@asd.com');
    comp.contactForm.controls['password'].setValue('123');
    expect(comp.contactForm.valid).toBeTruthy();
  })

  it('pwd to be digit', async()=>{
    comp.contactForm.controls['email'].setValue('asd@asd.com');
    comp.contactForm.controls['name'].setValue('asd@asd.com');
    comp.contactForm.controls['text'].setValue('asd@asd.com');
    comp.contactForm.controls['password'].setValue('dawfa');
    expect(comp.contactForm.valid).toBeFalsy();
  })

});
