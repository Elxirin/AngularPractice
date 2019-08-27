import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  name = 'Hi';
  process() {
    alert(this.name);
  }

  processData(event) {
    this.name = event.target.value;
  }

}
