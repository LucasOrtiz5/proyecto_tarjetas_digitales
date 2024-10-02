import { Component } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true, // Aquí indicamos que es un componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TarjetaComponent] // Importa el componente Tarjeta aquí
})
export class AppComponent {
  title = 'tarjetas-digitales';
}
