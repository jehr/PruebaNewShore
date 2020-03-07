import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../Services/data.services';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {

  spells: Observable<any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.spells = this.dataService.getSpellsServis();
  }

}
