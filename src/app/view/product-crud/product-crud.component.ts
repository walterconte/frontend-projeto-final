import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit{

//construtor para configurar o botao para tela de produto
constructor(private router: Router){}

ngOnInit(): void { 
}

//criando interação com botoes
navigateToProductCreate():void{
  this.router.navigate(['/products/create'])
}
}
