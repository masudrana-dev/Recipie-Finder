import { Link } from "react-router-dom"
import { Home, Heart } from "lucide-react"

const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    )
}

export default Sidebar

const DesktopSidebar = () => {
    return (
        <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className="w-full">
                    <img src="/logo.svg" alt="" className="hidden md:block" />
                    <img src="/mobile-logo.svg" alt="" className="block md:hidden" />
                </div>
                <ul className="flex flex-col items-center md:items-start gap-8">
                    <Link to={'/'} className="flex gap-1">
                        <Home size={'24'} />
                        <span className="font-bold hidden md:block">Home</span>
                    </Link>
                    <Link to={'/favourites'} className="flex gap-1">
                        <Heart size={'24'} />
                        <span className="font-bold hidden md:block">Heart</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

const MobileSidebar = () => {
    return (
        <div className="flex justify-center gap-10 border-t w-full p-2 fixed bg-white bottom-0 left-0 z-10 sm:hidden">
            <Link to={'/'} >
                <Home size={'24'} />
            </Link>
            <Link to={'/favourites'}>
                <Heart size={'24'} />
            </Link>
        </div>
    )
}