import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  item: Observable<any>;
  sample: Observable<any[]>;
  constructor(private afdb: AngularFireDatabase, private fb: FormBuilder) {
    this.item = afdb.object<any>('item').valueChanges();
    this.sample = afdb.list<any[]>('sample').valueChanges();
  }

  valueForm = this.fb.group({
    name: ['', [Validators.required]]
  });
  ngOnInit() {
  }

  onFormSubmit() {

    // if (this.valueForm.valid) {

    //   const data =  {name: this.valueForm.get('name').value}
    //   this.afdb.object('item').set(data);
    //   this.afdb.list('sample').push(data);


    // }


    if (this.valueForm.valid) {

      const data = { name: this.valueForm.get('name').value }
      this.afdb.object('item').set(data);
      this.afdb.list('sample').push(data);


    }


  }

}
