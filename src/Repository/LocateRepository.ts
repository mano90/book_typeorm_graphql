import { Service } from "typedi";
import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { Locate } from "../Donnees/DomainObject/Locate";

export interface LocateRepositoryAci {
  getListe(): Promise<Locate[]>;
  add(locate: Locate): Promise<Locate>;
  deleteLocate(id: number): Promise<DeleteResult>;
  getById(id: number): Promise<Locate>;
}

@Service()
@EntityRepository(Locate)
export class LocateRepository
  extends Repository<Locate>
  implements LocateRepositoryAci
{
  add(locate: Locate): Promise<Locate> {
    return this.save(locate);
  }
  getListe(): Promise<Locate[]> {
    return this.createQueryBuilder("locate")
      .leftJoinAndSelect("locate.device", "device")
      .getMany();
  }
  deleteLocate(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder()
      .delete()
      .from("locate")
      .where("id =:id", { id: id })
      .execute();
  }

  getById(id: number): Promise<Locate> {
    return this.createQueryBuilder("locate")
      .where("id =:id", { id: id })
      .leftJoinAndSelect("locate.device", "device")
      .getOne();
  }
}
