import { Heart, HeartPulse, Soup } from 'lucide-react'

const RecipieCard = () => {
    return (
        <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
            <a href="#" className=" relative h-32">
                <img src="/public/1.jpg" alt="" className="rounded-md w-full h-full object-cover cursor-pointer" />

                <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center p-1 cursor-pointer text-sm gap-1">
                    <Soup size={'24'} /> 4 Serving
                </div>

                <div className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer">
                    <Heart size={'24'} className="hover:fill-red-600 hover:text-red-500" />
                </div>
            </a>

            <div className=" flex mt-1">
                <p className="font-bold tracking-wide">Roasted Chikcen</p>
            </div>
            <p className="my-2">Turkish Kitchen</p>
            <div className="flex gap-2 mt-auto">
                <div className=" flex  bg-[#d6f497] gap-1 items-center p-1 rounded-md">
                    <HeartPulse size={'16'} />
                    <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
                </div>
                <div className=" flex  bg-[#d6f497] gap-1 items-center p-1 rounded-md">
                    <HeartPulse size={'16'} />
                    <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
                </div>
            </div>
        </div>
    )
}

export default RecipieCard