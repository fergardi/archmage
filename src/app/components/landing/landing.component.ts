import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // global
  public factions: Array<any> = []

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getCollection('factions').subscribe((factions: any) => {
      this.factions = [];
      factions.forEach((faction: any) => {
        this.factions.push(faction.payload.doc.data())
      })
    })
    /*
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
    */
  }

}
