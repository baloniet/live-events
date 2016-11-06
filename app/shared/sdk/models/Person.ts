/* tslint:disable */
import {
  PPhone,
  PEmail,
  PCiti,
  PEdu
} from '../index';

declare var Object: any;
export interface PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  birthdate?: any;
  cdate?: any;
  phones?: Array<PPhone>;
  emails?: Array<PEmail>;
  citi?: PCiti;
  edu?: PEdu;
}

export class Person implements PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: any;
  cdate: any;
  phones: Array<PPhone>;
  emails: Array<PEmail>;
  citi: PCiti;
  edu: PEdu;
  constructor(instance?: PersonInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
}
