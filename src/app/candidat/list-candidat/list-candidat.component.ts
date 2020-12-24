import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../../shared/services/candidat.service';
import {Candidats} from '../../shared/model/candidats';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../shared/auth/authentification.service';
import {ListPartisienne} from '../../shared/model/list-partisienne';
import {ListParService} from '../../shared/services/list-par.service';
import {ListCoalService} from '../../shared/services/list-coal.service';
import {ListIndepService} from '../../shared/services/list-indep.service';
import {ListIndependant} from '../../shared/model/list-independant';
import {ListCoalision} from '../../shared/model/list-coalision';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {

  display = false;
  displayBasic: boolean;
  displayBasic1: boolean;
  displayBasic2: boolean;
  displayBasic3: boolean;
  position: string;
  candidat: Candidats = new Candidats();
  part: ListPartisienne = new ListPartisienne();
  coal: ListCoalision = new ListCoalision();
  ind: ListIndependant = new ListIndependant();
  constructor(private candidatService: CandidatService, private  messageService: MessageService,
              private confirmService: ConfirmationService , private router: Router , private authenService: AuthentificationService ,
              private listPart: ListParService , private listCol: ListCoalService , private listIn: ListIndepService) { }

  ngOnInit(): void {
    this.getAll();
    // this.getAllCoal();
    // this.getAllInd();
    // this.getAllPart();

  }

  getAll(){
    this.candidatService.getAll().subscribe(data => {
      // console.log(data);

      // @ts-ignore
      this.candidat = data;
    }, error1 => {console.log(error1);
    });
  }

  private supprimer(cand) {

    this.confirmService.confirm({

      header: 'Confirmation',
      message: 'Do you want to delete this Candidat ?',
      accept: () => {

        this.candidatService.delete(cand.id).subscribe(res => {
          if (res.success) {
            this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
            // reffesh
            this.getAll();
          } else {
            this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Operation non effectuée'});
          console.log(ex);
        });


      }

    });

      }


      public editer(cand){
        this.router.navigate(['user/edit-new' , cand.id]) ;

      }
      public editerCv(cand){
         this.router.navigate(['candidat/sedit-cv' , cand.id]) ;

             }

  decx() {

    this.authenService.logout();


  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showBasicDialog1() {
    this.displayBasic1 = true;
  }
  showBasicDialog2() {
    this.displayBasic2 = true;
  }
  showBasicDialog3() {
    this.displayBasic3 = true;
  }

  getAllPart(){
    this.listPart.getAll().subscribe(data => {
      // console.log(data);

      // @ts-ignore
      this.part = data;

    }, error1 => {console.log(error1);
    });
  }

  getAllCoal(){
    this.listCol.getAll().subscribe(data => {
      // console.log(data);

      // @ts-ignore
      this.coal = data;
    }, error1 => {console.log(error1);
    });
  }

  getAllInd(){
    this.listIn.getAll().subscribe(data => {
      // console.log(data);

      // @ts-ignore
      this.ind = data;
    }, error1 => {console.log(error1);
    });
  }


}
