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
  private items: Array<any> = []

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.type) {
        this.firestoreService.getCollection(params.type).subscribe((items: Array<any>) => {
          this.items = [];
          items.forEach((item: any) => {
            this.items.push(item.payload.doc.data())
          })
        })
      }
    })
  }

}
