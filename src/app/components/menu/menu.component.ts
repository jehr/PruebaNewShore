import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { Observable } from 'rxjs';
import { Page } from '../../interface/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  /*Inicializamos la variable de páginas,
   el cual diremos que sera un  colección de eventos o valores de un futuro gracias al Observable,
   y este sera un arreglo de páginas */
  Pages: Observable<Page[]>;

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    /**
     * Hacemos llamado al servicio de listar el menu, en donde debemos de utilizar el DataServices que nos posee angular
     */
    this.Pages = this.dataService.getMenu();
  }

}
