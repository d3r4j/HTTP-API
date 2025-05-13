import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { TabelDataComponent } from './tabel-data/tabel-data.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "home", component: TabelDataComponent },
  { path: "addedit", component: AddEditComponent },
  { path: "addedit/:id", component: AddEditComponent },
  { path: "album", component: AlbumComponent },
  { path: '', component: TabelDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
