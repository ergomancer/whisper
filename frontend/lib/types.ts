export type CreateNoteCardState = {
  errors?: {
    note?: string[]
  }
  data?: {
    noteId: string
    password: string
  }
  success: boolean
}

export type NoteCardState = {
  errors?: {
    password?: string[]
  }
  data?: {
    note: string
  }
  success?: boolean
}
