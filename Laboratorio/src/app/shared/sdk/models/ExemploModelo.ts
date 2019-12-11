/* tslint:disable */
import {
  TesteBase
} from '../index';

declare var Object: any;
export interface ExemploModeloInterface {
  "nome"?: string;
  "valor"?: number;
  "id"?: number;
  listaTeste?: TesteBase[];
}

export class ExemploModelo implements ExemploModeloInterface {
  "nome": string;
  "valor": number;
  "id": number;
  listaTeste: TesteBase[];
  constructor(data?: ExemploModeloInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExemploModelo`.
   */
  public static getModelName() {
    return "ExemploModelo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExemploModelo for dynamic purposes.
  **/
  public static factory(data: ExemploModeloInterface): ExemploModelo{
    return new ExemploModelo(data);
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
      name: 'ExemploModelo',
      plural: 'ExemploModelos',
      path: 'ExemploModelos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        listaTeste: {
          name: 'listaTeste',
          type: 'TesteBase[]',
          model: 'TesteBase',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'exemploModeloId'
        },
      }
    }
  }
}
