import { Component } from '@angular/core';
import { Artikel } from './artikel'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  sortiment: Artikel[]=[
    {id: 1, name: 'Stock'},
    {id: 2, name: 'Hut'},
    {id: 3, name: 'Schuh'}
  ];

  einkaufswagen: Artikel[]=[];

  toCart(artikel: Artikel) {
    this.einkaufswagen.push(artikel);
  }
 
}
