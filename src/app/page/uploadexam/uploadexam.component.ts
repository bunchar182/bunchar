import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-uploadexam',
  templateUrl: './uploadexam.component.html',
  styleUrls: ['./uploadexam.component.css']
})
export class UploadexamComponent implements OnInit {
  uploadPercent: Observable<number>;
  constructor(private af: AngularFireStorage) { }
  dowloadPath: Observable<string>;
  ngOnInit() {
  }

  onUpload(event) {
    const file: File = event.target.files[0];
    const filename = file.name;
    const fileref = this.af.ref(filename);
    const task = this.af.upload(filename, file);
    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.dowloadPath = fileref.getDownloadURL();
      })
    ).subscribe();
  }

}
