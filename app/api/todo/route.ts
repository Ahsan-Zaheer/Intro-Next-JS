import { NextResponse } from "next/server"
import db from '../../../utils/db'

export const GET = async () => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ message: todos })
}

export const POST = async (request: Request) => { // Change `Response` to `Request`
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  })

  return NextResponse.json({ message: todo })
}
