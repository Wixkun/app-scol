
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecService {

  constructor() { }

  getSpecialites(): string[] {
    return ["Informatique", "Mathématiques", "Physique", "Chimie", "Biologie"];
  }
}
