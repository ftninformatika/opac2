import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LibraryService} from "../../../../core/services/library.service";
import {
  ILibraryPageOptions,
  ILibraryPageOptionsInitial,
  Library,
  LibraryResultPage
} from "../../../../../models/admin/library.model";
import {ArrayUtils} from "../../../../../utils/array.utils";
import {UserState} from "../../../../core/states/user/user.state";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;
  lib: string;
  libraries: Library[];
  libraryForm: FormGroup;
  library: Library;
  editing: boolean;
  pageOptions: ILibraryPageOptions;
  resultPage: LibraryResultPage;

  constructor(private libraryService: LibraryService, private toastService: ToastService, private _store: Store) {
    this.lib = this._store.selectSnapshot(UserState.library);
  }

  ngOnInit(): void {
    this.library = {};
    this.createForm();
    this.editing = false;

    this.pageOptions = {...ILibraryPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.getAll(pageNum);
  }

  getAll(pageNum: number) {
    this.libraryService.getAll(pageNum, this.pageOptions.pageSize).subscribe(data => {
      this.resultPage = data;
      this.libraries = this.resultPage.content;
      this.pageOptions.currentPage = this.resultPage.number + 1;
    });
  }

  createForm() {
    // return this.fb.group({
    //   name: ['', [Validators.required]],
    //   address: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['', [Validators.required]],
    //   longitude: ['', [Validators.required]],
    //   latitude: ['', [Validators.required]],
    //   workingHours: ['', [Validators.required]],
    // })

    this.libraryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      longitude: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      webSite: new FormControl('', Validators.required),
      workingHours: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.libraryForm.get('name');
  }

  get address() {
    return this.libraryForm.get('address');
  }

  get longitude() {
    return this.libraryForm.get('longitude');
  }

  get latitude() {
    return this.libraryForm.get('latitude');
  }

  get phone() {
    return this.libraryForm.get('phone');
  }

  get email() {
    return this.libraryForm.get('email');
  }

  get webSite() {
    return this.libraryForm.get('webSite');
  }

  get workingHours() {
    return this.libraryForm.get('workingHours');
  }

  onBtnCreteNewLocation() {
    this.libraryForm.reset();
    this.library = {};
    this.createModal.show();
  }

  onBtnSaveLocation() {
    if (this.libraryForm.invalid) {
      this.toastService.warning("Попуните сва обавезна поља");
      return;
    }
    const latitudeCheck = isFinite(Number(this.library.latitude)) && Math.abs(Number(this.library.latitude)) <= 90;
    const longitudeCheck = isFinite(Number(this.library.longitude)) && Math.abs(Number(this.library.longitude)) <= 180;
    if (!latitudeCheck || !longitudeCheck) {
      this.toastService.warning("Лонгитуда или латитуда нису унете у исправном формату");
      return;
    }
    if (this.editing) {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    this.library.prefix = this.lib;
    this.libraryService.create(this.library).subscribe(savedLibrary => {
      if (savedLibrary) {
        this.libraries = [savedLibrary, ...this.libraries];
        this.createModal.hide();
        this.toastService.success("Успешно сте додали нову библиотеку")
      } else {
        this.toastService.error("Дошло је до грешке приликом додавања нове библиотеке. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом додавања нове библиотеке. Покушајте поново")
    })
  }

  setEditLibrary(library: Library) {
    this.library = {...library};
    this.editing = true;
    this.createModal.show();
  }

  edit() {
    this.libraryService.edit(this.library).subscribe(editedLibrary => {
      if (editedLibrary) {
        this.libraries = ArrayUtils.updateArray(editedLibrary, this.libraries);
        this.toastService.success("Успешно сте изменили библиотеку")
        this.closeDialog();
      } else {
        this.toastService.error("Дошло је до грешке приликом измене библиотеке. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом измене библиотеке. Покушајте поново")
    })
  }

  closeDialog() {
    this.libraryForm.reset();
    this.library = {};
    this.createModal.hide();
    this.editing = false;
  }

  delete() {
    console.log("ee")
  }


  onPageChange($event) {
    if ($event < 1) {
      return;
    }
    this.getAll($event - 1);
  }
}
