'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export async function completeTodo(id) {
    const todo = await db.todo.findUnique({
        where: { id },
    });
    
    if (todo.completed) {
        await db.todo.update({
            where: { id },
            data: {
                completed: false,
            }
        });
    } else {
        await db.todo.update({
            where: { id },
            data: {
                completed: true,
            }
        });
    }

    revalidatePath('/todos')
}



export async function newTodo( formData) {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content'),
        }
    })

    revalidatePath('/todos')
    
}
