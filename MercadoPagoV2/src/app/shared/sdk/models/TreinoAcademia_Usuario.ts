/* tslint:disable */
import {
  TreinoAcademia_SerieTreino,
  TreinoAcademia_Exercicio,
  TreinoAcademia_ExecucaoItemSerie,
  TreinoAcademia_DiaTreino
} from '../index';

declare var Object: any;
export interface TreinoAcademia_UsuarioInterface {
  "id"?: string;
  "nome"?: string;
  "senha"?: string;
  "email"?: string;
  listaSerieTreino?: TreinoAcademia_SerieTreino[];
  listaExercicio?: TreinoAcademia_Exercicio[];
  listaExecucaoItemSerie?: TreinoAcademia_ExecucaoItemSerie[];
  listaDiaTreino?: TreinoAcademia_DiaTreino[];
}

export class TreinoAcademia_Usuario implements TreinoAcademia_UsuarioInterface {
  "id": string;
  "nome": string;
  "senha": string;
  "email": string;
  listaSerieTreino: TreinoAcademia_SerieTreino[];
  listaExercicio: TreinoAcademia_Exercicio[];
  listaExecucaoItemSerie: TreinoAcademia_ExecucaoItemSerie[];
  listaDiaTreino: TreinoAcademia_DiaTreino[];
  constructor(data?: TreinoAcademia_UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_Usuario`.
   */
  public static getModelName() {
    return "TreinoAcademia_Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_Usuario for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_UsuarioInterface): TreinoAcademia_Usuario{
    return new TreinoAcademia_Usuario(data);
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
      name: 'TreinoAcademia_Usuario',
      plural: 'TreinoAcademia_Usuarios',
      path: 'TreinoAcademia_Usuarios',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
      },
      relations: {
        listaSerieTreino: {
          name: 'listaSerieTreino',
          type: 'TreinoAcademia_SerieTreino[]',
          model: 'TreinoAcademia_SerieTreino',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioId'
        },
        listaExercicio: {
          name: 'listaExercicio',
          type: 'TreinoAcademia_Exercicio[]',
          model: 'TreinoAcademia_Exercicio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioId'
        },
        listaExecucaoItemSerie: {
          name: 'listaExecucaoItemSerie',
          type: 'TreinoAcademia_ExecucaoItemSerie[]',
          model: 'TreinoAcademia_ExecucaoItemSerie',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioId'
        },
        listaDiaTreino: {
          name: 'listaDiaTreino',
          type: 'TreinoAcademia_DiaTreino[]',
          model: 'TreinoAcademia_DiaTreino',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioId'
        },
      }
    }
  }
}
