import { Component, Show } from "solid-js";
import WindowsScreen from "../components/WindowsScreen";
import { useWindowsContext } from "../context/WindowsContext";

const Landing: Component = () => {

    const { store } = useWindowsContext();
    
    return (<div class="w-screen h-screen">

        <Show when={store.scanline}>
            <div class="w-screen h-screen bg-mini-scanline opacity-15 absolute z-10 pointer-events-none"/>
            <div class="w-full absolute h-[10%] bg-gray-200 opacity-30 pointer-events-none animate-scanline z-20"/>
        </Show>
        <div class="w-inherit h-screen flex justify-center items-center">
            <WindowsScreen></WindowsScreen>
        </div>
    </div>);

}   

export default Landing;