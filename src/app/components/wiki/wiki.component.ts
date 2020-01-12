import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  // globals
  private cards: Array<any> = []

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    /*
    this.route.params.subscribe(params => {
      if (params.type) {
        this.firestoreService.getCollection(params.type).subscribe((cards: Array<any>) => {
          this.cards = [];
          cards.forEach((card: any) => {
            this.cards.push(card.payload.doc.data())
          })
        })
      }
    })
    */
   this.cards = [
      {
        name: 'Luz',
        type: 'faction',
        color: 'white',
        image: 'factions/white.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Caos',
        type: 'faction',
        color: 'red',
        image: 'factions/red.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Naturaleza',
        type: 'faction',
        color: 'green',
        image: 'factions/green.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Mente',
        type: 'faction',
        color: 'blue',
        image: 'factions/blue.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Oscuridad',
        type: 'faction',
        color: 'black',
        image: 'factions/black.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Golem de Hielo',
        type: 'troop',
        color: 'blue',
        image: 'troops/blue/golem.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Bola de Fuego',
        type: 'spell',
        color: 'red',
        image: 'spells/red/fireball.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Curación',
        type: 'spell',
        color: 'white',
        image: 'spells/white/heal.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Poción de Agilidad',
        type: 'item',
        color: 'green',
        image: 'items/green/agility_potion.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Esqueletos',
        type: 'troop',
        color: 'black',
        image: 'troops/black/skeleton.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      }
    ]
  }
}
