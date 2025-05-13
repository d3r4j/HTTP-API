import { Component, OnInit } from '@angular/core';
import { TabelService } from '../service/tabel.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  constructor(private service: TabelService) { }

  userdata: any = ''
  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.service.getAlbum().subscribe({
      next: (res) => {
        this.userdata = res
        console.log(this.userdata)
      }
    })
  }

  deleteuser(id: number) {
    this.service.deleteAlbum(id).subscribe({
      next: (res) => {
        alert("user deleted");
        console.log(res)
        this.getdata()
      }
    })
  }
}
