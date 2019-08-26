import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  onBtnClick(url: string){
    console.log(url);

  }

  onFormSubmit(formValue:any){
    console.log(formValue);

  }
}
