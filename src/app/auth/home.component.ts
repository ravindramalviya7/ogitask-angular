
import { Component } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component'
import { from } from 'rxjs';
import '../../assets/js/material-kit.js?v=2.0.6';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'ogitasks';
}
