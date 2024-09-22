import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  
  public usuario: Usuario | undefined;
  public respuesta: string = '';

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  )   

  {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuario = this.router.getCurrentNavigation()!.extras.state!.usuario;
      } else {
        alert("culiao")
      }
    })
  }

  public validarRespuesta(): void {
    if (this.usuario?.respuestaSecreta == this.respuesta) {
      console.log("BIEN CTM");
      this.router.navigate(['/correcto'], {state : {
        contra: this.usuario.password
      }})
    } else {
      console.log("COMISTE")
      this.router.navigate(['/incorrecto'])
    }
  }

  ngOnInit() {
  }

}
