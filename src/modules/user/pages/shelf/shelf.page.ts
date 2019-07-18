import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { Book } from '../../../../models/book.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.page.html',
  styleUrls: ['./shelf.page.scss']
})
export class ShelfPage implements OnInit {

  shelf: Book[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getShelf('').subscribe(data => {
      this.shelf = data;
    });
  }

}
