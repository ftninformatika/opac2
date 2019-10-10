import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Book, BookCommon } from '../../../../models/book.model';
import { BooksService } from '../../../core/services/books.service';
import { ToastService } from 'ng-uikit-pro-standard';

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
  public book: Book;
  public bookDescription;
  public lib: string;

  public imagePath;
  imgURL: any;
  public message: string;
  private formDataCover: FormData;
  private coverFile: File;
  private recordId: string;

  public constructor(store: Store, activatedRoute: ActivatedRoute, bookService: BooksService, toastService: ToastService) {
    this._store = store;
    this._activatedRoute = activatedRoute;
    this._bookService = bookService;
    this._toastService = toastService;
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

  private initBook(): void {
    this._bookService.getBook(this.recordId).subscribe(
      resp => {
        this.book = resp;
        this.bookDescription = this.book.description;
      }
    );
  }

  public previewImage(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Подржане су само слике.';
      return;
    }
    if (files.item(0).size > 6000000) {
      this.message = 'Фајл не сме бити већи од 6MB.';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    this.coverFile = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.formDataCover = new FormData();
      this.formDataCover.append('file', this.imgURL);
    };
  }

  public saveChanges() {
    if (!this.imgURL && this.bookDescription === this.book.description) {
      this._toastService.info('Нисте извршили никакве промене!');
      return;
    }
    const bookCommon: BookCommon = {
      title: this.book.title,
      isbn: this.book.isbn,
      issn: this.book.issn,
      description: this.bookDescription
    };
    // Update
    if (this.book.commonBookUID) {
      bookCommon.uid = this.book.commonBookUID;
      if (this.formDataCover) {
        this._bookService.uploadBookCover(bookCommon.uid, this.coverFile).subscribe(
          resp => {
            if (!resp) {
              this._toastService.warning('Није успело отпремање слике!');
              return;
            }
            this._toastService.success('Успешно је отпремљена слика корица!');
          },
          () => this._toastService.warning('Није успело отпремање слике!')
        );
      }
      if (this.book.description !== this.bookDescription && this.bookDescription && this.bookDescription.trim() !== '') {
        this._bookService.createModifyBookCommon(bookCommon).subscribe(
          resp => {
            if (!resp) {
              this._toastService.warning('Није успела промена описа!');
              return;
            }
            this._toastService.success('Успешно је промењен опис!');
          },
          () => this._toastService.warning('Није успела промена описа!')
        );
      }
      // Create
    } else {
      this._bookService.createModifyBookCommon(bookCommon)
        .subscribe(
          resp => {
            if (!resp) {
              this._toastService.warning('Чување није успело!');
              return;
            }
            if (this.formDataCover) {
              this._bookService.uploadBookCover(resp.uid, this.coverFile)
                .subscribe(
                  resp1 => {
                    if (!resp1) {
                      this._toastService.warning('Отпремање слике није успело!');
                      return;
                    }
                  }
                );
            }
            this._toastService.success('Успешно сте ажурирали податке о књизи!');
          },
          () => this._toastService.warning('Чување није успело!')
        );
      }
    this.initBook();
    }
}
