import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit{
  constructor(public fbobj: FormBuilder) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  Batches: any = ['Angular: Web Development', 'Python: Machine Learning', 'Machine Learning', 'GoLang', 'IPhone Programming', 'Android Programming'];

  emailRegex1 = "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
  //  integerRegex1 = /^d*$/;  //this is for age 

  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    // lname: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(9), Validators.pattern(this.emailRegex1)]),
    // password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    // confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    batch : new FormControl('', [Validators.required]),
    RegisterClass: this.fbobj.group(
      {
        // batch: ['Angular Web Development'],
        fees: ['1000']

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
