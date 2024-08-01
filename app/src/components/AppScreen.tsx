import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";

function    AppScreen(props){

    const { store, setStore } = useWindowsContext();

    function closeWindow(){
        setStore("windowApp", "")
    }

    return(
        <Show when={store.windowApp != ""}>
            <div class="aspect-square absolute h-full border-2 border-purple-500 p-2 animate-app-open origin-top-left bg-gray-100">
                <nav class="w-full h-[5%] border-2 border-purple-500 flex justify-end items-center bg-gradient-to-r from-gray-300 via-gray-300 to-gray-100">
                    <button class="aspect-square hover:cursor-cute-pointer h-2/3 shadow-lgz border-2 text-2xl border-t-white border-l-white border-b-gray-300 border-r-gray-300 m-px" onClick={closeWindow}>X</button>
                </nav>  
                <section class="border-purple-500 border-2 border-solid w-full h-[93%] mt-2">
                    
                </section>
            </div>
        </Show>

)
}

export default AppScreen