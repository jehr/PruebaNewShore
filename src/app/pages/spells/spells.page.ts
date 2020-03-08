import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../Services/data.services';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {

  
  /*Inicializamos la variable de páginas,
   el cual diremos que sera un  colección de eventos o valores de un futuro gracias al Observable,
   */
  spells: Observable<any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    /**
     * Hacemos el llamado al servicio creado
     */
    this.spells = this.dataService.getSpellsServis();
  }

}
