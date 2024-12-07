import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onSubmit(form: any){

    if (form.valid) {
      console.log('Formulario aceito', form.value);
    }
  }
}
