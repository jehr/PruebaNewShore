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
    this.dataService.getCharacters()
    .subscribe(item => {
      this.characters = item.filter((i) => i.role == 'student' );
      console.log(item);
    });
  }

  ngOnInit() {
    // document.getElementsByClassName('form-control')[0].style.width="60%";
  }

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
