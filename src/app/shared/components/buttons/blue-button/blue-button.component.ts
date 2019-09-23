import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss']
})

export class BlueButtonComponent implements OnInit {
  constructor() {
  }

  // @Input()
  // public type: string;

  @Input()
  public text: string;

  ngOnInit() {
  }
}
