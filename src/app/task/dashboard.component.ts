
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
    // $('#sidebar').mCustomScrollbar({
    //   theme: 'minimal'
    // });

    // $('#sidebarCollapse').on('click', function () {
    //   $('#sidebar').toggleClass('active');
    //   $('#content').toggleClass('active');
    //   $('.collapse.in').toggleClass('in');
    //   $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // });


    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
