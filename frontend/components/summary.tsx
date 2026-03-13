import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card"

export default function Summary({ summary }: { summary: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card>
        <CardHeader className="mb-5">
          <CardTitle className="text-xl">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p className="text-md w-[80%]">{summary}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
