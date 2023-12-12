import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant-service.service';
import { Etudiant } from '../../models/etudiant';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent implements OnInit {
  etudiantsParis: Etudiant[] = []; 

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsParis = this.etudiantService.getEtudiantsParis();
  }
}
