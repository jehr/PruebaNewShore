import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  characters: any[];


  constructor(private dataService: DataService) { 
    this.dataService.getCharacters()
    .subscribe(item => {
      this.characters = item.filter((i) => i.role !== 'student' );
      console.log(item);
    });
  }

  ngOnInit() {}

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
