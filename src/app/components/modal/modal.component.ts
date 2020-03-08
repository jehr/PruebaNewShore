import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  /**
   * Inicializamos la variable de miembros que sera un arreglo tipo any
   */
  members: any[];
  @Input() _idHouse;

  constructor(private dataService: DataService, private modalCtrl:ModalController) { 
    /**
     * Hacemos el llamado al servicio que hemos creado, desde el dataService que nos posee angullar
     * en donde este servicio enviará el id de la casa de la cual queremos hacer referencia para saber el listado de miembros
     */
    this.dataService.getMembersHouse('5a05e2b252f721a3cf2ea33f').subscribe(res => {
       this.members = res[0].members;
    });
  }

  ngOnInit() {
    
  }

  async closeModal(data?) {
    await this.modalCtrl.dismiss(data);
  }
  
}
