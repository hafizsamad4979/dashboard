import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { ConditionHandlingService } from '../../Service/condition-handling.service';
import { CommonModule } from '@angular/common';
import { TablesComponent} from '../tables/tables.component';

@Component({
  selector: 'app-layout',
  imports: [NavComponent,TablesComponent,TablesComponent,ContentAreaComponent,SidemenuComponent,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sideBarStatus:boolean=true;

  constructor(private conditionhandling: ConditionHandlingService){

  this.conditionhandling.getSideBarStatus().subscribe((res:any) =>{
    this.sideBarStatus=res;
  })
}
}
