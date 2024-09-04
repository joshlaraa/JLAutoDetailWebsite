import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
    try {
        const { name, phone, email, message } = await req.json()

        const newContactRequest = await db.conactRequest.create({
            data: {
                name,
                phone,
                email,
                message,
            },
        })

        return NextResponse.json(newContactRequest, { status: 201 })
    } catch (error) {
        console.error('Failed to submit contact request:', error)
        return NextResponse.json(
            { error: 'Failed to submit contact request' },
            { status: 500 }
        )
    }
}
