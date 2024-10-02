import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  standalone: true,
})
export class TarjetaComponent {
  nombre = 'Juan Pérez';
  cargo = 'Gerente General';
  direccion = 'Calle Falsa 123';
  telefono = '555-1234';
  qrCodeUrl = 'https://via.placeholder.com/150'; // Imagen de ejemplo
}
