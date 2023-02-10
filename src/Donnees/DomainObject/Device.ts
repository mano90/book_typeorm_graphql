import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Locate } from "./Locate";

@Entity()
export class Device {
  @PrimaryColumn()
  imei: string;

  @Column()
  nom: string;

  @Column()
  color: string;

  @OneToMany(() => Locate, (Locate) => Locate.device, { cascade: true })
  locate?: Locate;
}
