import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module'
import { from } from 'rxjs';
import { ViewComponent } from './view/view.component';
import { ApiService } from './api.service';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule, MatFormFieldModule,MatInputModule} from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'veiw', component: ViewComponent},
      {path: 'add', component: AddComponent},
      {path: 'update', component: UpdateComponent},
      {path: 'login', component: LoginComponent}
    ])

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
