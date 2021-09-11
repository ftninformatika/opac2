import {Component, OnInit, ViewChild} from '@angular/core';
import {FaqService} from "../../../../core/services/faq.service";
import {Faq, FAQResultPage, IFAQPageOptions, IFAQPageOptionsInitial} from "../../../../../models/admin/faq.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;
  @ViewChild('deleteModal', {static: true}) deleteModal: ModalDirective;

  faqs: Faq[];
  faqForm: FormGroup;
  faq: Faq;
  editing: boolean;

  pageOptions: IFAQPageOptions;
  resultPage: FAQResultPage;

  constructor(private faqService: FaqService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.pageOptions = {...IFAQPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.loadFAQs(pageNum);

    this.createForm();
    this.faq = {};
  }

  loadFAQs(pageNum: number) {
    this.faqService.getAll(pageNum, this.pageOptions.pageSize).subscribe(data => {
      this.resultPage = data;
      this.faqs = this.resultPage.content;
      this.pageOptions.currentPage = this.resultPage.number + 1;
    });
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

  onBtnCreteNewFaq() {
    this.editing = false;
    this.faqForm.reset();
    this.faq = {};
    this.createModal.show();
  }

  onBtnSaveFaq() {
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
        this.createModal.hide();
        this.toastService.success("Успешно сте додали ново питање и одговор")
      } else {
        this.toastService.error("Дошло је до грешке приликом додавања новог питања. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом додавања новог питања. Покушајте поново")
    })
  }

  onBtnEditFaq(faq: Faq) {
    this.editing = true;
    this.faq = {...faq};
    this.createModal.show();
  }

  edit() {
    this.faqService.edit(this.faq).subscribe(response => {
      if (response) {
        this.updateArray(this.faq);
        this.toastService.success("Успешно сте изменили питање")
        this.editing = false;
        this.createModal.hide();
      } else {
        this.toastService.error("Дошло је до грешке приликом измене питања. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом измене питања. Покушајте поново")
    })
  }

  updateArray(faq: Faq) {
    const idx: number = this.faqs.findIndex(item => item._id === this.faq._id);
    let newArray = [...this.faqs];
    newArray[idx] = faq;
    this.faqs = newArray;
  }

  onBtnDeleteFaq(faq: Faq) {
    this.faq = faq;
    this.deleteModal.show();
  }

  delete() {
    this.faqService.delete(this.faq._id).subscribe(response => {
      if (response) {
        this.deleteFromArray(this.faq);
        this.toastService.success("Успешно сте обрисали питање")
      } else {
        this.toastService.error("Дошло је до грешке приликом брисања питања. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом брисања питања. Покушајте поново")
    });
  }

  deleteFromArray(faq: Faq) {
    const idx: number = this.faqs.findIndex(item => item._id === faq._id);
    if (idx !== -1) {
      this.faqs.splice(idx, 1);
      this.faqs = [...this.faqs]
    }
  }

  onPageChange($event) {
    if ($event < 1) {
      return;
    }
    this.loadFAQs($event - 1);
  }
}
