export interface UserRecord {
  username: string;
  password: string;
  created: number;
  modified: number;
}

export interface UserRepository {
  findAll(): Promise<UserRecord[]>;
  insert(user: UserRecord): Promise<UserRecord>;
}
