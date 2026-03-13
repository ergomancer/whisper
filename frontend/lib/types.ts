export type ActionState = {
  success: boolean
}
export type CreateNoteError = { note: string[] }

export type UnlockNoteError = { password: string[] }

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
  errors?: CreateNoteError
  data?: CreatedNoteData
}

export type UnlockNoteActionState = ActionState & {
  data?: Note
  errors?: UnlockNoteError
}
