
import { Component, OnInit } from '@angular/core';
import '../../assets/js/material-kit.js?v=2.0.6';

declare var $;
@Component({
  selector: 'app-dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'ogitasks';
  constructor() {

  }

  ngOnInit() {
    $('#sidebar').mCustomScrollbar({
      theme: 'minimal'
    });

    $('#sidebarCollapse').on('click', function () {
      // open or close navbar
      $('#sidebar').toggleClass('active');
      $('#content').toggleClass('active');
      // close dropdowns
      $('.collapse.in').toggleClass('in');
      // and also adjust aria-expanded attributes we use for the open/closed arrows
      // in our CSS
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  }
}
