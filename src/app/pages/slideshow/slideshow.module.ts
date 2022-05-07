import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SlideshowRoutingModule } from "./slideshow-routing.module"
import { SlideshowComponent } from "./slideshow.component"
import { NgImageSliderModule } from "ng-image-slider"

@NgModule({
  declarations: [SlideshowComponent],
  imports: [NgImageSliderModule, CommonModule, SlideshowRoutingModule],
  bootstrap: [SlideshowComponent],
})
export class SlideshowModule {}

