import { Container, Service } from "typedi";
import { ErrorResponseDto } from "../../Donnees/DataTransfertObject/ResponseDto";
import { Device } from "../../Donnees/DomainObject/Device";
import { DeleteResult } from "typeorm";
import { DeviceSMImpl } from "../ServiceMetier/DeviceSMImpl";

export interface DeviceSAAci {
  add(device: Device): Promise<Device>;
  liste(): Promise<Device[]>;
  deleteDevice(imei: string): Promise<DeleteResult>;
}

@Service()
export class DeviceSAImpl implements DeviceSAAci {
  // userFactory: UserFactory = Container.get(UserFactory);
  deviceSM: DeviceSMImpl = Container.get(DeviceSMImpl);

  add(device: Device): Promise<Device> {
    return this.deviceSM.add(device);
  }

  liste() {
    return this.deviceSM.liste();
  }

  deleteDevice(imei: string): Promise<DeleteResult> {
    return this.deviceSM.deleteDevice(imei);
  }
}
