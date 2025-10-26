import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FloatLabel } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  imports: [FormsModule, InputTextModule, FloatLabel, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

}
