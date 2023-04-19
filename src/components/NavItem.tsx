import { IconType } from "react-icons"

type NavItemProps = {
  label: string
  Icon: IconType
  isActive?: boolean
}

export function NavItem({ label, Icon, isActive = false }: NavItemProps) {
  return (
    <a
      href="#"
      className={`flex gap-5 items-center pl-6 hover:text-red-400 relative ${
        isActive && "text-red-400"
      }`}
    >
      {isActive && (
        <div className="h-full w-1 absolute left-0 bg-red-400 z-10" />
      )}
      <Icon size={20} />
      <p className="text-lg font-semibold">{label}</p>
    </a>
  )
}
