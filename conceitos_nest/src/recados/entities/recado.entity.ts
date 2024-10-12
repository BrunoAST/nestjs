import { Entity } from 'typeorm';

@Entity()
export class Recado {
  id: number;
  texto: string;
  de: string;
  para: string;
  lido: boolean;
  data: Date;
}
