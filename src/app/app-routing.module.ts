import { HistoricoComponent } from './historico/historico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path:'', redirectTo:'mainpage', pathMatch:'full'},
  {path:"mainpage", component:MainpageComponent},
  {path:"historico", component:HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
