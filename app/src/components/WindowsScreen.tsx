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

    return (<div class="h-full aspect-square flex-column hover:cursor-cute-cursor" onClick={playClickAudio}>
        
        <audio src="../../media/mouse_click.mp3" ref={audioElement}></audio>

        <AppScreen name={store.windowApp}/>

        <div class="h-[94%] w-full grid grid-cols-8 grid-rows-8 bg-windows-desktop grid-flow-col p-10">
            <WindowApp source="src/public/images/resume_app.png" name="Resume"/>
            <WindowApp source="" name="About Me"></WindowApp>
        </div>

        <nav class="w-full h-[6%] flex flex-row items-center pl-2 pr-2 bg-[#f6e0f7]">    
            <button class="w-[15%] shadow-md h-3/5 hover:cursor-cute-pointer flex shadow-purple-100 border-solid border-purple-400 border-[3px] border-t-pink-100 border-l-pink-100 text-2xl">
                <img src="src/public/images/custom_windows_logo.png" class="h-full object-contain aspect-square"/>
                <p class="object-fill w-full h-full flex items-center justify-center">Start</p>
            </button>
            <TaskbarDivider/>
            <TaskbarDivider/>
            <DayStats/>
        </nav>
    </div>);
}   

export default WindowsScreen