import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string;
  email: string;
  street: string;
  city: string;
  pincode: string;
  processForm (value: any) {
    
    console.log(value);
    
  }
}
