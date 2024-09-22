import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {

  public passw: string | undefined;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  )    
  
  { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.passw = this.router.getCurrentNavigation()!.extras.state!.contra;
      } else {
        alert("culiao")
      }
    })
  }

  public redirigir() {
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
