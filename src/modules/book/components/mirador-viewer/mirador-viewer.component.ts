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
            "https://zavicajna.digitalna.rs/iiif/iiif/api/presentation/2/8df690d5-042d-45b9-b63d-1a1410ff4049%252F00000001%252Fprosveta%252F00000039/manifest",
          provider: "Библиотека 'Милутин Бојић'",
        },
      ],
    });
  }

  ngOnInit() {}
}
