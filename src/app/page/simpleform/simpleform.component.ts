import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  @Output() formsubmit: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(simpleform: NgForm){
    if (simpleform.valid) {
      console.log(simpleform.value);
      this.formsubmit.emit(simpleform.value);
    } else {
      console.log('Please fill all field');
    }
  }

}
