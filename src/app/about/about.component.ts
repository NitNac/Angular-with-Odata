import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about_data = "Developed and Maintained by NitNac.";
  
  constructor() { }

  ngOnInit(): void {
  }

}
