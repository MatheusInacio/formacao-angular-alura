import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  @Input() listaPensamentos = [{
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Si num tem leite então bota uma pinga aí cumpadi!',
    autoria: 'Mussum',
    modelo: 'modelo1'
  },
  {
    conteudo: 'Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.',
    autoria: 'Cumpadi Washington',
    modelo: 'modelo3'
  },
  {
    conteudo: 'I endure Angular',
    autoria: 'Ray',
    modelo: 'modelo2'
  },
  {
    conteudo: 'I hate Angular',
    autoria: 'May',
    modelo: 'modelo1'
  }]

  constructor() { }

  ngOnInit(): void {
  }
}