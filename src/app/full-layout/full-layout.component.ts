import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-full-layout',
  templateUrl:'./full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {
  constructor(private route : Router) {
  }
  goto(s: string) {
    this.route.navigateByUrl(s)
  }
}
