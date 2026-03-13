"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; status?: number }
  reset: () => void
}) {
  return (
    <div className="items flex items-center justify-center">
      <Card className="h-100 w-100">
        <CardHeader className="mb-5">
          <CardTitle className="text-2xl">{`${error.status ? error.status + " : " : ""}${error.name}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-xl">{error.message}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardAction>
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  )
}
