import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: string = '';

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController) {
  }

  redirigir() 
  {
    var list = Usuario.getListaUsuarios()
    const usuarioEncontrado = list.find(usu => usu.cuenta == this.correo)
    if (usuarioEncontrado != undefined) {
      console.log(usuarioEncontrado)
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuarioEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras)
    } else {
      this.router.navigate(['/incorrecto'])
    }
  }

  ngOnInit() {
  }

}
