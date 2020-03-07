import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.services';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  characters: Observable<any>;
  

  constructor(private dataService: DataService) { }

  

  ngOnInit() {
    this.characters = this.dataService.getCharacters();
  }

}
