export type ActionState = {
  success: boolean
}
export type CreateNoteError = { note?: string[]; expiry?: string[] }

export type UnlockNoteError = { password?: string[] }

export type CreatedNoteData = {
  noteId: string
  password: string
}

export type Note = {
  note: string
}

export type Summary = {
  summary: string
}

export type CreateNoteActionState = ActionState & {
  fieldErrors?: CreateNoteError
  formErrors?: string[]
  data?: CreatedNoteData
}

export type UnlockNoteActionState = ActionState & {
  data?: Note
  fieldErrors?: UnlockNoteError
  formErrors?: string[]
}
