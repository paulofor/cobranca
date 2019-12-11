/* tslint:disable */
import {
  TreinoAcademia_SerieTreino,
  TreinoAcademia_Exercicio,
  TreinoAcademia_ExecucaoItemSerie,
  TreinoAcademia_Usuario
} from '../index';

declare var Object: any;
export interface TreinoAcademia_DiaTreinoInterface {
  "id"?: string;
  "data"?: Date;
  "concluido"?: number;
  "serieTreinoId"?: string;
  "exercicioId"?: string;
  "usuarioId"?: string;
  serieTreino?: TreinoAcademia_SerieTreino;
  exercicio?: TreinoAcademia_Exercicio;
  listaExecucaoItemSerie?: TreinoAcademia_ExecucaoItemSerie[];
  usuario?: TreinoAcademia_Usuario;
}

export class TreinoAcademia_DiaTreino implements TreinoAcademia_DiaTreinoInterface {
  "id": string;
  "data": Date;
  "concluido": number;
  "serieTreinoId": string;
  "exercicioId": string;
  "usuarioId": string;
  serieTreino: TreinoAcademia_SerieTreino;
  exercicio: TreinoAcademia_Exercicio;
  listaExecucaoItemSerie: TreinoAcademia_ExecucaoItemSerie[];
  usuario: TreinoAcademia_Usuario;
  constructor(data?: TreinoAcademia_DiaTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_DiaTreino`.
   */
  public static getModelName() {
    return "TreinoAcademia_DiaTreino";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_DiaTreino for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_DiaTreinoInterface): TreinoAcademia_DiaTreino{
    return new TreinoAcademia_DiaTreino(data);
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
      name: 'TreinoAcademia_DiaTreino',
      plural: 'TreinoAcademia_DiaTreinos',
      path: 'TreinoAcademia_DiaTreinos',
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
        "concluido": {
          name: 'concluido',
          type: 'number'
        },
        "serieTreinoId": {
          name: 'serieTreinoId',
          type: 'string'
        },
        "exercicioId": {
          name: 'exercicioId',
          type: 'string'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'string'
        },
      },
      relations: {
        serieTreino: {
          name: 'serieTreino',
          type: 'TreinoAcademia_SerieTreino',
          model: 'TreinoAcademia_SerieTreino',
          relationType: 'belongsTo',
                  keyFrom: 'serieTreinoId',
          keyTo: 'id'
        },
        exercicio: {
          name: 'exercicio',
          type: 'TreinoAcademia_Exercicio',
          model: 'TreinoAcademia_Exercicio',
          relationType: 'belongsTo',
                  keyFrom: 'exercicioId',
          keyTo: 'id'
        },
        listaExecucaoItemSerie: {
          name: 'listaExecucaoItemSerie',
          type: 'TreinoAcademia_ExecucaoItemSerie[]',
          model: 'TreinoAcademia_ExecucaoItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'diaTreinoId'
        },
        usuario: {
          name: 'usuario',
          type: 'TreinoAcademia_Usuario',
          model: 'TreinoAcademia_Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioId',
          keyTo: 'id'
        },
      }
    }
  }
}
