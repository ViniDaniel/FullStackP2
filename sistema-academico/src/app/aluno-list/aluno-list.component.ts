import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.css'
})
export class AlunoListComponent {
  private service = inject(AlunoService)
  alunos: Aluno[] = [];
  displayedColumns = ['id', 'nome', 'nota']

  constructor(){
    this.service.listar().subscribe(alunos => this.alunos = alunos)
  }
}
