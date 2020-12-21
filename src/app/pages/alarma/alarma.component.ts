import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AlarmaService } from '../../services/alarma.service';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styles: [
  ]
})
export class AlarmaComponent implements OnInit {

  public estadoAlarma = 'Desactivada';

  constructor(private alarmaService: AlarmaService) { }
  ngOnInit(): void {
    this.alarmaService.getAlarma().subscribe( ({alarma}) => {
      this.estadoAlarma = alarma.estado;
    });
  }

  cambiarEstado(): void{

    let texto: string;
    let textoBoton: string;
    let nuevoEstado: string;

    if (this.estadoAlarma === 'Desactivada'){
      textoBoton = 'Activar';
      texto = '¿Activar alarma?';
      nuevoEstado = 'Activada';
    }else if (this.estadoAlarma === 'Activada'){
      texto = '¿Desactivar alarma?';
      textoBoton = 'Desactivar';
      nuevoEstado = 'Desactivada';
    }else{
      texto = '¿Desactivar alarma?';
      textoBoton = 'Desactivars';
      nuevoEstado = 'Desactivada';
    }

    Swal.fire({
      title: '¡Atención!',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: textoBoton,
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.isConfirmed) {
        this.estadoAlarma = nuevoEstado;
        this.alarmaService.actualizarAlarma(nuevoEstado).subscribe( resp => {
          Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            title: 'Correcto',
            text: `Alarma ${nuevoEstado}`,
            timer: 1000
          });
        });
      }
    });
  }

}
