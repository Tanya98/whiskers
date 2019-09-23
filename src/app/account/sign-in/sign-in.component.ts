import {Component, OnInit} from '@angular/core';
import {LocalizationModel} from '../../shared/resources/localization.model';
import {ACCOUNT_FIELDS} from '../account-fields.configuration';
import {LocalizationService} from '../../shared/services/localization.service';
import {FormBuilder, FormControl, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  constructor(
    public localizationService: LocalizationService,
    public  formBuilder: FormBuilder
  ) {
    this.localization = this.localizationService.localize;
  }

  public localization: LocalizationModel;

  public configuration = ACCOUNT_FIELDS;

  public signInForm;

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    });
  }
}
