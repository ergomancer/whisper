"use server"

import type { CreateNoteCardState, NoteCardState } from "./types"
import { SchemaNoteCreate, SchemaPassword } from "./schema"
import { ExtendedError } from "./errors"
import { z } from "zod"

export async function createNote(
  prevState: CreateNoteCardState,
  formData: FormData
): Promise<CreateNoteCardState> {
  const returnValue: CreateNoteCardState = { success: false }
  const validatedFields = SchemaNoteCreate.safeParse({
    note: formData.get("note"),
  })

  if (!validatedFields.success) {
    returnValue.errors = {
      note: z.treeifyError(validatedFields.error).properties?.note?.errors,
    }
    return returnValue
  }

  const body = JSON.stringify(validatedFields.data)
  try {
    const res = await fetch(`${process.env.BACKEND_URL!}/note/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    })
    const resData = await res.json()
    if (res.ok) {
      returnValue.data = resData
      returnValue.success = true
      return returnValue
    } else throw new ExtendedError(res.status, resData.name, resData.message)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function unlockNote(
  noteId: string,
  prevState: NoteCardState,
  formData: FormData
): Promise<NoteCardState> {
  const returnValue: NoteCardState = { success: false }
  const validatedFields = SchemaPassword.safeParse({
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    returnValue.errors = {
      password: z.treeifyError(validatedFields.error).properties?.password
        ?.errors,
    }
    return returnValue
  }

  const body = JSON.stringify(validatedFields.data)
  try {
    const res = await fetch(`${process.env.BACKEND_URL!}/note/${noteId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    })
    const resData = await res.json()
    if (res.ok) {
      returnValue.data = resData
      returnValue.success = true
      return returnValue
    } else throw new ExtendedError(res.status, resData.name, resData.message)
  } catch (err) {
    console.log(err)
    throw err
  }
}
