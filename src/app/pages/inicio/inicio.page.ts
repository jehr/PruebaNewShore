import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Page } from '../../interface/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }

}


