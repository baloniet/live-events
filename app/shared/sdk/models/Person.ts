/* tslint:disable */
import {
  PPhone,
  PEmail
} from '../index';

declare var Object: any;
export interface PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  cdate?: any;
  birthdate?: any;
  phones?: Array<PPhone>;
  emails?: Array<PEmail>;
}

export class Person implements PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  cdate: any;
  birthdate: any;
  phones: Array<PPhone>;
  emails: Array<PEmail>;
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
