import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card"
import { summarize } from "@/lib/data"

export default async function Summary({ noteId }: { noteId: string }) {
  const { summary } = await summarize(noteId)
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card>
        <CardHeader className="mb-5">
          <CardTitle className="text-2xl">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p className="h-100 w-60 text-xl md:w-90 lg:w-120 xl:w-150 2xl:w-200">
              {summary}
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
