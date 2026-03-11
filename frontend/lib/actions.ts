"use server"

import type { CreateNoteCardState } from "@whisper/shared/types"
import { SchemaNoteCreate } from "@whisper/shared/schema"
import { ExtendedError } from "@whisper/shared/errors"

export async function createNote(
  prevState: CreateNoteCardState,
  formData: FormData
): Promise<CreateNoteCardState> {
  const returnValue: CreateNoteCardState = { success: false }
  const validatedFields = SchemaNoteCreate.safeParse({
    note: formData.get("note"),
  })

  if (!validatedFields.success)
    returnValue.errors = validatedFields.error.flatten().fieldErrors

  try {
    const body = JSON.stringify(validatedFields.data)
    console.log(body)
    const res = await fetch(`${process.env.BACKEND_URL!}/note/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    })
    const resData = await res.json()
    console.log(resData)
    if (res.ok) {
      returnValue.data = resData
      returnValue.success = true
    } else throw new ExtendedError(res.status, resData.name, resData.message)
  } catch (err) {
    console.log(err)
    throw err
  }
  return returnValue
}
