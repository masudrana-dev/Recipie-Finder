import { Heart, HeartPulse, Search, Soup } from "lucide-react"
import RecipieCard from "../Component/RecipieCard"

const HomePage = () => {
    return (
        <div className="bg-gray-400 p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                <form action="">
                    <label className="input shadow flex items-center gap-2">
                        <Search size={'24'} />
                        <input
                            type="text"
                            className="text-sm md:text-md grow outline-none"
                            placeholder="What do you want to cook today?"
                        />
                    </label>
                </form>
                <h1 className="font-bold text-3xl md:text-5xl mt-4">Recomended Recipies</h1>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Populer Choices</p>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* 1st recipie */}
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                    <RecipieCard />
                </div>
            </div>
        </div>
    )
}

export default HomePage
