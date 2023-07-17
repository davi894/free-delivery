import Image from "next/image"
import Header from "@/components/Header/Header";
import Button from "./components/Button/Button";

export default async function Home() {

    return (
        <main className="h-full flex">
            <Header />

            <article className="m-0 flex justify-start bg-slate-100 w-32 h-full " >

                <section className="ml-1.5 items-start flex flex-col mt-20 space-y-3" >

                    <Button >

                        <strong>

                            USER

                        </strong>

                    </Button>

                    <Button >

                        <strong>

                            ORDERS

                        </strong>

                    </Button>

                    <Button >

                        <strong>

                            ADDRESS

                        </strong>

                    </Button>

                </section>

            </article>

            <ul className="mt-20 ml-20 flex flex-wrap w-full">

                <li className="relative flex flex-col bg-slate-950 h-52 w-64 p-2 rounded-md">
                    <div>
                        <h2 className="font-black text-white text-xl">Address</h2>
                        <hr/>
                        <span className="text-white"> <strong>street:</strong>Avenida Doutor Antônio Gomes de Barro </span>
                        <hr/>
                        <span className="text-white"><strong>neighborhood:</strong> Ponta Verde </span>
                        <hr/>
                        <span className="text-white"><strong>number:</strong> 180 </span>
                        <hr/>
                        <span className="text-white"><strong>city:</strong> MAceió  </span>
                        <hr/>
                        <span className="text-white"><strong>state:</strong>AL - Alagoas </span>
                        <hr/>
                        <span className="text-white"><strong>postalCode:</strong> 12321-890 </span>
                        <hr/>
                        <span className="text-white"><strong>country:</strong> Br - Brasil </span>
                        
                    </div>
                    
                    <div className="absolute w-full h-full top-0 left-60 rounded-md">

                        <Image quality={90} fill={true} className="m-0 rounded-br-md rounded-tr-md" src="http://tiny.cc/vy09vz" alt="image do Google maps" />

                    </div>

                </li>

            </ul>

        </main>
    );
};