import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidatService} from '../../shared/services/candidat.service';
import {Candidats} from '../../shared/model/candidats';
import {Cv} from '../../shared/model/cv';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  display = false;
  displayBasic: boolean;
  candidat: Candidats = new  Candidats();

  constructor(private httpClient: HttpClient ,   private router: Router , private activatedRoute: ActivatedRoute ,
              private candidatService: CandidatService , private cvService: CvService
             ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null){
      this.candidatService.findById(id).subscribe(res => {

        this.candidat = res ;
        // @ts-ignore
        this.candidat = Array.of(this.candidat);
      }, ex => {
        console.log(ex);
      });

    }




  }



  showBasicDialog() {
    this.displayBasic = true;
  }
}

