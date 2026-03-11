"use client"

import { useActionState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card"
import { NoteCardState } from "@whisper/shared/types"
import { getNote } from "@/lib/actions"
import GetNoteForm from "./get-note-form"

export default function NoteCard({ noteId }: { noteId: string }) {
  const initialState: NoteCardState = { success: false }
  const getNoteById = getNote.bind(null, noteId)
  const [cardState, getNoteAction] = useActionState<NoteCardState, FormData>(
    getNoteById,
    initialState
  )
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardState.success ? "Your Note" : "Unlock Note"}</CardTitle>
      </CardHeader>
      <CardContent>
        {cardState.success ? (
          <p>{cardState.data?.note}</p>
        ) : (
          <GetNoteForm action={getNoteAction} />
        )}
      </CardContent>
    </Card>
  )
}
