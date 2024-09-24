import { useWindowsContext } from "../context/WindowsContext";

interface IWindowApp{
    source: string
    name: string
}

function WindowApp(props: IWindowApp){

    const { setStore } = useWindowsContext();

    function openWindow(){
        setStore("taskbar", (apps) => [...apps, props.name])
        setStore("searchHistory", (searches) => [...searches, props.name])
        setStore("windowApp", props.name)
    }

    return (
    <div class="aspect-square flex flex-col justify-center items-center hover:bg-gray-200 hover:bg-opacity-30" onClick={openWindow}>
        <img src={props.source}/>
        <span class="text-[100%]">{props.name}</span>
    </div>
);
}

export default WindowApp