import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../../material/material.module";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [MaterialModule, RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {

}
