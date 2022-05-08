import { Component, OnInit } from "@angular/core"
import { DataService } from "src/app/shared/services/data.service"
import { DateFormatPipe } from "src/app/shared/pipes/date-format.pipe"

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private ds: DataService) {}

  date?: Array<number>

  ngOnInit(): void {
    this.ds.getAll().subscribe((data: Array<number>) => {
      this.date?.push(...data)
      console.log(this.date)
    })
  }
}

