import User from './user';
import { getFirstDynamicReason } from 'next/dist/server/app-render/dynamic-rendering';
import UserRepository from './user-repository';

export default class UserRegister {
    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    public async run(email: string, firstname: string, lastname: string) {
        // Implementations user
        const user = User.create(email, firstname, lastname);
        await this.repository.save(user);
    }

}