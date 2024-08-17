import { Show } from "solid-js";
import { useWindowsContext } from "../context/WindowsContext";
import Post from "./Posts";

interface IAboutMe{
    title: string
    banner: string
    mode: string
}

export default function Me(props: IAboutMe){

    const { store, setStore } = useWindowsContext();

    return (<div class="grid grid-rows-10 grid-cols-10 h-full w-full p-2">
        <header class={`col-span-10 row-span-2 flex ${props.banner} items-center justify-center border-2 border-palette-purple bg-cover`}>
            <h1 class="text-[8vh] text-palette-purple">{props.title}</h1>
        </header>
        <aside class="col-span-2 row-span-8 flex flex-col pt-2">
            <img src="src/public/images/temppfp.jpg" class="aspect-square"/>
            <nav class="flex-grow flex flex-col">
                <h2 class="text-palette-purple w-full h-1/6 flex items-center justify-center border-2 border-palette-purple">
                    Related Items
                </h2>
                <ul class="flex-grow flex flex-col justify-around items-center">
                    <li><a onClick={() =>setStore("windowApp", "About Me")} class={`hover:cursor-cute-pointer ${store.windowApp == "About Me" ? "text-palette-purple" : ""}`}>About Me</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Resume")} class={`hover:cursor-cute-pointer ${store.windowApp == "Resume" ? "text-palette-purple" : ""}`}>Resume</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Projects")} class={`hover:cursor-cute-pointer ${store.windowApp == "Projects" ? "text-palette-purple" : ""}`}>Projects</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Endorsements")} class={`hover:cursor-cute-pointer ${store.windowApp == "Endorsements" ? "text-palette-purple" : ""}`}>Endorsements</a></li>
                </ul>
            </nav>
        </aside>
        <section class="col-span-8 row-span-8 flex flex-col pl-2 pt-2">
            <Show when={props.mode == "About Me"}>
                <Post content="Kevin's a 3rd Year at Cal Poly studying Software Engineering and minoring in the Computing for the Interactive Arts program"/>
                <Post content="Be sure to check out his other shenanigans and projects! Interests Include: OS, VR Development including 3D Modeling, Web Development"/>
                <Post content="Look at what others have to say about him! He's sure to provide a valuable asset to your team!"/>
            </Show>
        </section>

    </div>);
}