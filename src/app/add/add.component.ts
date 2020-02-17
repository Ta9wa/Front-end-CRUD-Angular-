import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {PostArticle} from '../articles';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
PostArticle = new  PostArticle;
data :any;
  constructor(private articleService: ApiService) { }

getData(){
    this.articleService.getData()
    .subscribe(data => this.data = data)
    
  }

//------Ajouter un article-------

saveArticle(): void{
  this.PostArticle = new PostArticle();
this.articleService.save(this.PostArticle).subscribe(
  (data: PostArticle) => {console.log(data)})
}

/*saveArticle(){
  console.log(this.PostArticle)
};*/
  
  ngOnInit() {
  }

}
