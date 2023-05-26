import { SvgEmail, SvgPasswordAsterisk } from "@/components/svg/svg"


export default function Home() {
  return (
    <main className="h-full" >
      <header className="fixed top-0 w-full p-3 bg-emerald-500 border-emerald-950 border-b-4">
        <h1 className="font-bold text-3xl">FREE-DELIVERY</h1>
      </header>
      <section className="h-full flex justify-center items-center">
        <form className="bg-slate-100 p-3 shadow shadow-2xl space-y-4 h-auto">
          <div className="border  h-full w-full relative" >
            <span className="absolute left-2 -top-2">
              EMAIL <SvgEmail />
            </span>
            <input type="email" className="h-full w-full p-2 bg-transparent" />

          </div>

          <div className="border  h-full w-full relative" >
            <span className="absolute left-2 -top-2">
              PASSWORD <SvgPasswordAsterisk />
            </span>
            <input type="password" className="h-full w-full p-2 bg-transparent" />
          </div>

          <button>LOGIN</button>
        </form>
      </section>
    </main >
  )
}
