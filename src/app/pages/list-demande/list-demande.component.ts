import { Component } from '@angular/core';
import { DemandeService } from '../../../services/demande.service';

import { HelperService } from '../../../services/helper.service';
import { DemandeDto } from '../../swagger/services/models';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeControllerService } from '../../swagger/services/services';
import { async } from 'rxjs';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  userIdToDelete: any = -1;
  demandes : Array<DemandeDto> =[];
  constructor(
    private demandeService: DemandeService,
    private helperService: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private apiGenDemandeSce: DemandeControllerService
  ) { }

  ngOnInit() {
    this.loadDemandes();
  }

  loadDemandes() {
    this.demandeService.findAll2$Response().subscribe({
      next: (data) => {
        this.demandes = data.body;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });

  }
}


