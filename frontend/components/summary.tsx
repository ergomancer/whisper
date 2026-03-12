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
