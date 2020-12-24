import {Contact} from './contact';
import {Justification} from './justification';

export class Reclamation {

  id: BigInteger;
  contenu: string;
  contacts: Contact;
  justificatifs: Justification;
}
