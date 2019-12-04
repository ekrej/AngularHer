import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent {

  constructor(
    private location: Location,
    public authService: AuthService
  ) { }

  @Input() title: string
  user = this.authService.getUser();
  isNavbarCollapsed = true
}
