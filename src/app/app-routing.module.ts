import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { SpecialiteComponent } from '../app/components/specialite/specialite.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'etudiant-paris', component: EtudiantParisComponent },
  { path: 'etudiant-hors-paris', component: EtudiantHorsParisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
