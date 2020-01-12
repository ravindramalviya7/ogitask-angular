import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { UriConstants } from '../constants/uri.constants';


@Injectable()
export class UserService {
  constructor(private http: CustomHttpService) {

  }

  login(user: any) {
    return this.http.postLogin(UriConstants.OAUTH + UriConstants.TOKEN, user);
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  sendCode(data: any) {
    return this.http.postWithoutToken(UriConstants.API + UriConstants.AUTH + UriConstants.SLASH, data);
  }


}
