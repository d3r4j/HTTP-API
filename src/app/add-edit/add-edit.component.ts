import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TabelService } from '../service/tabel.service';
import { TabelDataComponent } from '../tabel-data/tabel-data.component';

@Component({
  selector: 'add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private service: TabelService) { }
  user: User = {
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getdatabyid(id).subscribe({
        next: (res) => {
          this.user = res;
          console.log(this.user)
        },
        error: (err) => { console.log("error to get form data", err) }
      })
    }

  }

  saveFrom() {
    console.log("form submitted", this.user);
    if (this.user.id) {
      this.service.getdatabyid(this.user.id).subscribe({
        next: () => {
          this.service.updateUser(this.user).subscribe({
            next: () => {
              console.log("user updated")
              alert("user data updated")
            }
          })
          this.service.getdata()
          this.router.navigate(['/home'])
        },
        error: () => {
          this.service.postuser(this.user).subscribe({
            next: () => {
              alert("user added successfully")
              console.log("new user added")
            }
          })
          this.service.getdata();
          this.router.navigate(['/home'])
        }
      })
    }
  }
}

