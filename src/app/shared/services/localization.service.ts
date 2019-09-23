import {Injectable} from '@angular/core';
import {LocalizationModel} from '../resources/localization.model';

@Injectable()
export class LocalizationService {

  public localize: LocalizationModel = new LocalizationModel();
}
