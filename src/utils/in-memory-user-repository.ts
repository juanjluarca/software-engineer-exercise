import UserRepository from "./user-repository";
import User from "./user";
// utils/in-memory-user-repository.ts

export default class InMemoryUserRepository implements UserRepository {
    private users: Array<{
        email: string;
        firstname: string;
        lastname: string;
    }> = [];
    constructor() {
        this.users = [];
    }

    public async save(user: User) {
        const email = user.email.value;
        const firstname = user.firstname.value;
        const lastname = user.lastname.value;

        this.users.push({ email, firstname, lastname });
    }

}
