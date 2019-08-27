import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  srv = 'all';

  @Output()
  countRadioButtonValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number ;
  @Input()
  male: number ;
  @Input()
  female: number;
  constructor() { }

  ngOnInit() {
  }
  countRadioButtonValueChanged() {
    this.countRadioButtonValue.emit(this.srv);
  }
}
