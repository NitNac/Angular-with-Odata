import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private query_end = ")?$format=json";
  private URL = "https://services.odata.org/V4/(S(lxjqxfsnc4e2zee3qunodw1r))/OData/OData.svc/";
  private URL_PrdDet = "https://services.odata.org/V4/(S(lxjqxfsnc4e2zee3qunodw1r))/OData/OData.svc/ProductDetails(";
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.URL + "Products?$format=json");
  };
  getProductDetails(filter){
    return this.http.get(this.URL_PrdDet + filter + this.query_end);
  };
  getOthers(){
    return this.http.get(this.URL + "Suppliers?$format=json")
  }
}
