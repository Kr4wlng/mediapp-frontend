import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../../material/material.module";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [ MaterialModule, RouterLink ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {

}
