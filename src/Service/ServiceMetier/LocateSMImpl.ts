import { Service } from "typedi";
import { DeleteResult } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Locate } from "../../Donnees/DomainObject/Locate";
import { LocateRepository } from "../../Repository/LocateRepository";

export interface LocateSMAci {
  add(locate: Locate): Promise<Locate>;
  getListe(): Promise<Locate[]>;
  deleteLocate(id: number): Promise<DeleteResult>;
  getById(ids: number[]): Promise<Locate[]>;
}

@Service()
export class LocateSMImpl implements LocateSMAci {
  @InjectRepository()
  locateRepository: LocateRepository;

  add(locate: Locate): Promise<Locate> {
    return this.locateRepository.add(locate);
  }
  getListe(): Promise<Locate[]> {
    return this.locateRepository.getListe();
  }
  deleteLocate(id: number): Promise<DeleteResult> {
    return this.locateRepository.deleteLocate(id);
  }
  async getById(ids: number[]): Promise<Locate[]> {
    let toReturn: any[] = [];
    // ids.forEach((element) => {
    for (let i = 0; i < ids.length; i++) {
      const dt = await this.locateRepository.getById(ids[i]);
      toReturn.push(dt);
    }
    return toReturn;
  }
}
