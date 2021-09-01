import {Component, OnInit} from '@angular/core';
import {FaqService} from "../../../../core/services/faq.service";
import {Faq} from "../../../../../models/admin/faq.model";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: Faq[];

  constructor(private faqService: FaqService) {
  }

  ngOnInit(): void {
    this.faqService.getAll().subscribe(data => {
      this.faqs = data;
    })
  }
}
