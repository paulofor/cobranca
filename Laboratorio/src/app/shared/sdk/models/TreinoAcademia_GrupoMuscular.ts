/* tslint:disable */
import {
  TreinoAcademia_Exercicio
} from '../index';

declare var Object: any;
export interface TreinoAcademia_GrupoMuscularInterface {
  "nome"?: string;
  "id"?: string;
  "imagem"?: string;
  listaExercicio?: TreinoAcademia_Exercicio[];
}

export class TreinoAcademia_GrupoMuscular implements TreinoAcademia_GrupoMuscularInterface {
  "nome": string;
  "id": string;
  "imagem": string;
  listaExercicio: TreinoAcademia_Exercicio[];
  constructor(data?: TreinoAcademia_GrupoMuscularInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_GrupoMuscular`.
   */
  public static getModelName() {
    return "TreinoAcademia_GrupoMuscular";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_GrupoMuscular for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_GrupoMuscularInterface): TreinoAcademia_GrupoMuscular{
    return new TreinoAcademia_GrupoMuscular(data);
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
      name: 'TreinoAcademia_GrupoMuscular',
      plural: 'TreinoAcademia_GrupoMusculars',
      path: 'TreinoAcademia_GrupoMusculars',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'string'
        },
        "imagem": {
          name: 'imagem',
          type: 'string'
        },
      },
      relations: {
        listaExercicio: {
          name: 'listaExercicio',
          type: 'TreinoAcademia_Exercicio[]',
          model: 'TreinoAcademia_Exercicio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'grupoMuscularId'
        },
      }
    }
  }
}
