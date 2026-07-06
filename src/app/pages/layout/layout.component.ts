import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../../material/material.module";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [MaterialModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {

}
