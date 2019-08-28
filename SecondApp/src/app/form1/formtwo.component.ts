import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css']
})
export class FormtwoComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]), email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(), city: new FormControl(), pincode: new FormControl(null, Validators.pattern("[1-9][0-9]{5}"))
    })
  });
  constructor() { }

  ngOnInit() {
  }

  process(value) {
    console.log(this.userForm.value);
  }

}
