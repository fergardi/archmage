import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // global
  public factions = []

  constructor() { }

  ngOnInit() {
    this.factions = [
      {
        name: 'Sacro',
        color: 'yellow',
        description: 'descripcion',
        image: 'holy.png'
      },
      {
        name: 'Muerto',
        color: 'purple',
        description: 'descripcion',
        image: 'undead.png'
      },
      {
        name: 'Caos',
        color: 'red',
        description: 'descripcion',
        image: 'chaos.png'
      },
      {
        name: 'Natural',
        color: 'green',
        description: 'descripcion',
        image: 'nature.png'
      },
      {
        name: 'Mental',
        color: 'blue',
        description: 'descripcion',
        image: 'mental.png'
      }
    ]
  }

}
