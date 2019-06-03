import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  shelf: Book[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getShelf('').subscribe(data => { this.shelf = data});
  }

}
