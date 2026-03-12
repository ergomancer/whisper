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
import Note from "./note"

export default function NoteCard({ noteId }: { noteId: string }) {
  const initialState: NoteCardState = { success: false }
  const getNoteById = getNote.bind(null, noteId)
  const [cardState, getNoteAction] = useActionState<NoteCardState, FormData>(
    getNoteById,
    initialState
  )
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card>
        <CardHeader className="mb-5">
          <CardTitle className="text-2xl">
            {cardState.success ? "Your Note" : "Unlock Note"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {cardState.success ? (
            <Note note={cardState.data!.note} noteId={noteId} />
          ) : (
            <GetNoteForm action={getNoteAction} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
