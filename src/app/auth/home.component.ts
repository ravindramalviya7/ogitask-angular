
import { Component } from '@angular/core';
import {NavbarComponent} from '../common/navbar/navbar.component'
import { from } from 'rxjs';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'ogitasks';
}
