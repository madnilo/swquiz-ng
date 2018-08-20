import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { People } from '../people';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( 
    private pplService: PeopleService) { }

  people: People[];

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void{
    this.pplService.getPeople()
      .subscribe(res => {
        this.people = res.body.results;
        this.people.forEach(person => person.avatar = `assets/img/characters/${person.url.slice(0,-1).split('/').pop()}.jpg`);
      });
  }

}
