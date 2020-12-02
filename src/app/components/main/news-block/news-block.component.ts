import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  @Input() title!:string;
  @Input() desc!:string;
  @Input() author!:string;

  constructor() { }

  ngOnInit(): void {

  }
}
