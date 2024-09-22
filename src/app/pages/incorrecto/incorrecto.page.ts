import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
})
export class IncorrectoPage implements OnInit {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController) {
  }

  ngOnInit() {
  }

  public redirigir() {
    this.router.navigate(['/login'])
  }

}
