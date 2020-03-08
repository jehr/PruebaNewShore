import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentComponent } from './student/student.component';
import { CompleterService } from 'ng2-completer';
import { ModalComponent } from './modal/modal.component';
import { TeacherComponent } from './teacher/teacher.component';

/**
 * Declaramos y exportamos los componentes que fueron creados, para ser utilizados en el proyecto
 */

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    StudentComponent,
    TeacherComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    StudentComponent,
    TeacherComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    Ng2SmartTableModule
  ],
  providers:[
    CompleterService
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ComponentsModule {}
