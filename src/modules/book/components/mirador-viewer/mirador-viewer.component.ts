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
  public static unmounted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.viewer = this.getViewer();
    MiradorViewerComponent.unmounted = false;
    this.miradorViewer.emit(this.viewer);
  }

  ngOnDestroy(): void {
    if (this.viewer && MiradorViewerComponent.unmounted === false) {
      this.viewer.unmount();
      MiradorViewerComponent.unmounted = true;
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
