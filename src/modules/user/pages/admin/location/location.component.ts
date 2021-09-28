import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocationService} from "../../../../core/services/location.service";
import {
  ILibraryPageOptions,
  ILibraryPageOptionsInitial,
  Library,
  LibraryResultPage
} from "../../../../../models/admin/library.model";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;

  libraries: Library[];
  locationForm: FormGroup;
  library: Library;

  pageOptions: ILibraryPageOptions;
  resultPage: LibraryResultPage;

  constructor(private locationService: LocationService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.pageOptions = {...ILibraryPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.getAll(pageNum);
    this.createForm();
    this.library = {};
    // this.libraries = [{name: 'Библиотека града Београда'}, {name: 'Библиотека Милутин Бојић'}]
  }

  getAll(pageNum: number) {
    this.locationService.getAll(pageNum, this.pageOptions.pageSize).subscribe(data => {
      this.resultPage = data;
      this.libraries = this.resultPage.content;
      this.pageOptions.currentPage = this.resultPage.number + 1;
    });
  }

  createForm() {
    this.locationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      workingHours: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.locationForm.get('name');
  }

  get address() {
    return this.locationForm.get('address');
  }

  get city() {
    return this.locationForm.get('city');
  }

  get email() {
    return this.locationForm.get('email');
  }

  get phone() {
    return this.locationForm.get('phone');
  }

  get workingHours() {
    return this.locationForm.get('workingHours');
  }

  onBtnCreteNewLocation() {
    this.locationForm.reset();
    this.library = {};
    this.createModal.show();
  }

  onBtnSaveLocation() {
    if (this.locationForm.invalid) {
      this.toastService.warning(".. су обавезна поља");
      return;
    }
    this.add();
  }

  add() {
    this.locationService.create(this.library).subscribe(savedLibrary => {
      if (savedLibrary) {
        this.libraries = [savedLibrary, ...this.libraries];
        this.createModal.hide();
        this.toastService.success("Успешно сте додали нову локацију")
      } else {
        this.toastService.error("Дошло је до грешке приликом додавања нове локације. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом додавања нове локације. Покушајте поново")
    })
  }

  onPageChange($event) {
    if ($event < 1) {
      return;
    }
    this.getAll($event - 1);
  }
}
