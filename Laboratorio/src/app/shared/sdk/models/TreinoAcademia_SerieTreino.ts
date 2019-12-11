/* tslint:disable */
import {
  TreinoAcademia_DiaTreino,
  TreinoAcademia_ItemSerie,
  TreinoAcademia_Usuario
} from '../index';

declare var Object: any;
export interface TreinoAcademia_SerieTreinoInterface {
  "id"?: string;
  "dataCriacao"?: Date;
  "ativa"?: number;
  "dataUltimaExecucao"?: Date;
  "qtdeExecucao"?: number;
  "usuarioId"?: string;
  listaDiaTreino?: TreinoAcademia_DiaTreino[];
  listaItemSerie?: TreinoAcademia_ItemSerie[];
  usuario?: TreinoAcademia_Usuario;
}

export class TreinoAcademia_SerieTreino implements TreinoAcademia_SerieTreinoInterface {
  "id": string;
  "dataCriacao": Date;
  "ativa": number;
  "dataUltimaExecucao": Date;
  "qtdeExecucao": number;
  "usuarioId": string;
  listaDiaTreino: TreinoAcademia_DiaTreino[];
  listaItemSerie: TreinoAcademia_ItemSerie[];
  usuario: TreinoAcademia_Usuario;
  constructor(data?: TreinoAcademia_SerieTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_SerieTreino`.
   */
  public static getModelName() {
    return "TreinoAcademia_SerieTreino";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_SerieTreino for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_SerieTreinoInterface): TreinoAcademia_SerieTreino{
    return new TreinoAcademia_SerieTreino(data);
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
      name: 'TreinoAcademia_SerieTreino',
      plural: 'TreinoAcademia_SerieTreinos',
      path: 'TreinoAcademia_SerieTreinos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "ativa": {
          name: 'ativa',
          type: 'number'
        },
        "dataUltimaExecucao": {
          name: 'dataUltimaExecucao',
          type: 'Date'
        },
        "qtdeExecucao": {
          name: 'qtdeExecucao',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'string'
        },
      },
      relations: {
        listaDiaTreino: {
          name: 'listaDiaTreino',
          type: 'TreinoAcademia_DiaTreino[]',
          model: 'TreinoAcademia_DiaTreino',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'serieTreinoId'
        },
        listaItemSerie: {
          name: 'listaItemSerie',
          type: 'TreinoAcademia_ItemSerie[]',
          model: 'TreinoAcademia_ItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'serieTreinoId'
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
