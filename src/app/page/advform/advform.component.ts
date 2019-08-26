import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-advform',
  templateUrl: './advform.component.html',
  styleUrls: ['./advform.component.css']
})
export class AdvformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  simpleForm = this.fb.group({
    first:['',[Validators.required,Validators.minLength(5)]],
    last:['',[Validators.required]]
  });
  ngOnInit() {
  }

  onFormSubmit(){
    if(this.simpleForm.valid){
      console.log(this.simpleForm.value);
    }else{
      console.log('Please fill all fileds')
    }
  }

}
