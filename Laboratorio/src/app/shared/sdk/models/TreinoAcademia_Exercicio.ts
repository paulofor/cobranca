/* tslint:disable */
import {
  TreinoAcademia_GrupoMuscular,
  TreinoAcademia_ExecucaoItemSerie,
  TreinoAcademia_DiaTreino,
  TreinoAcademia_ItemSerie,
  TreinoAcademia_Usuario
} from '../index';

declare var Object: any;
export interface TreinoAcademia_ExercicioInterface {
  "id"?: string;
  "descricao"?: string;
  "imagem"?: string;
  "titulo"?: string;
  "subtitulo"?: string;
  "grupoMuscularId"?: string;
  "diaTreinoId"?: string;
  "usuarioId"?: string;
  grupoMuscular?: TreinoAcademia_GrupoMuscular;
  listaExecucaoItemSerie?: TreinoAcademia_ExecucaoItemSerie[];
  diaTreino?: TreinoAcademia_DiaTreino;
  listaItemSerie?: TreinoAcademia_ItemSerie[];
  usuario?: TreinoAcademia_Usuario;
}

export class TreinoAcademia_Exercicio implements TreinoAcademia_ExercicioInterface {
  "id": string;
  "descricao": string;
  "imagem": string;
  "titulo": string;
  "subtitulo": string;
  "grupoMuscularId": string;
  "diaTreinoId": string;
  "usuarioId": string;
  grupoMuscular: TreinoAcademia_GrupoMuscular;
  listaExecucaoItemSerie: TreinoAcademia_ExecucaoItemSerie[];
  diaTreino: TreinoAcademia_DiaTreino;
  listaItemSerie: TreinoAcademia_ItemSerie[];
  usuario: TreinoAcademia_Usuario;
  constructor(data?: TreinoAcademia_ExercicioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_Exercicio`.
   */
  public static getModelName() {
    return "TreinoAcademia_Exercicio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_Exercicio for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_ExercicioInterface): TreinoAcademia_Exercicio{
    return new TreinoAcademia_Exercicio(data);
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
      name: 'TreinoAcademia_Exercicio',
      plural: 'TreinoAcademia_Exercicios',
      path: 'TreinoAcademia_Exercicios',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "imagem": {
          name: 'imagem',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "subtitulo": {
          name: 'subtitulo',
          type: 'string'
        },
        "grupoMuscularId": {
          name: 'grupoMuscularId',
          type: 'string'
        },
        "diaTreinoId": {
          name: 'diaTreinoId',
          type: 'string'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'string'
        },
      },
      relations: {
        grupoMuscular: {
          name: 'grupoMuscular',
          type: 'TreinoAcademia_GrupoMuscular',
          model: 'TreinoAcademia_GrupoMuscular',
          relationType: 'belongsTo',
                  keyFrom: 'grupoMuscularId',
          keyTo: 'id'
        },
        listaExecucaoItemSerie: {
          name: 'listaExecucaoItemSerie',
          type: 'TreinoAcademia_ExecucaoItemSerie[]',
          model: 'TreinoAcademia_ExecucaoItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'exercicioId'
        },
        diaTreino: {
          name: 'diaTreino',
          type: 'TreinoAcademia_DiaTreino',
          model: 'TreinoAcademia_DiaTreino',
          relationType: 'belongsTo',
                  keyFrom: 'diaTreinoId',
          keyTo: 'id'
        },
        listaItemSerie: {
          name: 'listaItemSerie',
          type: 'TreinoAcademia_ItemSerie[]',
          model: 'TreinoAcademia_ItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'exercicioId'
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
