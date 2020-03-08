import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { Observable } from 'rxjs';
import { Page } from '../../interface/interfaces';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  characters: Observable<any>;


  constructor(private dataService: DataService) { 
    // this.dataService.getCharacters()
    // .subscribe(item => {
    //   this.characters = item.filter((i) => i.role !== 'student' );
    //   console.log(item);
    // });
  }

  ngOnInit() {
    /**
     * Hacemos el llamado al servicio creado
     */
    this.characters = this.dataService.getData();
  }

  // settings = {
  //   columns: {
  //     role: {
  //       title: 'Role',
  //       filter: false

  //     },
  //     name: {
  //       title: 'Nombre',
  //     },
  //     house: {
  //       title: 'Casa',
  //       filter: false
  //     },
  //     school: {
  //       title: 'Escuela',
  //       filter: false,

  //     }
  //   },
  //   actions:
  // {

  //   add: false,
  //   edit: false,
  //   delete: false,
  // }
  // };

}
