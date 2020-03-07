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

  constructor(private dataService: DataService, private modalCtrl: ModalController) { 
    this.houses = this.dataService.getHouseServis();
  }

  ngOnInit() {


    
  }

  async closeModal(data?) {
    await this.modalCtrl.dismiss(data);
  }

  async openModal(_id) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();

  }


}
