type NavSubItemProps = {
  label: string
}

export function NavSubItem({ label }: NavSubItemProps) {
  return (
    <a
      href="#"
      className="text-xs text-zinc-400 hover:text-red-400 w-full flex items-center pl-16 py-3"
    >
      {label}
    </a>
  )
}
