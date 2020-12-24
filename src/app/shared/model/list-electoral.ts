import {Candidats} from './candidats';
import {ListIndependant} from './list-independant';
import {ListPartisienne} from './list-partisienne';
import {ListCoalision} from './list-coalision';

export class ListElectoral {

  id: BigInteger;
  gouvernorat: string;
  scoreList: BigInteger;
  nom: string;
  condidatList: Candidats;
  listIndependantes: ListIndependant;
  listPartisiennes: ListPartisienne;
  listCoalitions: ListCoalision;
}
