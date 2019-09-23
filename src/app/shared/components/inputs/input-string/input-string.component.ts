import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.scss']
})

export class InputStringComponent implements OnInit {
  constructor() {
  }

  @Input()
  public placeholder: string;

  @Input()
  public name: string;

  @Input()
  public minLength: number;

  @Input()
  public maxLength: number;

  @Input()
  public isRequired: boolean;

  @Input()
  public type: string;

  // @Input()
  // public formControlName: FormControlName;

  ngOnInit() {
  }
}
