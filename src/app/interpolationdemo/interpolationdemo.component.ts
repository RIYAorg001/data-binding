import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolationdemo.component.html',
  styleUrls: ['./interpolationdemo.component.css']
})
export class InterpolationdemoComponent implements OnInit {

  name="kolkata";
  getInlineFunc(){
    return "Just For Demo"
  }
  constructor() { }

  ngOnInit() {
  }

}
