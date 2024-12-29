import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from '../dashboard/main.component';
@Component({
  selector: 'app-content-area',
  imports: [RouterOutlet],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.css'
})
export class ContentAreaComponent {

}
