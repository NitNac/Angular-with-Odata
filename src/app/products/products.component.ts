import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../providing/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public Products : any
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.service.getProducts().subscribe(
      getData => {
        this.Products = getData['value'];
        document.getElementById('LandingImage').style.display="none";
        document.getElementById('LandingText').style.display="none";
      }
    )
  }
}
