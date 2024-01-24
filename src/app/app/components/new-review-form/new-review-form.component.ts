import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-review-form',
  templateUrl: './new-review-form.component.html',
  styleUrls: ['./new-review-form.component.css']
})
export class NewReviewFormComponent implements OnInit{

  formulario: FormGroup = new FormGroup({});

  reviews: { chave: string; valor: any }[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  // Função para submeter o formulário
  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário válido:', this.formulario.value);
      this.reviews[this.formulario.value.titulo]=this.formulario.value.descricao;
      console.log(this.reviews);
      // lógica para enviar dados para o servidor vai aqui
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

}
