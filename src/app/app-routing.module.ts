import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NopageComponent } from './nopage/nopage.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: '', redirectTo: 'first', pathMatch: 'full'},
  { path: '**', component: NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
