import { Component } from '@angular/core'
import { AuthService } from 'src/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Discus this game'

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (!authService.isAuthenticated()) 
      router.navigate(['/signin'])
  }
}
