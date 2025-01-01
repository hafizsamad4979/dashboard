import { Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { MainComponent } from './Components/dashboard/main.component';
import { TablesComponent } from './Components/tables/tables.component';
import { LoginformComponent } from './Components/loginform/loginform.component';

export const routes: Routes = [
    
        {
            path: '',
            component: MainComponent
        }
        ,
        {
            path:'dashboard',
            component: MainComponent
        }
        ,
        {
            path:'forms',
            component: FormComponent
        }
        ,
        {
            path:'buttons',
            component: ButtonsComponent
        }
        ,
        {
            path:'tables',
            component:TablesComponent
        },
        {
            path:'loginform',
            component:LoginformComponent
        }
]