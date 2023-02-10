import { Service } from "typedi";
import { DeleteResult } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Device } from "../../Donnees/DomainObject/Device";
import { DeviceRepository } from "../../Repository/DeviceRepository";

export interface DeviceSMAci {
  add(device: Device): Promise<Device>;
  liste(): Promise<Device[]>;
  deleteDevice(imei: string): Promise<DeleteResult>;
}

@Service()
export class DeviceSMImpl implements DeviceSMAci {
  @InjectRepository()
  deviceRepository: DeviceRepository;

  add(device: Device): Promise<Device> {
    return this.deviceRepository.add(device);
  }

  liste(): Promise<Device[]> {
    return this.deviceRepository.liste();
  }

  async deleteDevice(imei: string): Promise<DeleteResult> {
    return this.deviceRepository.deleteDevice(imei);
  }
}
