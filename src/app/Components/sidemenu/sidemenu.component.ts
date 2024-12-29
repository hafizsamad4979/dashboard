import { Component} from '@angular/core';
import { ConditionHandlingService } from '../../Service/condition-handling.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
   
}

