import { Component } from '@angular/core';
import { Content } from "./content/content";

@Component({
  selector: 'app-home',
  imports: [Content],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
