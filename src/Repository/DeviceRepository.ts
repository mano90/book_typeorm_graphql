import { Service } from "typedi";
import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { Device } from "../Donnees/DomainObject/Device";

export interface DeviceRepositoryAci {
  add(device: Device): Promise<Device>;
  liste(): Promise<Device[]>;
  deleteDevice(imei: string): Promise<DeleteResult>;
}

@Service()
@EntityRepository(Device)
export class DeviceRepository
  extends Repository<Device>
  implements DeviceRepositoryAci
{
  add(device: Device): Promise<Device> {
    return this.save(device);
  }

  liste(): Promise<Device[]> {
    return this.createQueryBuilder("device").getMany();
  }

  deleteDevice(imei: string): Promise<DeleteResult> {
    return this.createQueryBuilder()
      .delete()
      .from("device")
      .where("imei =:imei", { imei: imei })
      .execute();
  }
}
