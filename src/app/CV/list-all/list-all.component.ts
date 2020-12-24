import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../../shared/services/candidat.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Candidats} from '../../shared/model/candidats';
import {AuthentificationService} from '../../shared/auth/authentification.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  cvs: any[];
  activs: any[];
  display = false;
  displayBasic: boolean;

  constructor(private httpClient: HttpClient , private  messageService: MessageService,
              private confirmService: ConfirmationService , private router: Router ) { }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:9091/cv/getAll').subscribe(data => {

      // @ts-ignore
      this.cvs = data;
      console.log(data);
    }, error1 => {console.log(error1);
    });

    this.httpClient.get('http://localhost:9091/activity/getAll').subscribe(data => {

      // @ts-ignore
      this.activs = data;
      console.log(data);
    }, error1 => {console.log(error1);
    });

  }

  showBasicDialog() {
    this.displayBasic = true;
  }



}
