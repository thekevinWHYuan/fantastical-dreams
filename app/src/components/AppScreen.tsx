import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";
import Me from "./Me";

function AppScreen(props){

    const { store, setStore } = useWindowsContext();

    function closeWindow(){
        setStore("windowApp", "")
    }

    return(
        <Show when={store.windowApp != ""}>
            <div class="aspect-square h-[85%] absolute border-2 border-purple-500 p-2 animate-app-open origin-top-left bg-gray-100 inset-0 m-auto">
                <nav class="w-full h-[5%] flex justify-end items-center bg-gradient-to-r from-gray-300 via-gray-300 to-gray-100">
                    <button class="aspect-square hover:cursor-cute-pointer h-2/3 shadow-lgz border-2 text-2xl border-t-white border-l-white border-b-gray-300 border-r-gray-300 m-px flex items-center justify-center" onClick={closeWindow}>X</button>
                </nav>  
                <section class="border-gray-200 border-r-gray-50 border-b-gray-50 border-4 border-solid w-full h-[93%] mt-2">
                    <Me/>
                </section>
            </div>
        </Show>

)
}

export default AppScreen