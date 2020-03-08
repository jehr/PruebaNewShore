import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { ComponentsModule } from '../../components/components.module';

/**
 * Importamos el ComponentsModule, para poder utilizar los componentes que hemos creados
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [StudentPage]
})
export class StudentPageModule {}
