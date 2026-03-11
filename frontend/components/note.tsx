export default function Note({ note }: { note: string }) {
  return (
    <div>
      <p className="h-100 w-60 text-xl md:w-90 lg:w-120 xl:w-150 2xl:w-200">
        {note}
      </p>
    </div>
  )
}
