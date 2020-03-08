import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousePageRoutingModule } from './house-routing.module';

import { HousePage } from './house.page';
import { ComponentsModule } from '../../components/components.module';

/**
 * Importamos el ComponentsModule, para poder utilizar los componentes que hemos creados
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HousePage]
})
export class HousePageModule {}
