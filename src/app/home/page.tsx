import Header from "@/components/Header/Header";
import Button from "./components/Button/Button";

export default function Home() {
    return (
        <main className="h-full">
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

        </main>
    );
};