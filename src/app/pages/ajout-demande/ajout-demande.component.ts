import { Component, OnInit } from '@angular/core';
import { DemandeDto } from '../../Models/DemandeDto';
import { DemandeService } from '../../../services/demande.service';
import { HelperService } from '../../../services/helper.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemandeControllerService } from '../../swagger/services/services';

@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit{
  demandeForm!: FormGroup;
  
  demande: DemandeDto = {

    lieu: '',
    categorie: '',
    urgence: '',
    impact: ''
  };
  errorMessages: Array<string> = [];

  constructor(
    private demandeService: DemandeService,
    private helperService: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private apiGenDemandeSce: DemandeControllerService
    
  ) { }
                                      
  ngOnInit(): void {
    this.demandeForm = this._fb.group({
      lieu: ['', Validators.required],
      categorie:['', Validators.required],
      urgence: ['', Validators.required],
      impact: ['', Validators.required]
    });
    const demandeId = this.activatedRoute.snapshot.params['idDemande'];
    if (demandeId) {
      this.demandeService.findById2(demandeId).subscribe({
        next: (data) => {
          this.demande = data;
        }
      });
    }
  }

  save() {
    this.errorMessages = [];
    const requestBody = { body: this.demandeForm.value }; // Création de l'objet avec la structure attendue
    this.apiGenDemandeSce.save({body :this.demandeForm.value}).subscribe({
      next: async () => {
        //await this.router.navigate(['/listD']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/listD']);
  }
}
