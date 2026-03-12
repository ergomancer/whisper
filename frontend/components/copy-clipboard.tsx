"use client"
import { Button } from "./ui/button"
import { useState } from "react"

export default function CopyClipboard({
  createdNote,
}: {
  createdNote: { noteId: string; password: string }
}) {
  const initialState = "ready"
  const [state, setState] = useState(initialState)
  return (
    <Button
      variant={"secondary"}
      onClick={async () => {
        await navigator.clipboard.writeText(
          `Hi!\nThere is a secret note for you at ${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}\nYou can unlock the message using the password ${createdNote.password}`
        )
        setState("copied")
      }}
    >
      {state == "copied" ? "Copied" : "Copy to Clipboard"}
    </Button>
  )
}
