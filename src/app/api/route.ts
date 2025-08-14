import InMemoryUserRepository from "@/utils/in-memory-user-repository";
import PostgressUserRepository from "@/utils/postgress-user-repository";
import UserRegister from "@/utils/user-register";

import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const repository = new PostgressUserRepository();
        // const repository = new InMemoryUserRepository();
        const register = new UserRegister(repository);
        await register.run(data.email, data.firstname, data.lastname);


        NextResponse.json({
            message: 'Email saved successfully',
        })
    } catch (error) {
        console.error('Error saving email:', error);
        return NextResponse.json({
            error: 'Failed to save email',
        }, { status: 500 });
    }
}





