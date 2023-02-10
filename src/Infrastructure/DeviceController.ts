import { Container } from "typedi";
import { Request, Response } from "express";
import {
  ErrorResponseDto,
  SuccessResponseDto,
} from "../Donnees/DataTransfertObject/ResponseDto";
import { UserValidator } from "../Contrainte/Validator/UserValidator";
import { DeviceSAImpl } from "../Service/ServiceApplicatif/DeviceSAImpl";
import { Device } from "../Donnees/DomainObject/Device";
import { DeleteResult } from "typeorm";

export class DeviceController {
  deviceSA: DeviceSAImpl = Container.get(DeviceSAImpl);
  userValidator: UserValidator = Container.get(UserValidator);

  async liste(req: Request, resp: Response) {
    try {
      const listeDevices: Device[] = await this.deviceSA.liste();
      resp.status(200).send(listeDevices);
    } catch (e) {
      resp.status(500).send((e.toString(), true));
    }
  }

  async add(req: Request, resp: Response) {
    try {
      const deviceSaved = await this.deviceSA.add(req.body);
      resp.status(200).send(deviceSaved);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async deleteDevice(req: Request, resp: Response) {
    try {
      const resultat: DeleteResult = await this.deviceSA.deleteDevice(
        req.params.imei
      );
      resp.status(200).send(resultat);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async check(req: Request, resp: Response) {
    try {
      // console.log("mandeha");
      resp.status(200).send(true);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }
}
