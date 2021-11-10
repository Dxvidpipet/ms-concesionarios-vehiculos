import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idVehiculo?: number;

  @property({
    type: 'string',
    required: true,
  })
  colorVehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  modeloVehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  seriechasis: string;

  @property({
    type: 'string',
    required: true,
  })
  seriemotor: string;

  @property({
    type: 'number',
    required: true,
  })
  precioVehiculo: number;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoVehiculo: boolean;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
