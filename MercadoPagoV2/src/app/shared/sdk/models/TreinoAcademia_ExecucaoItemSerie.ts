/* tslint:disable */
import {
  TreinoAcademia_Exercicio,
  TreinoAcademia_DiaTreino,
  TreinoAcademia_ItemSerie,
  TreinoAcademia_Usuario,
  TreinoAcademia_ExecucaoCarga
} from '../index';

declare var Object: any;
export interface TreinoAcademia_ExecucaoItemSerieInterface {
  "id"?: string;
  "dataHoraInicio"?: Date;
  "dataHoraFinalizacao"?: Date;
  "cargaUtilizada"?: number;
  "sucessoRepeticoes"?: number;
  "numeroSerie"?: number;
  "quantidadeRepeticao"?: number;
  "exercicioId"?: string;
  "diaTreinoId"?: string;
  "itemSerieId"?: string;
  "usuarioId"?: string;
  exercicio?: TreinoAcademia_Exercicio;
  diaTreino?: TreinoAcademia_DiaTreino;
  itemSerie?: TreinoAcademia_ItemSerie;
  usuario?: TreinoAcademia_Usuario;
  listaExecucaoCarga?: TreinoAcademia_ExecucaoCarga[];
}

export class TreinoAcademia_ExecucaoItemSerie implements TreinoAcademia_ExecucaoItemSerieInterface {
  "id": string;
  "dataHoraInicio": Date;
  "dataHoraFinalizacao": Date;
  "cargaUtilizada": number;
  "sucessoRepeticoes": number;
  "numeroSerie": number;
  "quantidadeRepeticao": number;
  "exercicioId": string;
  "diaTreinoId": string;
  "itemSerieId": string;
  "usuarioId": string;
  exercicio: TreinoAcademia_Exercicio;
  diaTreino: TreinoAcademia_DiaTreino;
  itemSerie: TreinoAcademia_ItemSerie;
  usuario: TreinoAcademia_Usuario;
  listaExecucaoCarga: TreinoAcademia_ExecucaoCarga[];
  constructor(data?: TreinoAcademia_ExecucaoItemSerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_ExecucaoItemSerie`.
   */
  public static getModelName() {
    return "TreinoAcademia_ExecucaoItemSerie";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_ExecucaoItemSerie for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_ExecucaoItemSerieInterface): TreinoAcademia_ExecucaoItemSerie{
    return new TreinoAcademia_ExecucaoItemSerie(data);
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
      name: 'TreinoAcademia_ExecucaoItemSerie',
      plural: 'TreinoAcademia_ExecucaoItemSeries',
      path: 'TreinoAcademia_ExecucaoItemSeries',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "dataHoraInicio": {
          name: 'dataHoraInicio',
          type: 'Date'
        },
        "dataHoraFinalizacao": {
          name: 'dataHoraFinalizacao',
          type: 'Date'
        },
        "cargaUtilizada": {
          name: 'cargaUtilizada',
          type: 'number'
        },
        "sucessoRepeticoes": {
          name: 'sucessoRepeticoes',
          type: 'number'
        },
        "numeroSerie": {
          name: 'numeroSerie',
          type: 'number'
        },
        "quantidadeRepeticao": {
          name: 'quantidadeRepeticao',
          type: 'number'
        },
        "exercicioId": {
          name: 'exercicioId',
          type: 'string'
        },
        "diaTreinoId": {
          name: 'diaTreinoId',
          type: 'string'
        },
        "itemSerieId": {
          name: 'itemSerieId',
          type: 'string'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'string'
        },
      },
      relations: {
        exercicio: {
          name: 'exercicio',
          type: 'TreinoAcademia_Exercicio',
          model: 'TreinoAcademia_Exercicio',
          relationType: 'belongsTo',
                  keyFrom: 'exercicioId',
          keyTo: 'id'
        },
        diaTreino: {
          name: 'diaTreino',
          type: 'TreinoAcademia_DiaTreino',
          model: 'TreinoAcademia_DiaTreino',
          relationType: 'belongsTo',
                  keyFrom: 'diaTreinoId',
          keyTo: 'id'
        },
        itemSerie: {
          name: 'itemSerie',
          type: 'TreinoAcademia_ItemSerie',
          model: 'TreinoAcademia_ItemSerie',
          relationType: 'belongsTo',
                  keyFrom: 'itemSerieId',
          keyTo: 'id'
        },
        usuario: {
          name: 'usuario',
          type: 'TreinoAcademia_Usuario',
          model: 'TreinoAcademia_Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioId',
          keyTo: 'id'
        },
        listaExecucaoCarga: {
          name: 'listaExecucaoCarga',
          type: 'TreinoAcademia_ExecucaoCarga[]',
          model: 'TreinoAcademia_ExecucaoCarga',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'execucaoItemSerieId'
        },
      }
    }
  }
}
