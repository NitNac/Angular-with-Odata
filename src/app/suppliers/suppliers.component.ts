import { ServiceService } from './../providing/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public supplier_data: any;
  constructor(private suppliers: ServiceService) { }

  ngOnInit(): void {
    this.getAllSuppliers();
  }
  getAllSuppliers(){
    this.suppliers.getOthers().subscribe(
      data => {
        this.supplier_data = data['value'];
        document.getElementById('LandingImage').style.display="none";
        document.getElementById('LandingText').style.display="none";
      }
    )
  }
}
