import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";
import Post from "./Posts";
import ProjectSection from "./Projects";

interface IAboutMe{
    title: string
    banner: string
    mode: string
}

export default function Me(props: IAboutMe){

    const { store, setStore } = useWindowsContext();

    // Keep track of stack
    function anotherPage(name: string){
        if (store.currentPage != (store.searchHistory.length - 1)){
            for (let i = 0; i < (store.searchHistory.length - store.currentPage - 1); i++){
                // pop stack   
            }
        }
        setStore("searchHistory", (searches) => [...searches, name]);
        setStore("currentPage", store.searchHistory.length - 1);
        setStore("windowApp", name);
    }

    return (<div class="grid grid-rows-10 grid-cols-10 h-full w-full p-2">
        <header class={`col-span-10 row-span-2 flex ${props.banner} items-center justify-center border-2 border-palette-purple bg-cover`}>
            <h1 class="text-[8vh] text-palette-purple">{props.title}</h1>
        </header>
        <aside class="col-span-2 row-span-8 flex flex-col pt-2">
            <img src="src/public/images/placeholder.jpg" class="aspect-square pb-1" alt="Hey look it's supposed to be me"/>
            <nav class="flex-grow flex flex-col">
                <h2 class="text-palette-purple w-full h-1/6 flex items-center justify-center border-2 border-palette-purple text-[1.5vh]">
                    Related Items
                </h2>
                <ul class="flex-grow flex flex-col justify-around items-center">
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50"><a onClick={() =>anotherPage("About Me")} class={`hover:cursor-cute-pointer ${store.windowApp == "About Me" ? "text-palette-purple" : ""} text-[1.5vh]`}>About Me</a></li>
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50"><a onClick={() =>anotherPage("Resume")} class={`hover:cursor-cute-pointer ${store.windowApp == "Resume" ? "text-palette-purple" : ""} text-[1.5vh]`}>Resume</a></li>
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50"><a onClick={() =>anotherPage("Projects")} class={`hover:cursor-cute-pointer ${store.windowApp == "Projects" ? "text-palette-purple" : ""} text-[1.5vh]`}>Projects</a></li>
                    <li class="border-2 w-full h-[15%] flex justify-center items-center border-palette-purple border-t-gray-50 border-l-gray-50"><a onClick={() =>anotherPage("Endorsements")} class={`hover:cursor-cute-pointer ${store.windowApp == "Endorsements" ? "text-palette-purple" : ""} text-[1.5vh]`}>Endorsements</a></li>
                </ul>
            </nav>
        </aside>
        <section class="col-span-8 row-span-8 flex flex-col pl-2 pt-2">
            <Show when={props.mode == "About Me"}>
                <Post content="Kevin's a 3rd Year at Cal Poly studying Software Engineering and minoring in the Computing for the Interactive Arts program"/>
                <Post content="Be sure to check out his other shenanigans and projects! Interests Include: OS, VR Development including 3D Modeling, Web Development"/>
                <Post content="Look at what others have to say about him! He's sure to provide a valuable asset to your team!"/>
            </Show>
            <Show when={props.mode == "Projects"}>
                <ProjectSection/>
            </Show>
            <Show when={props.mode == "Resume"}>
                <object data="src/assets/My_Resume.pdf" class="w-full h-full">
                    <p>It appears that the resume didn't load correctly D:</p>
                </object>
            </Show>
        </section>

    </div>);
}