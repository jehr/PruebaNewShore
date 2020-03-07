import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  members: any[];
  @Input() _idHouse;

  constructor(private dataService: DataService) { 
    this.dataService.getMembersHouse(this._idHouse).subscribe(res => {
       this.members = res[0].members;
       console.log('res :', res);
    });
    console.log('this.members :', this.members);
  }

  ngOnInit() {
    
  }


  
}
