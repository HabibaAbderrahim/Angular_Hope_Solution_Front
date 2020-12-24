import {Experience} from './experience';
import {Formation} from './formation';
import {Activity} from './activity';
import {DossierCriminel} from './dossier-criminel';

export class Cv {

  id: BigInteger;
  scoreCv: number;
  experiences: Experience[];
  fomations: Formation[];
  activities: Activity[];
  dossierJudiciaires: DossierCriminel[];
}
