import { Injectable } from "@angular/core";
import { Aluno } from "./aluno.model";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class AlunoService{
  private alunos: Aluno[] = [
    {id: 1, nome: "Vinícius", nota: 10},
    {id: 2, nome: "Daniel", nota: 10}
  ]

  listar(): Observable<Aluno[]>{
    return of(this.alunos)
  }

  adicionar(aluno: Omit<Aluno, 'id'>): void {
    const novoAluno = {...aluno, id: this.alunos.length + 1}
    this.alunos.push(novoAluno)
  }
}
