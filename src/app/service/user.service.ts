
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interface/user';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'

  readonly moreparams = ['test', 'alex', 'bull']

  constructor(private http: HttpClient) { }

  getFile(): Observable<string> {
    return this.http.get(`assets/file.txt`, { responseType: 'text' })
  }
  getUsers(): Observable<User> {
    // let myheader = new HttpHeaders({ 'myheader': ['this is a header string', 'dhiraj'] })
    // myheader = myheader.set('id', '1234')
    // myheader = myheader.append('id', '0000')
    // myParmas = myParmas.append('name', 'dhiraj')
    // const theParams = { ['testList']: this.moreparams }
    // let myParmas = new HttpParams({ fromObject: theParams })

    return this.http.get<User>(`${this.apiUrl}/users`).pipe(
      tap(user => console.log(user))
    )
    // return this.http.get<User[]>(`${this.apiUrl}/users`, { observe: 'events', reportProgress: true })
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }

  createdUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  PatchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
  }
}
