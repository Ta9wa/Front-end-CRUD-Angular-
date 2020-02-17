import { Injectable } from '@angular/core';
//import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { runInThisContext } from 'vm';
import {UnArticle, PostArticle,categorie} from './articles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string="http://localhost/slimapp/myFirstApi/myFirstApi/app/api/articles.php";
  private add_url: string ="http://localhost/slimapp/myFirstApi/myFirstApi/app/api/ajouter.php";
  private del_url: string ="http://localhost/slimapp/myFirstApi/myFirstApi/app/api/delete.php";
  private up_url: string = "http://localhost/slimapp/myFirstApi/myFirstApi/app/api/editer.php";
  private cat_url : string ="http://localhost/slimapp/myFirstApi/myFirstApi/app/api/categorie.php"


  constructor(private http: HttpClient) { }
  
  //------------Get Article------
  getData(): Observable<UnArticle[]>{   
  return this.http.get<UnArticle[]>(this._url)
  }

  //-----------Add article----------
  save( article: PostArticle): Observable<UnArticle>{
    return this.http.post<UnArticle>(this.add_url, article
    
  )}

//-----------Delete Article------
  deleteArticle(id : number): Observable<UnArticle>{
    return this.http.delete<UnArticle>(`${this.del_url}/${id}`)
    
  }


//--------Update article---------
  updateArticle(article: PostArticle): Observable<UnArticle>{
    return this.http.put<UnArticle>(`${this.up_url}/${article.id}`,article)

  }

  //--------Get Categorie--------------
  getCat(): Observable<categorie[]>{   
    return this.http.get<categorie[]>(this.cat_url)
    }
}

