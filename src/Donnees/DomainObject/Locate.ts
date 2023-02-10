import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Device } from "./Device";

@Entity()
export class Locate {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  date: Date;

  @Column({ type: "double" })
  longitude: number;

  @Column({ type: "double" })
  latitude: number;

  @ManyToOne(() => Device, (Device) => Device.imei, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "device" })
  device: Device;
}
