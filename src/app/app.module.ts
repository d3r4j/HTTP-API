import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelDataComponent } from './tabel-data/tabel-data.component';
import { AddEditComponent } from './add-edit/add-edit.component'
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './album/album.component';
@NgModule({
  declarations: [
    AppComponent,
    TabelDataComponent,
    AddEditComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
