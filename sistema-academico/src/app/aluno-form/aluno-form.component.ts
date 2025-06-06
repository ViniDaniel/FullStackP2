import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms"
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent {
  fb = inject(FormBuilder)
  service = inject(AlunoService)
  router = inject(Router)

  form = this.fb.group({
    nome:['', Validators.required],
    nota:[0,[Validators.required, Validators.min(0), Validators.max(10)]]
  })

  salvar(){
    if (this.form.valid){
      this.service.adicionar(this.form.value as Omit<Aluno, "id">)
      alert("Aluno salvo")
      this.router.navigate(['/'])
    }
  }

}
