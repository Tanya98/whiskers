import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthServices {

  constructor(private http: HttpClient) {
  }

  public authentication(username: string, password: string) {
    const requestBody = {
      userName: username,
      password: password
    };
    return this.http.post('https://health-finance-dev.armadalabs.com/api/v1/account/Login', requestBody);
  }
}
