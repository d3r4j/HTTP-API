import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelDataComponent } from './tabel-data/tabel-data.component';
import { AddEditComponent } from './add-edit/add-edit.component'
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './album/album.component';
import { filterPipe } from './pipe/filter-text';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { highlight } from './directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    TabelDataComponent,
    AddEditComponent,
    AlbumComponent,
    filterPipe,
    LoginComponent,
    NavbarComponent,
    highlight,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
