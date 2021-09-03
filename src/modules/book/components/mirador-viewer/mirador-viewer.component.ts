import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import * as Mirador from "../../../../assets/mirador/mirador.min.js";

@Component({
  selector: "app-mirador-viewer",
  templateUrl: "./mirador-viewer.component.html",
  styleUrls: ["./mirador-viewer.component.scss"],
})
export class MiradorViewerComponent implements OnInit {
  @Input() public manifest: string;
  @Output() public miradorViewer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    let viewer = Mirador.viewer({
      id: "mirador",
      windows: [
        {
          views: [{ key: "single" }, { key: "book" }, { key: "gallery" }],
          manifestId: this.manifest,
          provider: "Библиотека 'Милутин Бојић'",
        },
      ],
    });
    this.miradorViewer.emit(viewer);
  }
}
