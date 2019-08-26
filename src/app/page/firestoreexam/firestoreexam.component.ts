import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';



@Component({
  selector: 'app-firestoreexam',
  templateUrl: './firestoreexam.component.html',
  styleUrls: ['./firestoreexam.component.css']
})
export class FirestoreexamComponent implements OnInit {

  constructor(private fb: FormBuilder, private afstore: AngularFirestore) {

    // this.items = this.afstore.collection<Item>('items').valueChanges();
    this.items = this.afstore.collection<Item>('items', ref => ref.where('size', '==', 'small')).valueChanges();
  }

  itemForm = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    size: ['small', [Validators.required]]
  });

  items: Observable<Item[]>;
  ngOnInit() {
  }

  onFormSubmit() {
    if (this.itemForm.valid) {
      //this.afstore.collection('items').add(this.itemForm.value);
      this.afstore.collection('items').doc(this.itemForm.get('code').value).set(this.itemForm.value);
    }
  }

  onDeleteClick(code: string) {
    // this.afstore
    // .collection('items')
    // .doc(code)
    // .delete();
    this.afstore.collection('items', ref => ref.where('code', '==', code)).get().subscribe(data => {
      data.forEach(doc => {
        doc.ref.delete();
      })
    })
  }
}
