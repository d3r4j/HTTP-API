import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "dhiraj";
  private user: any = {
    'id': 0,
    'name': 'nidhi singh',
    'username': 'badass nidhi',

  }

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    // // this.onEditUSer();
    // this.onGetUsers();
    // // this.onGetSingleUser();
    // // this.onCreateUser();
    // this.onPatchUSer();
    // this.onDeleteUser()
    // this.getFile()
  }



  onGetUsers() {

    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log("response", res);
      },
      error: (err) => {
        console.log("error", err)
      },
      complete: () => {
        console.log("completed api")
      }
    })
  }

  onGetSingleUser() {
    this.userService.getUser().subscribe({
      next: (res) => {
        console.log("single user", res);
      },
      error: (err) => {
        console.log("error", err);
      },
      complete: () => {
        console.log("completed single user api")
      }
    })
  }

  onCreateUser(): void {
    this.userService.createdUser(this.user).subscribe({
      next: (res) => {
        console.table(res);
      },
      error: (err) => {
        console.log("error in post api", err)
      },
      complete: () => { console.log("post api completed") }
    })
  }


  onEditUSer(): void {
    this.userService.updateUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("error in post api", err)
      },
      complete: () => { console.log("updating api completed") }
    })
  }

  onPatchUSer(): void {
    this.userService.PatchUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("error in post api", err)
      },
      complete: () => { console.log("updating api completed") }
    })
  }
  onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe({
      next: (res) => { console.log("user deleted", res) },
      error: (err) => { console.log("error deleting", err) },
      complete: () => { console.log("delete complete method runned") }
    })
  }

  getFile(): void {
    this.userService.getFile().subscribe({
      next: (res) => { console.log("file text response", res) },
      error: (err) => { console.log(err) },
      complete: () => { console.log("file text complete") }
    })
  }
  routerButton() {
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if (currentUrl.includes('album')) {
      this.router.navigate(['home'])
    }
    else {
      this.router.navigate(['album'])
    }
  }
}
