import { Repository } from "typeorm";

import AppDataSource from "../../../../database/data-source";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokenRepository implements IUsersTokensRepository {
  private respository: Repository<UserTokens>;

  constructor() {
    this.respository = AppDataSource.manager.getRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.respository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.respository.save(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const usersTokens = await this.respository.findOneBy({
      user_id,
      refresh_token,
    });

    return usersTokens;
  }

  async deleteById(id: string): Promise<void> {
    await this.respository.delete(id);
  }
}

export { UsersTokenRepository };
