import { Component, OnChanges, OnInit } from "@angular/core"
import { Slide } from "src/app/shared/models/Slide"
import { GalleryService } from "src/app/shared/services/gallery.service"

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.scss"],
})
export class SlideshowComponent implements OnInit {
  constructor(private galleryService: GalleryService) {}

  galleryObject?: Array<Slide>
  imgCollection: Array<object> = []

  ngOnInit(): void {
    this.galleryService.loadImageMeta().subscribe((data: Array<Slide>) => {
      this.galleryObject = data
      this.imgCollection?.push(...data)
      console.log(this.imgCollection)
    })
  }
}

