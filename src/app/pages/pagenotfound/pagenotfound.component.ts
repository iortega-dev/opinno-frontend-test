import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  mouseOvered = false;

  constructor(private titleSrv: Title) {
    this.titleSrv.setTitle('¡Ups! 404');
  }

  ngOnInit() {
  }

}
