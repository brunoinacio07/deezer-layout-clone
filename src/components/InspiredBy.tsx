import Image from "next/image"
import { IoCaretForwardOutline } from "react-icons/io5"

interface InspiredByProps {
  song: string
  singer: string
}

export function InspiredBy({ song, singer }: InspiredByProps) {
  return (
    <div className="flex items-center gap-4 rounded bg-zinc-800 overflow-hidden">
      <div className="group relative w-16 h-16">
        <Image
          src="https://media.discordapp.net/attachments/1084941714118152315/1098358418391187556/BrunoInacio07_capa_de_um_album_de_musica_gospel_bf935927-9733-4fe5-8af2-37a841cd983d.png?width=662&height=662"
          alt="album"
          width={60}
          height={60}
          className="rounded z-0"
        />
        <div className="top-0 left-0 w-16 h-16 bg-black/20 absolute z-20 invisible group-hover:visible cursor-pointer">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 py-2">
            <IoCaretForwardOutline className="text-black pl-1 h-6 w-8" />
          </div>
        </div>
      </div>

      <div className="grid gap-1">
        <p className="text-white cursor-pointer hover:underline">{song}</p>
        <p className="text-zinc-400 text-xs">
          por <span className="cursor-pointer hover:underline">{singer}</span>
        </p>
      </div>
    </div>
  )
}
