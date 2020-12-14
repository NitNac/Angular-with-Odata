import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../providing/service.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  private product_id: string;
  product_detail: any;
  constructor(
    private actRoute: ActivatedRoute,
    private getProdDetails: ServiceService
  ) {
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getProdDetail(this.product_id)
  }

  getProdDetail(prod_id) {
    this.getProdDetails.getProductDetails(prod_id).subscribe(
      data => {
        this.product_detail = data;
        document.getElementById('LandingImage').style.display="none";
        document.getElementById('LandingText').style.display="none";
      }
    )
  }

  /** 
   *----- CSS  ----
   
   *----- HTML ----
   <button type="button" class="collapsible" (click)="collapse()">Open Collapsible</button>
    <div class="content">
        <p>{{product_detail.ProductID}} {{product_detail.Details}}</p>
    </div>
  collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    this.getProdDetail(this.product_id);
  }
  */
}
