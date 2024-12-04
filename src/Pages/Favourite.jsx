import RecipieCard from "../Component/RecipieCard"

const Favourite = () => {
    const fav = true;
    return (
        <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <p className="font-bold txt-3xl md:text-5xl my-4">My Favourites</p>
                {!fav && (
                    <div className=" h-[80vh] flex flex-col items-center gap-0">
                        <img src="/404.svg" className="h-3/4" alt="404svg" />
                    </div>
                )}
                {
                    fav && (
                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <RecipieCard />
                            <RecipieCard />
                            <RecipieCard />
                            <RecipieCard />
                            <RecipieCard />
                            <RecipieCard />
                            <RecipieCard />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Favourite
