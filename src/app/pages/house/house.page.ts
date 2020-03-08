import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
})
export class HousePage implements OnInit {

  houses: Observable<any>;
  _id: string;

  constructor(private dataService: DataService, private modalCtrl: ModalController) { 
     /**
     * Hacemos el llamado al servicio creado
     */
    this.houses = this.dataService.getHouseServis();
  }

  ngOnInit() {


    
  }

  /**
   * 
   * @param data Función que nos permite cerrar el modal
   */
  async closeModal(data?) {
    await this.modalCtrl.dismiss(data);
  }

  /**
   * Funcion que nos permite creal el modal gracias a la inyección que hicimos de modalController, para 
   * luego hacer el llamado de la página de la cual la queremos convertir en modal
   * @param _id parametro que recibe del id de la casa
   */
  async openModal(_id) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    this._id = data;
  }


}
