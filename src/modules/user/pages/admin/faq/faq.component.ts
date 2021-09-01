import {Component, OnInit, ViewChild} from '@angular/core';
import {FaqService} from "../../../../core/services/faq.service";
import {Faq} from "../../../../../models/admin/faq.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;

  faqs: Faq[];
  faqForm: FormGroup;
  faq: Faq;

  editing: boolean;

  constructor(private faqService: FaqService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.faqService.getAll().subscribe(data => {
      this.faqs = data;
    });

    this.createForm();
    this.faq = {};
  }


  createForm() {
    this.faqForm = new FormGroup({
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
    });
  }

  get question() {
    return this.faqForm.get('question');
  }

  get answer() {
    return this.faqForm.get('answer');
  }

  onBtnCreateFaq() {
    if (this.faqForm.invalid) {
      this.toastService.warning("Питање и одговор су обавезна поља");
      return;
    }
    if (!this.editing) {
      this.add();
    } else {
      this.edit();
    }
  }

  add() {
    this.faqService.create(this.faq).subscribe(createdFaq => {
      if (createdFaq) {
        this.faqs = [...this.faqs, createdFaq];
        this.closeDialog();
        this.toastService.success("Успешно сте додали ново питање и одговор")
      } else {
        this.toastService.error("Дошло је до грешке приликом додавања новог питања. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом додавања новог питања. Покушајте поново")
    })
  }

  edit() {
  }

  closeDialog() {
    this.createModal.hide();
    this.faqForm.reset();
  }

}
