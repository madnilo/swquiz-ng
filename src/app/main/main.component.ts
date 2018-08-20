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
  }

}
