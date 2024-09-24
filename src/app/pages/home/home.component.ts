import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { EventService } from '../../event.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // events: any;
  constructor(public fbobj: FormBuilder, private _eventService: EventService) {}

  Batches: any = ['IOT', 'IOS Internals', 'LSP', 'Struts', 'Embedded Programming', 'IOT Workshop'];

  emailRegex1 = "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
  //  integerRegex1 = /^d*$/;  //this is for age 

  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(9), Validators.pattern(this.emailRegex1)]),
    // message: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(50)])
    // password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    // confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    
  })

  getControls(name: any): AbstractControl {
    return this.registerForm.get(name);
  }

  registerFn() {
    console.log(this.registerForm.value)
  }

  ngOnInit() {
    AOS.init();
  
    // this._eventService.getEvents()
    // .subscribe(
    //   res => this.events = res,
    //   err => console.log(err)
    // )
  }
  // Method to set FormControl fields through program
  // SetData()
  // {
  //   this.MarvellousForm.setValue(
  //     {
  //       username : 'Piyush',
  //       passowrd : 'abcd',
  //       ConfirmPass :  'abcd',
  //       MarvellousClass : 
  //       {
  //         batch : 'Python',
  //         fees : '5000'
  //       }
  //     }
  //   )
  // }
  
}
