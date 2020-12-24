import { Component, OnInit } from '@angular/core';
import {Candidats} from '../../shared/model/candidats';
import {CandidatService} from '../../shared/services/candidat.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  candidat: Candidats = new Candidats();
  visibel = true;
  constructor(private candidatService: CandidatService, private  messageService: MessageService, private router: Router ,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null){
      this.candidatService.findById(id).subscribe(res => {
        this.candidat = res ;
        this.visibel = false ;
      }, ex => {
        console.log(ex);
      });

    }

  }

  ajouter() {
    this.candidatService.save(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        this.router.navigate(['candidat']);
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Operation non effectuée'});
      console.log(ex);
    });


  }

  modifier() {
    this.candidatService.update(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        this.router.navigate(['candidat']);
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Operation non effectuée'});
      console.log(ex);
    });


  }
}
