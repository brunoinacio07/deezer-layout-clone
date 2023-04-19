import { InspiredBy } from "@/components/InspiredBy"
import { NavItem } from "@/components/NavItem"
import { NavSubItem } from "@/components/NavSubItem"
import Image from "next/image"
import { BiRadio } from "react-icons/bi"
import { FaMicrophoneAlt } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { ImAngry, ImMusic } from "react-icons/im"
import {
  IoAdd,
  IoCaretForwardOutline,
  IoCloseOutline,
  IoGridOutline,
  IoHeartOutline,
  IoNotifications,
  IoOptionsOutline,
  IoPause,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoRepeatOutline,
  IoSearch,
  IoShuffle,
  IoVolumeMediumOutline,
} from "react-icons/io5"
import bgGradient from "../../public/assets/icons/bg-gradient.png"
import flowImage from "../../public/assets/icons/flow.png"
import trainingImage from "../../public/assets/icons/image 2.png"
import partyImage from "../../public/assets/icons/image 3.png"
import relaxImage from "../../public/assets/icons/image 4.png"
import sadImage from "../../public/assets/icons/image 5.png"
import youAndMeImage from "../../public/assets/icons/image 6.png"
import focusImage from "../../public/assets/icons/image 7.png"

export default function Home() {
  return (
    <main className="bg-zinc-950 h-screen w-screen relative">
      <div className="h-full w-full flex">
        <aside className="w-56 bg-zinc-900 border-r border-r-zinc-700">
          <div className="flex gap-3 text-zinc-200 p-6">
            <FiChevronLeft size={20} className="text-zinc-400" />
            <FiChevronRight
              size={20}
              className="hover:text-red-500 cursor-pointer"
            />
          </div>

          <nav className="flex flex-col gap-5 mt-8 text-white">
            <NavItem label="Música" Icon={ImMusic} isActive />
            <NavItem label="Podcasts" Icon={FaMicrophoneAlt} />
            <NavItem label="Rádios" Icon={BiRadio} />
            <NavItem label="Explorar" Icon={IoGridOutline} />
            <NavItem label="Favoritos" Icon={IoHeartOutline} />
            <div>
              <NavSubItem label="Mais queridas" />
              <NavSubItem label="Downloads" />
              <NavSubItem label="Playlists" />
              <NavSubItem label="Álbuns" />
              <NavSubItem label="Artistas" />
              <NavSubItem label="Podcasts" />
            </div>
          </nav>
        </aside>

        <div className="flex-1">
          <div className="border-b border-b-zinc-700 pl-5 py-3 pr-7 flex justify-between">
            <div className="flex gap-3 items-center w-full group">
              <IoSearch size={18} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full bg-transparent h-full outline-none text-lg text-zinc-300"
              />
              <div className="bg-zinc-600 rounded-full text-2xl text-zinc-200 hover:bg-zinc-500 cursor-pointer invisible group-hover:visible group-focus-within:visible">
                <IoCloseOutline />
              </div>
            </div>

            <div className="flex gap-3 items-center w-full justify-end">
              <div className="flex items-center text-zinc-200 text-xl rounded-full p-2 cursor-pointer hover:bg-zinc-700">
                <IoNotifications />
              </div>
              <Image
                src="https://github.com/brunoinacio07.png"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>

          <section className="p-20">
            <h1 className="text-2xl text-white font-semibold">
              Flow: toque o que você sente
            </h1>
            <p className="text-sm text-zinc-400">
              Um mix infinito e personalizado das músicas que você ama e também
              de novas descobertas.
            </p>

            <div className="flex gap-9 mt-8">
              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200">
                  <Image src={bgGradient.src} alt="bg" fill />
                  <Image
                    src={flowImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Flow
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300">
                  <Image
                    src={trainingImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Treino
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-[#d53130] to-[#f4663b]">
                  <Image
                    src={partyImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Festa
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300">
                  <Image
                    src={relaxImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Relax
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-300">
                  <Image
                    src={sadImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Na bad
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300">
                  <Image
                    src={youAndMeImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Você e Eu
              </div>

              <div className="flex flex-col items-center text-white text-sm gap-2">
                <div className="group rounded-full flex justify-center items-center h-32 w-32 relative transition-all duration-200 bg-zinc-800 hover:bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400">
                  <Image
                    src={focusImage.src}
                    alt="bg"
                    fill
                    className="absolute left-1/2 visible group-hover:invisible"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 py-2.5 invisible group-hover:visible cursor-pointer">
                    <IoCaretForwardOutline
                      size={42}
                      className="text-4xl text-black pl-1 h-9 w-12"
                    />
                  </div>
                </div>
                Foco
              </div>
            </div>

            <div className="flex items-end justify-between mt-8">
              <div>
                <h2 className="text-2xl text-white font-semibold">
                  Mixes inspirados por
                </h2>
                <p className="text-sm text-zinc-400">
                  Descubra faixas similares aos seus hits favoritos
                </p>
              </div>
              <div className="flex gap-4 text-zinc-200 p-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center cursor-not-allowed">
                  <FiChevronLeft size={20} className="text-zinc-500" />
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-zinc-800 cursor-pointer">
                  <FiChevronRight size={20} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-1 mt-6">
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
              <InspiredBy song="Grace Abounds" singer="Elijah Stone" />
            </div>
          </section>
        </div>
      </div>

      <footer className="fixed bottom-0 h-20 w-full bg-zinc-800 border-t border-t-zinc-700 flex justify-between px-6">
        <div className="h-full flex text-white items-center gap-3">
          <div className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
            <IoPlaySkipBackSharp size={20} />
          </div>
          <div className="rounded-full h-12 w-12 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
            <IoPause size={34} />
          </div>
          <div className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
            <IoPlaySkipForwardSharp size={20} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-white text-sm">
            <div className="flex justify-between px-9">
              <div className="flex gap-3 items-center">
                <small className="px-1 bg-zinc-700 text-zinc-400 text-[10px] tracking-widest rounded">
                  FLOW
                </small>
                <p>
                  <span className="cursor-pointer hover:underline">
                    Grace Abounds
                  </span>{" "}
                  •{" "}
                  <span className="cursor-pointer hover:underline">
                    Elijah Stone
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
                  <IoAdd size={24} />
                </div>
                <div
                  className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer"
                  title="Adicionar às Mais queridas"
                >
                  <IoHeartOutline size={20} />
                </div>
                <div
                  className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer"
                  title="Esperava mais do seu Flow?"
                >
                  <ImAngry size={16} />
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center group cursor-pointer">
              <p className="text-[10px] text-zinc-400">01:30</p>
              <div className="w-[720px] h-0.5 rounded bg-zinc-400 group-hover:h-1">
                <div className="w-96 h-0.5 rounded flex items-center justify-end bg-rose-500 group-hover:h-1">
                  <div className="w-3 h-3 rounded-full bg-zinc-200 invisible group-hover:visible"></div>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400">03:04</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center text-zinc-600">
          <div className="flex items-center gap-1">
            <div className="rounded-full h-8 w-8 flex justify-center items-center">
              <IoRepeatOutline size={20} />
            </div>
            <div className="rounded-full h-8 w-8 flex justify-center items-center">
              <IoShuffle size={20} />
            </div>
            <div className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
              <IoVolumeMediumOutline size={20} color="white" />
            </div>
            <div className="rounded-full h-8 w-8 flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
              <IoOptionsOutline size={20} color="white" />
            </div>
          </div>
          <div className="h-8 w-0.5 bg-zinc-700" />
          <div className="flex gap-2 text-xs text-white items-center hover:bg-zinc-600 rounded p-2 cursor-pointer">
            <Image
              src="https://media.discordapp.net/attachments/1084941714118152315/1098358418391187556/BrunoInacio07_capa_de_um_album_de_musica_gospel_bf935927-9733-4fe5-8af2-37a841cd983d.png?width=662&height=662"
              alt="album"
              width={30}
              height={30}
              className="rounded"
            />
            Fila de espera
          </div>
        </div>
      </footer>
    </main>
  )
}
