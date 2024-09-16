import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    const body = await request.json();

    const { email, name, password } = body;

    const heshedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            heshedPassword
        }
    });

    return NextResponse.json(user);
}