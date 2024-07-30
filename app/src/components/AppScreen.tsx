import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";

function AppScreen(props){

    const { store, setStore } = useWindowsContext();

    function closeWindow(){
        setStore("windowApp", "")
    }

    return(
        <Show when={store.windowApp != ""}>
            <div class="aspect-[4/3] absolute w-1/3 border-2 border-purple-500 p-2 animate-app-open origin-top-left">
                <nav class="w-full h-[5%] border-2 border-purple-500 flex justify-end">
                    <button class="aspect-square hover:cursor-cute-pointer" onClick={closeWindow}>X</button>
                    <button class="aspect-square hover:cursor-cute-pointer">_</button>
                </nav>
                <section class="border-purple-500 border-2 border-solid w-full h-[90%] mt-2">
                    
                </section>
            </div>
        </Show>

)
}

export default AppScreen