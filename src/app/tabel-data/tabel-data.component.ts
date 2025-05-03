import { Component, OnInit } from '@angular/core';
import { TabelService } from '../service/tabel.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-tabel-data',
  templateUrl: './tabel-data.component.html',
  styleUrls: ['./tabel-data.component.css']
})
export class TabelDataComponent implements OnInit {
  constructor(private service: TabelService) { }

  ngOnInit(): void {
    this.mydata()

  }

  user: any = []

  mydata() {
    this.service.getdata().subscribe({
      next: (res) => {
        console.log(res)
        this.user = res
        console.log(this.user)
      }
    })
  }

  removedata(id: number) {
    console.log(id)
    this.service.delete_data(id).subscribe({
      next: (res) => {
        alert(`deleted user ID ${id}`)
        console.log(res)
        this.mydata()
      },
      error: (err) => {
        console.log("delete error", err)
      }

    })
  }
  addData() {
    this.service
  }

  // add_new_data() {
  //   this.service.addempdta(this.user).subscribe({
  //     next: (res) => {
  //       alert("new user added successfully")
  //     }
  //   })
}

