import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import * as Mirador from "../../../../assets/mirador/mirador.min.js";

@Component({
  selector: "app-mirador-viewer",
  templateUrl: "./mirador-viewer.component.html",
  styleUrls: ["./mirador-viewer.component.scss"],
})
export class MiradorViewerComponent implements OnInit, AfterViewInit {
  @Input() public manifest: string;

  constructor() {}

  ngAfterViewInit(): void {
    Mirador.viewer({
      id: "mirador",
      windows: [
        {
          manifestId: this.manifest,
          provider: "Библиотека 'Милутин Бојић'",
        },
      ],
    });
  }

  ngOnInit() {}
}
