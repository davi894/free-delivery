
import Header from "@/components/Header/Header";
import Button from "./components/Button/Button";

export default async function Home() {

    return (
        <main className="h-full flex">
            <Header />

            <article className=" m-0 flex justify-start bg-slate-100 w-32 h-full " >

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

                <li className="flex flex-col bg-slate-950 h-48 w-48 p-2 rounded-t-md">
                    <h2 className="font-black text-white text-xl">Address</h2>
                    <span className="text-white">street: </span>
                    <span className="text-white"> number: </span>
                    <span className="text-white">city:  </span>
                    <span className="text-white">state: </span>
                    <span className="text-white">postalCode:  </span>
                    <span className="text-white">country:  </span>
                    <img src="" alt="" />
                </li>

            </ul>

        </main>
    );
};