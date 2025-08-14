import User from "./user";

// utils/user-repository.ts

export default interface UserRepository {
    save(user: User): Promise<void>;
}