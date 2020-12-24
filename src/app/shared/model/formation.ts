import {Justification} from './justification';

export class Formation {

  id: BigInteger;
  type: string;
  description: string;
  duree: BigInteger;
  scoreForm: number;
  justificatifs: Justification;
}
