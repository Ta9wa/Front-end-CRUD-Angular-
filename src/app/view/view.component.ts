import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import {UnArticle, PostArticle} from '../articles';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  public data = [];
  public cat=[];
  public title="Ajouter";
  article : UnArticle;
  public activeindex=-1;
  PostArticle = new  PostArticle;

  constructor(private articleService: ApiService) { }


  //---------Afficher articles------
  getData(){
    this.articleService.getData()
    .subscribe(data => this.data = data
      )
    
  }

  getCat(){
    this.articleService.getCat().subscribe(
      cat => this.cat = cat
    )
  }


/*saveArticle(){
  console.log(this.PostArticle)
};*/

  //--------Suuprimer article ------
  deleteArticle(id : number){
    this.articleService.deleteArticle(id).subscribe( data =>{
      this.getData();
    })
    ;
    //console.log(id);
  }

  //------Ajouter un article-------

onSubmit(){

  if(this.activeindex==-1){

  
    //this.PostArticle = new PostArticle();
  this.articleService.save(this.PostArticle).subscribe(data =>{
    this.getData();
    window
    ///console.log(PostArticle)
  })
  } else {

    this.articleService.updateArticle(this.PostArticle).subscribe(data =>{
      this.getData();
    })
  }
  } 
  //--------Editer Article-------------------

  EditerArticle(art,index){

    this.PostArticle.id=art.id;
    this.PostArticle.nom=art.nom;
    this.PostArticle.categorie=art.categorie;
    this.PostArticle.prix=art.prix;
    this.PostArticle.description=art.description;
    this.PostArticle.quantite=art.quantite;
    
    this.title="Editer";
    this.activeindex=index;

    //console.log("object",art);
    console.log(this.activeindex);
    //this.articleService.updateArticle(article).subscribe()
  }


  

  

  ngOnInit() {
    //this.getData();
    
  }

}
