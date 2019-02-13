/* tslint:disable */

declare var Object: any;
export interface MercadoPagoInterface {
  "id"?: number;
}

export class MercadoPago implements MercadoPagoInterface {
  "id": number;
  constructor(data?: MercadoPagoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MercadoPago`.
   */
  public static getModelName() {
    return "MercadoPago";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MercadoPago for dynamic purposes.
  **/
  public static factory(data: MercadoPagoInterface): MercadoPago{
    return new MercadoPago(data);
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
      name: 'MercadoPago',
      plural: 'MercadoPagos',
      path: 'MercadoPagos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
