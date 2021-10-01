import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import * as Mirador from "../../../../assets/mirador/mirador.min.js";

@Component({
  selector: "app-mirador-viewer",
  templateUrl: "./mirador-viewer.component.html",
  styleUrls: ["./mirador-viewer.component.scss"],
})
export class MiradorViewerComponent implements OnInit, OnDestroy {
  @Input() public manifest: string;
  @Output() public miradorViewer = new EventEmitter();
  public viewer: any;

  constructor() {}

  ngOnInit(): void {
    this.viewer = this.getViewer();
    this.miradorViewer.emit(this.viewer);
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.unmount();
    }
  }

  getViewer() {
    return Mirador.viewer({
      id: "mirador",
      windows: [
        {
          views: [{ key: "single" }, { key: "book" }, { key: "gallery" }],
          manifestId: this.manifest,
          provider: "Библиотека 'Милутин Бојић'",
        },
      ],
    });
  }
}
