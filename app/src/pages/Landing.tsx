import { Component } from "solid-js";
import WindowsScreen from "../components/WindowsScreen";

const Landing: Component = () => {
    
    return (<div class="w-screen h-screen overflow-x-hidden">
        <div class="w-inherit h-screen flex justify-center items-center">
            <WindowsScreen></WindowsScreen>
        </div>
    </div>);

}

export default Landing;