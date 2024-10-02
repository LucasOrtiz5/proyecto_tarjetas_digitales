import { Component } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Aquí indicamos que es un componente standalone
  imports: [TarjetaComponent] // Importa el componente Tarjeta aquí
})
export class AppComponent {
  title = 'tarjetas-digitales';
}
