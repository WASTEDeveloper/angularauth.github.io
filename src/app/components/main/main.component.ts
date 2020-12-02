import { Component, Input, OnInit } from '@angular/core';
import data from '../../../assets/JSON/data.json'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataList: {title:string, desc:string, author:string}[] = data;
  
  public title!:string;
  public desc!:string;
  public author!:string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
