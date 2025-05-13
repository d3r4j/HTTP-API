import { Component, OnInit } from '@angular/core';
import { TabelService } from '../service/tabel.service';
import * as XLSX from 'xlsx'

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
  filtername: string = "";
  filename = 'table-01.xlsx'
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
  // downlaode data
  excelfile(): void {
    let element = document.getElementById('tabelfile')
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)

    const wb: XLSX.WorkBook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(wb, ws, 'table-01')

    XLSX.writeFile(wb, this.filename)
  }
}

