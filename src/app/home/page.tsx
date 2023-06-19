import Header from "@/components/Header/Header";
import Button from "./components/Button/Button";

export default function Home() {
    return (
        <main className="h-full">
            <Header />

            <article className=" m-0 flex justify-start bg-emerald-500 w-32 h-full" >

                <section className="mt-20" >

                    <Button>

                        <strong>

                            USUÁRIO

                        </strong>

                    </Button>

                    <Button>

                        <strong>

                            PEDIDOS

                        </strong>

                    </Button>

                    <Button>

                        <strong>

                            ENDEREÇOS

                        </strong>

                    </Button>

                </section>

            </article>

        </main>
    );
};