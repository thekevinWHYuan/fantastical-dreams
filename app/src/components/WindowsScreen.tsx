import { Component } from "solid-js";
import WindowApp from "./WindowApps";
import TaskbarDivider from "./TaskbarDivider";
import { DayStats } from "./DayStats";
import { useWindowsContext } from "../context/WindowsContext";
import AppScreen from "./AppScreen";

const WindowsScreen: Component = () => {

    
    let audioElement: HTMLAudioElement;

    const { store } = useWindowsContext();
    

    function playClickAudio(){
        audioElement.play();
    }

    function mapTaskBar(items: string[]){
        return items.map((names) => {
            return (<div class="flex w-1/6 border-[3px] border-b-palette-light-purple border-r-palette-light-purple border-t-pink-100 border-l-pink-100 items-center h-4/5 justify-center">{names}</div>)
        })
    }

    return (<div class={`min-h-[100svh] aspect-square hover:cursor-cute-cursor ${store.flicker ? "animate-flicker" : ""}`} onClick={playClickAudio}>
        
        <audio src="../../media/mouse_click.mp3" ref={audioElement}/>

        <AppScreen name={store.windowApp}/>

        <div class="h-[94%] w-full grid grid-cols-8 grid-rows-8 bg-windows-desktop grid-flow-col p-10">
            <WindowApp source="src/public/images/resume_app.png" name="Resume"/>
            <WindowApp source="src/public/images/about_me_logo.png" name="About Me"></WindowApp>
            <WindowApp source="" name="2hu"></WindowApp>
        </div>

        <nav class="w-full h-[6%] flex flex-row items-center pl-2 pr-2 bg-[#f6e0f7]">    
            <button class="w-[15%] shadow-md h-4/5 hover:cursor-cute-pointer flex shadow-purple-100 border-solid border-purple-400 border-[3px] border-t-pink-100 border-l-pink-100 text-2xl">
                <img src="src/public/images/custom_windows_logo.png" class="h-full object-contain aspect-square"/>
                <span class="object-fill w-full h-full flex items-center justify-center">Start</span>
            </button>
            <TaskbarDivider/>
            <a target="_blank" href="https://github.com/thekevinWHYuan" class="aspect-square h-[32px] ml-2 mr-2 hover:cursor-cute-pointer">
                <img src="/src/public/images/github_logo.png" alt="My Github"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/thekevinwhyuan" class="aspect-square h-[32px] ml-2 mr-2 hover:cursor-cute-pointer">
                <img src="/src/public/images/instagram_logo.png" alt="My Instagram"/>
            </a>
            <TaskbarDivider/>
            <div class="flex flex-grow h-full items-center pl-2">
                {mapTaskBar(store.taskbar)}
            </div>
            <div class="flex justify-end items-center h-full w-1/6">
                <DayStats/>
            </div>
        </nav>
    </div>);
}   

export default WindowsScreen