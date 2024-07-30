import { useWindowsContext } from "../context/WindowsContext";
import AppScreen from "./AppScreen"

interface IWindowApp{
    source: string
    name: string
}

function WindowApp(props: IWindowApp){

    const { setStore } = useWindowsContext();

    function openWindow(){
        setStore("windowApp", props.name)
    }

    return (
    <div class="w-full h-full flex flex-col justify-center items-center hover:bg-gray-200 hover:bg-opacity-30" onClick={openWindow}>
        <img src={props.source}/>
        <p>{props.name}</p>
    </div>
);
}

export default WindowApp