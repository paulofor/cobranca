/* tslint:disable */

declare var Object: any;
export interface TreinoAcademia_RegistroPesoInterface {
  "id"?: string;
  "data"?: Date;
  "valor"?: number;
  "obs"?: string;
}

export class TreinoAcademia_RegistroPeso implements TreinoAcademia_RegistroPesoInterface {
  "id": string;
  "data": Date;
  "valor": number;
  "obs": string;
  constructor(data?: TreinoAcademia_RegistroPesoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_RegistroPeso`.
   */
  public static getModelName() {
    return "TreinoAcademia_RegistroPeso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_RegistroPeso for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_RegistroPesoInterface): TreinoAcademia_RegistroPeso{
    return new TreinoAcademia_RegistroPeso(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'TreinoAcademia_RegistroPeso',
      plural: 'TreinoAcademia_RegistroPesos',
      path: 'TreinoAcademia_RegistroPesos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "obs": {
          name: 'obs',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
