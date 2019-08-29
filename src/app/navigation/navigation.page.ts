import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/interval';
import 'rxjs/add/operator/Map';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  colorTheme:Observable<Array<any>>;
  colorThemeName:string;

  dataItems:Array<any> = [
    {primary:"rgb(48, 63, 159)",accent:"rgb(255, 64, 129)"},
    {primary:"rgb(25, 118, 210)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(56, 142, 60)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(175, 180, 43)",accent:"rgb(124, 77, 255)"},
    {primary:"rgb(245, 124, 0)",accent:"rgb(68, 138, 255)"},
    {primary:"rgb(0, 121, 107)",accent:"rgb(255, 171, 64)"},
  ];

  reverseDataItems:Array<any> = [
    {accent:"rgb(48, 63, 159)",primary:"rgb(255, 64, 129)"},
    {accent:"rgb(25, 118, 210)",primary:"rgb(255, 82, 82)"},
    {accent:"rgb(56, 142, 60)",primary:"rgb(255, 82, 82)"},
    {accent:"rgb(175, 180, 43)",primary:"rgb(124, 77, 255)"},
    {accent:"rgb(245, 124, 0)",primary:"rgb(68, 138, 255)"},
    {accent:"rgb(0, 121, 107)",primary:"rgb(255, 171, 64)"},
  ];


  constructor() {}

  ngOnInit() {
    this.setupTheme();
    this.colorThemeName = 'this.dataItems';
    this.setColorThemeOrder();
  }


  setupTheme()
  {
    localStorage.getItem('primaryBg')?$("body").css("--primary", localStorage.getItem('primaryBg')):$("body").css("--primary", "rgb(48, 63, 159)");
    localStorage.getItem('accentBg')?$("body").css("--accent",localStorage.getItem('accentBg')): $("body").css("--accent","rgb(255, 64, 129)");
  }

  setThemeOrder(themeset)
  {
    // return Observable.interval(2200).map(i=> eval(themeset))
    return eval(themeset);
  }

  setColorThemeOrder()
  {
      if(this.colorThemeName != 'this.reverseDataItems')
      {
        this.colorThemeName = 'this.reverseDataItems';
        this.colorTheme = this.setThemeOrder(this.colorThemeName);
      }
      else
      {
        this.colorThemeName = 'this.dataItems';
        this.colorTheme = this.setThemeOrder('this.dataItems');
      }
  }

  SelectedItem(details)
  {
    details.primary?localStorage.setItem('primaryBg', details.primary):'';
    details.accent?localStorage.setItem('accentBg', details.accent):'';
    this.setupTheme();
  }
}
