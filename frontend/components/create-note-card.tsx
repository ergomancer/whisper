"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CreateNoteForm from "@/components/create-note-form"
import { CreateNoteActionState } from "@/lib/types"

export default function CreateNoteCard({
  formManager,
}: {
  formManager: [CreateNoteActionState, (payload: FormData) => void, boolean]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create Note</CardTitle>
        <CardDescription className="text-lg">
          Write your note in 500 characters or less
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CreateNoteForm formManager={formManager} />
      </CardContent>
    </Card>
  )
}
