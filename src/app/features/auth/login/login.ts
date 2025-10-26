import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, FloatLabel, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
