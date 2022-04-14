export default function MenuFixo(){
    return(
        <nav className={`fixed flex justify-between h-9 w-screen bg-transparent z-40`}>
            <div className="p-2 text-white">P & E</div>
            <div className="flex flex-wrap justify-center items-center w-10 h-9 p-2">
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
            </div>
        </nav>
    )
}