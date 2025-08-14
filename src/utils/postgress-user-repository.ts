// utils/user-repository.ts
import User from "./user";
import { Sql } from "postgres";
import postgres from "postgres";
import UserRepository from "./user-repository";


export default class PostgressUserRepository implements UserRepository {

    private readonly sql: Sql;

    constructor() {
        const connectionString = 'postgresql://postgres.dereosxrbwbkqjupmmgd:Juan202343@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
        this.sql = postgres(connectionString);
    }

    async save(user: User) {
        try {
            const email = user.email.value;
            const firstname = user.firstname.value;
            const lastname = user.lastname.value;

            await this.sql`INSERT INTO users (email, firstname, lastname) VALUES (${email}, ${firstname}, ${lastname});`;
        } catch {
            throw new Error("Failed to save email");
        }
    }
}