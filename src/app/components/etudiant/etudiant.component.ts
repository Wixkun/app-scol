import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant-service.service';
import { Etudiant } from '../../models/etudiant'; 

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = []; 

  constructor(private EtudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiants = this.EtudiantService.getEtudiants();
  }
}
