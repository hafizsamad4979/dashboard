import { Component} from '@angular/core';
import { ConditionHandlingService } from '../../Service/condition-handling.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

isVisible:boolean=true;
  constructor( private conditionhandling:ConditionHandlingService){}
  Togglebtn(){
    this.isVisible=!this.isVisible;
    this.conditionhandling.setSideBarStatus(this.isVisible);
  }

}

