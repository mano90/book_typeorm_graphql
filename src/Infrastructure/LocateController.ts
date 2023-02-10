import { Container } from "typedi";
import { Request, Response } from "express";
import { ErrorResponseDto } from "../Donnees/DataTransfertObject/ResponseDto";
import { LocateSAImpl } from "../Service/ServiceApplicatif/LocateSAImpl";
const EventEmitter = require("events");

const Stream = new EventEmitter();
export class LocateController {
  locateSA: LocateSAImpl = Container.get(LocateSAImpl);

  async add(req: Request, resp: Response) {
    try {
      const locate: any = await this.locateSA.add(req.body);
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async getListe(req: Request, resp: Response) {
    try {
      const locate: any[] = await this.locateSA.getListe();
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async deleteLocate(req: Request, resp: Response) {
    try {
      const locate: any = await this.locateSA.deleteLocate(+req.params.id);
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async getById(req: Request, resp: Response) {
    try {
      const locate: any = await this.locateSA.getById(req.body.nombre);
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }
  async getD(req: Request, resp: Response) {
    try {
      const locate: any = req.body;
      console.log(locate);
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }

  async fromMobile(req: Request, resp: Response) {
    try {
      // const locate: any = await this.locateSA.fromMobile(req.body);
      const locate: any = req.body;
      console.log(locate);
      resp.status(200).send(locate);
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }
}
