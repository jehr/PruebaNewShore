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

  Pages: Observable<Page[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.Pages = this.dataService.getMenu();
  }

}
