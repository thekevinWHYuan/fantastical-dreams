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
            <div class="aspect-square h-[85%] absolute border-2 border-[#bd98e0] p-2 pb-4 animate-app-open origin-top-left bg-gray-100 inset-0 m-auto flex flex-col">
                <nav class="w-full h-[4%] flex justify-end items-center bg-gradient-to-r from-gray-300 via-gray-300 to-gray-100">
                    <button class="aspect-square hover:cursor-cute-pointer h-2/3 shadow-lgz border-2 text-2xl border-t-white border-l-white border-b-gray-300 border-r-gray-300 m-px flex items-center justify-center" onClick={closeWindow}>X</button>
                </nav>
                <div class="h-[7%] flex w-full border-t-2 border-b-2 border-t-gray-300 items-center">
                    <img src="src/public/images/left_web_button.png" class="h-1/2 m-1"/>
                    <img src="src/public/images/right_web_button.png" class="h-1/2 m-1"/>
                    <div class="flex-grow h-1/2 bg-white border-2 border-b-gray-50 border-t-gray-300 border-l-gray-300 border-r-gray-50">
                        <span>{`https://${store.windowApp.replace(" ", "")}.com`}</span>
                    </div>
                </div>
                <section class="border-gray-200 border-r-gray-50 border-b-gray-50 border-4 border-solid w-full flex-grow">
                    <Show when={store.windowApp == "About Me"}>
                        <Me/>
                    </Show>
                    <Show when={store.windowApp == "Resume"}>
                        <iframe src="#" class="h-full w-full"></iframe>
                    </Show>
                </section>
            </div>
        </Show>

)
}

export default AppScreen