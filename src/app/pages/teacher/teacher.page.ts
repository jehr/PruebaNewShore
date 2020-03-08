import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.services';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

   /*Inicializamos la variable de páginas,
   el cual diremos que sera un  colección de eventos o valores de un futuro gracias al Observable,
   */
  characters: Observable<any>;
  

  constructor(private dataService: DataService) { }

  

  ngOnInit() {
    /**
     * Hacemos el llamado del servicio
     */
    this.characters = this.dataService.getCharacters();
  }

}
