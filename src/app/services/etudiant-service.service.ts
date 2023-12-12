import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private tabEtudiants: Etudiant[] = [
    new Etudiant("Nom1", "Prenom1", "Adresse1", "GEA", "Paris", "email1@example.com", "Homme", 20, 1),
    new Etudiant("Nom2", "Prenom2", "Adresse2", "MMI", "Ville2", "email2@example.com", "Femme", 22, 2),
  ];

  constructor() { }

  getEtudiants(): Etudiant[] {
    return this.tabEtudiants;
  }

  getEtudiantsParis(): Etudiant[] {
    return this.tabEtudiants.filter(etudiant => etudiant._ville === 'Paris');
  }

  getEtudiantsHorsParis(): Etudiant[] {
    return this.tabEtudiants.filter(etudiant => etudiant._ville !== 'Paris');
  }
}
