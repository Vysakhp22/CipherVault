import { Component } from '@angular/core';
import { Content } from "./content/content";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Content, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
