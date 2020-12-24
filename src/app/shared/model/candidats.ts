
import {Contact} from './contact';
import {Cv} from './cv';

export class Candidats extends Contact{
  score: number ;
  facebook: string ;
  twitter: string ;
  position: number ;
  dateNaissance: Date ;
  cv: Cv[] ;


}
