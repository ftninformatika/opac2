import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as Mirador from "../../../../assets/mirador/mirador.min.js";

@Component({
  selector: "app-mirador-viewer",
  templateUrl: "./mirador-viewer.component.html",
  styleUrls: ["./mirador-viewer.component.scss"],
})
export class MiradorViewerComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    Mirador.viewer({
      id: "mirador",
      windows: [
        {
          manifestId:
            "https://digitalna.bgb.rs/iiif/api/presentation/2/438772b3-8d42-4597-8fa5-a3a6fa9e7cd6%252Fbgb00001%252F00000002%252F00000012/manifest",
          provider: "Библиотека 'Милутин Бојић'",
        },
      ],
    });
  }

  ngOnInit() {}
}
