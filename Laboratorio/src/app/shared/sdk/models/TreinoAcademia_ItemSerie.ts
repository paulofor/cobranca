/* tslint:disable */
import {
  TreinoAcademia_SerieTreino,
  TreinoAcademia_Exercicio,
  TreinoAcademia_CargaPlanejada,
  TreinoAcademia_ExecucaoItemSerie
} from '../index';

declare var Object: any;
export interface TreinoAcademia_ItemSerieInterface {
  "id"?: string;
  "ordemExecucao"?: number;
  "parametros"?: string;
  "serieTreinoId"?: string;
  "exercicioId"?: string;
  serieTreino?: TreinoAcademia_SerieTreino;
  exercicio?: TreinoAcademia_Exercicio;
  listaCargaPlanejada?: TreinoAcademia_CargaPlanejada[];
  listaExecucaoItemSerie?: TreinoAcademia_ExecucaoItemSerie[];
}

export class TreinoAcademia_ItemSerie implements TreinoAcademia_ItemSerieInterface {
  "id": string;
  "ordemExecucao": number;
  "parametros": string;
  "serieTreinoId": string;
  "exercicioId": string;
  serieTreino: TreinoAcademia_SerieTreino;
  exercicio: TreinoAcademia_Exercicio;
  listaCargaPlanejada: TreinoAcademia_CargaPlanejada[];
  listaExecucaoItemSerie: TreinoAcademia_ExecucaoItemSerie[];
  constructor(data?: TreinoAcademia_ItemSerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_ItemSerie`.
   */
  public static getModelName() {
    return "TreinoAcademia_ItemSerie";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_ItemSerie for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_ItemSerieInterface): TreinoAcademia_ItemSerie{
    return new TreinoAcademia_ItemSerie(data);
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
      name: 'TreinoAcademia_ItemSerie',
      plural: 'TreinoAcademia_ItemSeries',
      path: 'TreinoAcademia_ItemSeries',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "ordemExecucao": {
          name: 'ordemExecucao',
          type: 'number'
        },
        "parametros": {
          name: 'parametros',
          type: 'string'
        },
        "serieTreinoId": {
          name: 'serieTreinoId',
          type: 'string'
        },
        "exercicioId": {
          name: 'exercicioId',
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
        listaCargaPlanejada: {
          name: 'listaCargaPlanejada',
          type: 'TreinoAcademia_CargaPlanejada[]',
          model: 'TreinoAcademia_CargaPlanejada',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'itemSerieId'
        },
        listaExecucaoItemSerie: {
          name: 'listaExecucaoItemSerie',
          type: 'TreinoAcademia_ExecucaoItemSerie[]',
          model: 'TreinoAcademia_ExecucaoItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'itemSerieId'
        },
      }
    }
  }
}
