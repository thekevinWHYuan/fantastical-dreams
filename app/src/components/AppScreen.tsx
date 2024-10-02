import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";
import Me from "./Me";
import Touhou from "./Touhou";

function AppScreen(props){

    const { store, setStore } = useWindowsContext();

    function closeWindow(){
        setStore("taskbar", (apps) => apps.filter((app) => {
            app != store.windowApp
        }))
        setStore("searchHistory", []);
        setStore("currentPage", 0);
        setStore("windowApp", "")
    }

    function traverseHistory(direction: number){
        setStore("currentPage", store.currentPage + direction);
        setStore("windowApp", store.searchHistory[store.currentPage]);
    }


    // Remember to disable clicking here
    return(     
        <Show when={store.windowApp != ""}>
            <div class="aspect-square h-[85%] min-h-[85svh] absolute border-2 border-palette-light-purple p-2 pb-4 animate-app-open origin-top-left bg-gray-100 inset-0 m-auto flex flex-col overflow-hidden">
                <nav class="w-full h-[4%] flex justify-end items-center bg-gradient-to-r from-gray-300 via-gray-300 to-gray-100">
                    <button class="aspect-square hover:cursor-cute-pointer h-2/3 shadow-lgz border-2 text-2xl border-t-white border-l-white border-b-gray-300 border-r-gray-300 m-px flex items-center justify-center" onClick={closeWindow}>X</button>
                </nav>
                <div class="h-[7%] flex w-full border-t-2 border-b-2 border-t-gray-300 items-center">
                    <img src="src/public/images/left_web_button.png" class={`h-1/2 m-1 ${store.currentPage <= 0 ? 'grayscale pointer-events-none' : "cursor-cute-pointer"}`} onClick={() => traverseHistory(-1)}/>
                    <img src="src/public/images/right_web_button.png" class={`h-1/2 m-1 ${store.currentPage == store.searchHistory.length - 1 ? 'grayscale pointer-events-none' : "cursor-cute-pointer"}`} onClick={() => traverseHistory(1)}/>
                    <div class="flex-grow h-1/2 bg-white border-2 border-b-gray-50 border-t-gray-300 border-l-gray-300 border-r-gray-50">
                        <span class="ml-1 h-full flex items-center">{`https://${store.windowApp.replace(" ", "")}.com`}</span>
                    </div>
                </div>
                <section class="border-gray-200 border-r-gray-50 border-b-gray-50 border-4 border-solid w-full flex-grow h-[89%]">
                    <Me banner="bg-[url('src/public/images/about_me_banner.png')]" title={store.windowApp} mode={store.windowApp}/>
                </section>
            </div>
        </Show>

)
}

export default AppScreen