import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor(private router: Router) {}

  goToHome(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/home']);
  }
  goToAbout(event: Event): void{
    event.preventDefault();
    this.router.navigate(["/about"]);
  }
  goToProject(event: Event): void{
    event.preventDefault();
    this.router.navigate(["/project"]);
  }
  goToContact(event: Event): void{
    event.preventDefault();
    this.router.navigate(["/contact"]);

  }
}