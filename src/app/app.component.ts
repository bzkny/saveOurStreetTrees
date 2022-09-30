import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'save-our-street-trees';
  zip: number = 0;
  userZip: number = 0;

  constructor(){ }

  ngOnInit() {
    this.userZip = this.zip;
  }
  submit() {  
    this.userZip = this.zip;
  }  

}

