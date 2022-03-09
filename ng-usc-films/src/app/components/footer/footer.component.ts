import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footHeight: any;

  constructor() { }

  ngOnInit(): void {
  }

  loadFooterHeight(minContent: any) {
    // this.footHeight = Math.max(window.innerHeight, min-content);
  }

}
