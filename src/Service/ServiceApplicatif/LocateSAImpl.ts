import { Container, Service } from "typedi";
import { Locate } from "../../Donnees/DomainObject/Locate";
import { LocateSMImpl } from "../ServiceMetier/LocateSMImpl";
import { DeleteResult } from "typeorm";

export interface LocateSAAci {
  add(locate: Locate): Promise<Locate>;
  getListe(): Promise<Locate[]>;
  deleteLocate(id: number): Promise<DeleteResult>;
  getById(ids: number[]): Promise<Locate[]>;
}

@Service()
export class LocateSAImpl implements LocateSAAci {
  locateSM: LocateSMImpl = Container.get(LocateSMImpl);
  add(locate: Locate): Promise<Locate> {
    return this.locateSM.add(locate);
  }
  getListe(): Promise<Locate[]> {
    return this.locateSM.getListe();
  }
  deleteLocate(id: number): Promise<DeleteResult> {
    return this.locateSM.deleteLocate(id);
  }
  getById(ids: number[]): Promise<Locate[]> {
    return this.locateSM.getById(ids);
  }
}
