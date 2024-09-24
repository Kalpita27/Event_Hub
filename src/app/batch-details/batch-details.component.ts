import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent {

  constructor(public fbobj: FormBuilder) {}

  Batches: any = ['IOT', 'IOS Internals', 'LSP', 'Struts', 'Embedded Programming', 'IOT Workshop'];

  emailRegex1 = "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
  //  integerRegex1 = /^d*$/;  //this is for age 

  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    lname: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(9), Validators.pattern(this.emailRegex1)]),
    // password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    // confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    batch : new FormControl('', [Validators.required]),
    RegisterClass: this.fbobj.group(
      {
        // batch: ['Angular Web Development'],
        fees: ['500']

      })
  })

  getControls(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  registerFn() {
    console.log(this.registerForm.value)
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
