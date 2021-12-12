import menu from "../../../data/menu.json";

export default function Menu() {
    return(
        <nav className="w-2/12 min-h-screen text-white">
            <ul className="">
                {menu.menu.map((el) => (
                    <li className="p-3 hover:bg-blue-900 my-2">
                        <a className="uppercase w-full flex items-center text-xs font-bold" href={el.url}>
                            <i class={el.ico}></i>
                            {el.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}