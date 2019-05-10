/* tslint:disable */

declare var Object: any;
export interface TesteBaseInterface {
  "nome"?: string;
  "id"?: number;
  "exemploModeloId"?: number;
}

export class TesteBase implements TesteBaseInterface {
  "nome": string;
  "id": number;
  "exemploModeloId": number;
  constructor(data?: TesteBaseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TesteBase`.
   */
  public static getModelName() {
    return "TesteBase";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TesteBase for dynamic purposes.
  **/
  public static factory(data: TesteBaseInterface): TesteBase{
    return new TesteBase(data);
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
      name: 'TesteBase',
      plural: 'TesteBases',
      path: 'TesteBases',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "exemploModeloId": {
          name: 'exemploModeloId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
