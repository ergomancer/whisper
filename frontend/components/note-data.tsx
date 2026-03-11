import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card"

export default function NoteData({
  createdNote,
}: {
  createdNote: { noteId: string; password: string }
}) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-xl">Note Created</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-muted-foreground">
          You can see that note with the following link and password.
        </CardDescription>
        <p className="mt-5 text-lg">Link</p>
        <Link
          href={`/${createdNote.noteId}`}
          className="text-md mt-3 text-red-500"
        >
          {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}`}
        </Link>
        <p className="mt-5 text-lg">Password</p>
        <p className="text-md mt-3">{createdNote.password}</p>
      </CardContent>
    </Card>
  )
}
