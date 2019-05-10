/* tslint:disable */
import {
  TreinoAcademia_ItemSerie
} from '../index';

declare var Object: any;
export interface TreinoAcademia_CargaPlanejadaInterface {
  "id"?: string;
  "valorCarga"?: number;
  "dataInicio"?: Date;
  "dataFinal"?: Date;
  "quantidadeRepeticao"?: number;
  "ativa"?: number;
  "ordemRepeticao"?: number;
  "itemSerieId"?: string;
  itemSerie?: TreinoAcademia_ItemSerie;
}

export class TreinoAcademia_CargaPlanejada implements TreinoAcademia_CargaPlanejadaInterface {
  "id": string;
  "valorCarga": number;
  "dataInicio": Date;
  "dataFinal": Date;
  "quantidadeRepeticao": number;
  "ativa": number;
  "ordemRepeticao": number;
  "itemSerieId": string;
  itemSerie: TreinoAcademia_ItemSerie;
  constructor(data?: TreinoAcademia_CargaPlanejadaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_CargaPlanejada`.
   */
  public static getModelName() {
    return "TreinoAcademia_CargaPlanejada";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_CargaPlanejada for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_CargaPlanejadaInterface): TreinoAcademia_CargaPlanejada{
    return new TreinoAcademia_CargaPlanejada(data);
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
      name: 'TreinoAcademia_CargaPlanejada',
      plural: 'TreinoAcademia_CargaPlanejadas',
      path: 'TreinoAcademia_CargaPlanejadas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "valorCarga": {
          name: 'valorCarga',
          type: 'number'
        },
        "dataInicio": {
          name: 'dataInicio',
          type: 'Date'
        },
        "dataFinal": {
          name: 'dataFinal',
          type: 'Date'
        },
        "quantidadeRepeticao": {
          name: 'quantidadeRepeticao',
          type: 'number'
        },
        "ativa": {
          name: 'ativa',
          type: 'number'
        },
        "ordemRepeticao": {
          name: 'ordemRepeticao',
          type: 'number'
        },
        "itemSerieId": {
          name: 'itemSerieId',
          type: 'string'
        },
      },
      relations: {
        itemSerie: {
          name: 'itemSerie',
          type: 'TreinoAcademia_ItemSerie',
          model: 'TreinoAcademia_ItemSerie',
          relationType: 'belongsTo',
                  keyFrom: 'itemSerieId',
          keyTo: 'id'
        },
      }
    }
  }
}
