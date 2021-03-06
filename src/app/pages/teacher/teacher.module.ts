import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPageRoutingModule } from './teacher-routing.module';

import { TeacherPage } from './teacher.page';
import { ComponentsModule } from '../../components/components.module';


/**
 * Importamos el ComponentsModule, para poder utilizar los componentes que hemos creados
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeacherPage]
})
export class TeacherPageModule {}
