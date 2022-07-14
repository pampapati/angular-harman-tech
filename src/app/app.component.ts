import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  name = 'Angular ' + VERSION.major;
  showImage = false;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  navigateGoogle() {
    window.open('www.google.com', '_blank');
  }
}
