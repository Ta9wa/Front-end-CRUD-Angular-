import { Component, OnInit } from '@angular/core';
import {PostArticle} from '../articles';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import {UnArticle} from '../articles';






@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public data = [];
  article : UnArticle;
  constructor(private articleService: ApiService) { }

  
 //---------Afficher articles------
 getData(){
  this.articleService.getData()
  .subscribe(data => {this.data = data})
  
}

  EditerArticle(article: PostArticle){

    console.log(article)
    //this.articleService.updateArticle(article).subscribe()
  }

  ngOnInit() {
  }

}
