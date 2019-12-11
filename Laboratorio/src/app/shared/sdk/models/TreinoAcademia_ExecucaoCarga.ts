/* tslint:disable */
import {
  TreinoAcademia_ExecucaoItemSerie
} from '../index';

declare var Object: any;
export interface TreinoAcademia_ExecucaoCargaInterface {
  "id"?: string;
  "dataHora"?: Date;
  "valorCarga"?: number;
  "repeticao"?: number;
  "sequencia"?: number;
  "execucaoItemSerieId"?: string;
  execucaoItemSerie?: TreinoAcademia_ExecucaoItemSerie;
}

export class TreinoAcademia_ExecucaoCarga implements TreinoAcademia_ExecucaoCargaInterface {
  "id": string;
  "dataHora": Date;
  "valorCarga": number;
  "repeticao": number;
  "sequencia": number;
  "execucaoItemSerieId": string;
  execucaoItemSerie: TreinoAcademia_ExecucaoItemSerie;
  constructor(data?: TreinoAcademia_ExecucaoCargaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_ExecucaoCarga`.
   */
  public static getModelName() {
    return "TreinoAcademia_ExecucaoCarga";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_ExecucaoCarga for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_ExecucaoCargaInterface): TreinoAcademia_ExecucaoCarga{
    return new TreinoAcademia_ExecucaoCarga(data);
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
      name: 'TreinoAcademia_ExecucaoCarga',
      plural: 'TreinoAcademia_ExecucaoCargas',
      path: 'TreinoAcademia_ExecucaoCargas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "valorCarga": {
          name: 'valorCarga',
          type: 'number'
        },
        "repeticao": {
          name: 'repeticao',
          type: 'number'
        },
        "sequencia": {
          name: 'sequencia',
          type: 'number'
        },
        "execucaoItemSerieId": {
          name: 'execucaoItemSerieId',
          type: 'string'
        },
      },
      relations: {
        execucaoItemSerie: {
          name: 'execucaoItemSerie',
          type: 'TreinoAcademia_ExecucaoItemSerie',
          model: 'TreinoAcademia_ExecucaoItemSerie',
          relationType: 'belongsTo',
                  keyFrom: 'execucaoItemSerieId',
          keyTo: 'id'
        },
      }
    }
  }
}
