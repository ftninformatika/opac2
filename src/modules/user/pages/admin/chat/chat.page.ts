import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {

  constructor() {
  }

  members;
  conversation;

  ngOnInit(): void {
    this.members = [{'name': 'Marko', 'surname': 'Markovic'},
      {'name': 'Mirko', 'surname': 'Mirkovic'},
      {'name': 'Jovan', 'surname': 'Jovanic'},
      {'name': 'Jakov', 'surname': 'Jakic'},
      {'name': 'Milica', 'surname': 'Milic'},
      {'name': 'Marica', 'surname': 'Maric'},
      {'name': 'Ana', 'surname': 'Anic'},
      {'name': 'Sanja', 'surname': 'Stanic'},
      {'name': 'Olja', 'surname': 'Olic'},
      {'name': 'Srna', 'surname': 'Srnic'},
      {'name': 'Milos', 'surname': 'Misic'}]

    this.conversation = [{"korisnik": "bibliotekar", "poruka":"Prva poruka"}, {"korisnik": "clan", "poruka":"Druga poruka"},
      {"korisnik": "bibliotekar", "poruka":"Treca poruka Treca poruka Treca poruka  Treca poruka Treca poruka Treca poruka Treca poruka"},  {"korisnik": "bibliotekar", "poruka":"Cetvrta poruka za danas"}]
  }

  sendMessage() {

  }
}
