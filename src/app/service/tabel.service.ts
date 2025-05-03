import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class TabelService {

  constructor(private http: HttpClient) { }
  api_url: string = "http://localhost:3000/users"

  getdata() {
    return this.http.get(this.api_url)
  }
  getdatabyid(id: any): Observable<User> {
    return this.http.get<User>(`${this.api_url}/${id}`)

  }
  delete_data(id: number): Observable<any> {
    console.log(`Attempting DELETE: ${this.api_url}/${id}`);
    return this.http.delete<any>(`${this.api_url}/${id}`)
  }


  updateUser(data: User): Observable<User> {
    if (!data.id) {
      throw Error("Error updating user data")
    }
    return this.http.put<User>(`${this.api_url}/${data.id}`, data)
  }
  postuser(data: User): Observable<User> {
    return this.http.post<User>(this.api_url, data)
  }

  // album

  getAlbum() {
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
  deleteAlbum(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

}
