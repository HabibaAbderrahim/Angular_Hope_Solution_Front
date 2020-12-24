import {Formation} from './formation';
import {Experience} from './experience';
import {Activity} from './activity';
import {Reclamation} from './reclamation';

export class Justification {

  id: BigInteger;
  type: string;
  document: string;
  dateD: Date;
  dateF: Date;
  formation: Formation;
  experience: Experience;
  activity: Activity;
  reclamation: Reclamation;

}
