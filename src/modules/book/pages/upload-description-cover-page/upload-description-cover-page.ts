import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Book, BookCommon } from '../../../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store } from '@ngxs/store';
import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';

@Component({
  selector: 'upload-description-cover-page',
  templateUrl: 'upload-description-cover-page.html',
  styleUrls: ['upload-description-cover-page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadDescriptionCoverPage implements OnInit {
  private readonly _store: Store;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _bookService: BooksService;
  private readonly _toastService: ToastService;
  private readonly _router: Router;

  private formDataCover: FormData;
  private coverFile: File;
  private previousFile: File;
  private recordId: string;
  private RecordFormatType = ERecordFormatType;

  public book: Book;
  public bookDescription;
  public message: string;
  public lib: string;
  public imagePath;
  public imgURL: any;
  public useBookCommonUid = false;

  public constructor(store: Store, activatedRoute: ActivatedRoute, bookService: BooksService, toastService: ToastService, router: Router) {
    this._store = store;
    this._activatedRoute = activatedRoute;
    this._bookService = bookService;
    this._toastService = toastService;
    this._router = router;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      paramMap => {
        this.recordId = paramMap.get('id');
        this.lib = paramMap.get('lib');
        this.initBook();
      }
    );
  }

  public onDrop(ev) {
    ev.preventDefault();
    this.previewImage(ev.dataTransfer.files);
  }

  public onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  public previewImage(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = $localize`:@@podrzaneSamoSlike:Подржане су само слике.`;
      return;
    }
    if (files.item(0).size > 6000000) {
      this.message = $localize`:@@fajlNeSmeBitiVeci:Фајл не сме бити већи од 6MB.`;
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    this.coverFile = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
      this.formDataCover = new FormData();
      this.formDataCover.append('file', this.imgURL);
    };
  }

  public saveChanges() {
    if (!this.imgURL && this.bookDescription === this.book.description && this.useBookCommonUid === this.book.useBookCommonUid) {
      this._toastService.info($localize`:@@nisteIzvrsiliNikakvePromene:Нисте извршили никакве промене!`);
      return;
    }
    const bookCommon: BookCommon = {
      title: this.book.title,
      isbn: this.book.isbn,
      issn: this.book.issn,
      description: this.bookDescription,
      record_id: this.book.record._id,
      useBookCommonUid: this.useBookCommonUid
    };
    // Update
    if (this.book.commonBookUID) {
      bookCommon.uid = this.book.commonBookUID;
    }
    this._bookService.createModifyBookCommon(bookCommon).subscribe(res => {
        if (this.coverFile && (this.coverFile !== this.previousFile)) {
          this.uplaodImage(res.uid, this.coverFile);
        } else {
          this._toastService.success($localize`:@@uspesnoAzuriraniPodaciOKnjizi:Успешно сте ажурирали податке о књизи!`);
          // this.routeToRecord();
        }
      },
      () => {
        this._toastService.warning($localize`:@@cuvanjeNijeUspelo:Чување није успело!`);
      }
    );
  }

  private uplaodImage(bookCommonUid, file) {
    this._bookService.uploadBookCover(bookCommonUid, file).subscribe(
      resp => {
        this._toastService.success($localize`:@@uspesnoAzuriraniPodaciOKnjizi:Успешно сте ажурирали податке о књизи!`);
        this.previousFile = this.coverFile;
      },
      () => {
        this._toastService.warning($localize`:@@cuvanjeNijeUspelo:Чување није успело!`);
      }
    );
  }

  private routeToRecord() {
    this._router.navigate(['/book', this.lib, this.recordId]);
  }

  private initBook(): void {
    this._bookService.getBook(this.recordId).subscribe(
      resp => {
        // if (!resp.isbn || resp.isbn.trim() === '') {
        //   this._toastService.error($localize`:@@nijeMoguceMenjatiOpis:Није могуће мењати опис и слику корица овог записа!`);
        //   this._router.navigate(['/book', this.lib, this.recordId]);
        // }
        this.book = resp;
        this.bookDescription = this.book.description;
        this.useBookCommonUid = this.book.useBookCommonUid;
      }
    );
  }
}
