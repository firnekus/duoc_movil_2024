import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.page.html',
  styleUrls: ['./misdatos.page.scss'],
})
export class MisdatosPage implements OnInit {

  public usuario: Usuario | undefined;
  public nivel: NivelEducacional | undefined;

  constructor(    
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private animationController: AnimationController) 
  {
    this.usuario = new Usuario();
    this.usuario.recibirUsuario(this.activatedRoute, this.router);
  }

  getNivel(): string | undefined {
    if (this.usuario != undefined) {
      return " "+this.usuario.nivelEducacional.nombre
    }
    return
  }

  navegar(pagina: string) {
    this.usuario!.navegarEnviandousuario(this.router, pagina);
  }

  ngOnInit() {
  }

}
