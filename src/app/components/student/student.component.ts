import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  characters: any[];


  constructor(private dataService: DataService) {
    /**
     * Hacemos el llamado al servicio que hemos creado, desde el dataService que nos posee angular
     * aca especificamos que el lo que realmente queremos del servicio que nos estamos consumiendo
     */
    this.dataService.getCharacters()
    .subscribe(item => {
      this.characters = item.filter((i) => i.role == 'student' );
    });
  }

  ngOnInit() {
    // document.getElementsByClassName('form-control')[0].style.width="60%";
  }

  /**
   * JSON de los nombres de las columnas a mostar en la tabla, al igual se expecifican si en el campo se pueden 
   * hacer busquedas o no, al igual le podemos definir las acciones que se desean emplementar
   */
  settings = {
    columns: {
      role: {
        title: 'Role',
        filter: false
      },
      name: {
        title: 'Nombre',
      },
      house: {
        title: 'Casa',
        filter: false
      },
      school: {
        title: 'Escuela',
        filter: false,

      }
    },
    actions:
  {
    add: false,
    edit: false,
    delete: false,
  }
  };



}
