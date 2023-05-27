import { TypeLayout } from '../../app/global/interfaces/globals'


function Header({ children }: TypeLayout) {
    return (
        <header className="fixed top-0 w-full p-3 bg-emerald-500 border-emerald-950 border-b-4">
            <h1 className="font-bold text-3xl">FREE-DELIVERY</h1>
            {children}
        </header>
    )
}

export default Header