/* tslint:disable */

declare var Object: any;
export interface PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  birthdate?: any;
  cdate?: any;
}

export class Person implements PersonInterface {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: any;
  cdate: any;
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
