import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'home work...';
  url = 'http://www.google.com';
  @Input() name: string;

  @Input() age: number;

  @Output() btnclick: EventEmitter<string> = new EventEmitter<string>();

  active = true;

  price = 1256.8;

  current = new Date();

  items = ['One','Two','Three','Four'];

  posts:Post[] = [];
  constructor(private postService: PostService) {
    this.postService.findAll().subscribe( value => {
      this.posts = value;
    });
  }

  ngOnInit() {
  }

  onButtonClick(){
    console.log('Hello Word');
    this.btnclick.emit(this.url);
  }

  onToggle(){
    this.active = !this.active;
  }


}
