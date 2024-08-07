import { useWindowsContext } from "../context/WindowsContext";
import Post from "./Posts";

export default function Me(){

    const { setStore } = useWindowsContext();

    return (<div class="grid grid-rows-10 grid-cols-10 h-full w-full p-2">
        <header class="col-span-10 row-span-2 flex bg-[url('src/public/images/mebanner.png')] items-center justify-center border-2 border-black bg-cover">
            <h1 class="text-[8vh]">About Me</h1>
        </header>
        <aside class="col-span-2 row-span-8 flex flex-col pt-2">
            <img src="src/public/images/resume_app.png" class="aspect-square"/>
            <nav class="flex-grow flex flex-col">
                <h2 class="bg-red-100 w-full h-1/6 flex items-center justify-center border-2 border-black">
                    Related Items
                </h2>
                <ul class="flex-grow flex flex-col justify-around items-center">
                    <li><a onClick={() =>setStore("windowApp", "About Me")}>About Me</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Resume")}>Resume</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Projects")}>Projects</a></li>
                    <li><a onClick={() =>setStore("windowApp", "Endorsements")}>Endorsements</a></li>
                </ul>
            </nav>
        </aside>
        <section class="col-span-8 row-span-8 flex flex-col pl-2 pt-2">
            <Post content="Kevin's a 3rd Year at Cal Poly studying Software Engineering and minoring in the Computing for the Interactive Arts program"/>
            <Post content="Be sure to check out his other shenanigans and projects! Interests Include: OS, VR Development including 3D Modeling, Web Development"/>
            <Post content="Look at what others have to say about him! He's sure to provide a valuable asset to your team!"/>

        </section>

    </div>);
}