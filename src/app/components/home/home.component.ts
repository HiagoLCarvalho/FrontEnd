import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nomeProduto: string = "Curso de Angular"


   anuncio: string = `O ${this.nomeProduto} está em promoção!`;
   idProduto: number = 1;
   precoProduto: number = 49.99;
   promocao: boolean = true;
   foto: string = 'assets/img/programming.jpg';
   dataValidade = '2023-01-01'

   listaStrings: string [] = ['Primeiro', 'Segundo', 'Terceiro'];
   listaNumeros: number [] = [15, 29, 30, 50];

   listaProdutos: any [] = [
   {
      nome: 'Curso de HTML5',
      precoProduto: 6.99,
      validade: '2022-06-10',
      id:1
   },

   {
    nome: 'Curso de CSS3',
    precoProduto: 6.99,
    validade: '2022-07-08',
    id:2
 },

  {
    nome: 'Curso de CSS3 : Intermediário e Avançado',
    precoProduto: 9.99,
    validade: '2023-03-09',
    id:3
  },

  {
    nome: 'Curso de JavaScript',
    precoProduto: 15,
    validade: '2023-03-27',
    id:4
  },

  {
    nome: 'Curso de JQuerry',
    precoProduto: 10,
    validade: '2023-05-18',
    id:5
  },

  {
    nome: 'Curso de MySql',
    precoProduto: 19.99,
    validade: '2022-09-05',
    id:6
  },

  {
    nome: 'Curso de PHP',
    precoProduto: 10,
    validade: '2023-06-07',
    id:7
  },
  ];


  constructor() {
    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);

    for(let item of this.listaStrings)
    {
      console.log(item);
    }

    for(const item of this.listaNumeros)
    {
      console.log(item);
    }

  }

  ngOnInit(): void {
  }
  salvar(): void {
    alert('Salvo com sucesso!');


  }

}
