import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['button { margin: 0.2em; }'],
})
export class AppComponent {
  title = 'primerAngular';

  numero1!: number;
  numero2!: number ;
  resultado!: number;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void {
    if (this.numero2 != 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      alert('No se puede dividir entre 0');
    }
  }
}
