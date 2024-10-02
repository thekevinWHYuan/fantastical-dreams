import { JSX } from "solid-js";

interface IProjectTabs{
    name: string
    img: string
    img2: string;
    repo: string
    deployed: JSX.Element
    content: JSX.Element
}

export default function ProjectSection(props){
    return (<div class="h-full w-full overflow-scroll">
        <ProjectTab name="This Website! Fantastical Dreams" img="/src/public/images/website_picture.png" img2="" repo="https://github.com/thekevinWHYuan/fantastical-dreams" deployed={<a class="border-2 text-[1.5vh] border-l-gray-50 border-t-gray-50 border-b-palette-purple border-r-palette-purple p-2 m-2" href="" target="_blank">You're Here Already</a>} content={<p class="text-center">There's just something so charming and dreamy about the <a class="text-palette-purple" href="https://en.wikipedia.org/wiki/Y2K_aesthetic" target="_blank"><u>Y2K</u></a> (Year 2000) era. Whether or not it's only natural that I've become entranced by a bygone era as I slowly embraced the arms of nostalgia or whatnot, this website is dedicated to showing off the projects and passions I have since I took my first steps in university. Built using SolidJS and Tailwind, and inspired by the aesthetics of the Y2K era and Needy Streamy Overload, this website is a constantly evolving project as I continue to make improvements and the likes.</p>}/>
        <ProjectTab name="Rizzlet" img="/src/public/images/Rizzlet_Gameplay.png" repo="https://github.com/Rizzlet/rizzlet" img2="" deployed={<a class="border-2 text-[1.5vh] border-l-gray-50 border-t-gray-50 border-b-palette-purple border-r-palette-purple p-2 m-2" href="https://icy-rock-018e11d1e.5.azurestaticapps.net/" target="_blank">Website</a>} content={<p class="text-center">I always like to banter, and I'm sure some of us can relate to this, about just how bad our attention span has become which can affect our study habits. As a result, with the help of 4 lovely developers I've gotten the pleasure to work with, we developed Rizzlet (yes even the name has brainrot). This web app, built using React, Tailwind, Express, and MongoDB, isn't your typical study app. Utilizing a simple, but yet effective combat system, you compete with other students as you try to fight to stay alive whilst also trying to eliminate others by answering a successive amount of flashcards. This web app is no longer in the works.</p>}/>
        <ProjectTab name="Mealathon" img="/src/public/images/mealathon_picture.jpeg" repo="https://github.com/Brian-Kwong/SLO_Hacks24" img2="src/public/images/the_fried_rice.jpg" deployed={<></>} content={<p class="text-center">It's definitely stressful knowing that you can't have certain foods and it's even more stressful and frustrating not knowing what ingredients are in each dish. A prototype that uses Gemini's API as well as data from the FDA's nutrition database, this app aims to identify ingredients and its corresponding nutritional value in homemade and restaurant quality dishes. Built with 3 other developers for SLOHacks 2024 using React Native and Express.</p>}/>
    </div>);
}

function ProjectTab(props: IProjectTabs){   
    return (
        <div class="h-full w-full border-2 border-palette-pink mb-2 overflow-auto">
            <h1 class="w-full h-[5%] text-[1.8vh] border-b-2 border-b-palette-pink pl-2 pr-2 bg-gradient-to-r from-palette-blue to-palette-pink text-palette-purple flex justify-between">
                {props.name} 
            </h1>
            <main class="pl-2 pt-2 pr-2 text-[1.5vh] h-[45%] w-full flex items-center justify-center">
                {props.content}
            </main>
            <section class="w-full flex justify-center h-[40%] p-2">
                <img src={props.img} class="h-full"></img>
                <img src={props.img2} class="h-full"></img>
            </section>
            <section class="w-full h-[10%] flex justify-end items-center p-2">
                {props.deployed}
                <a class="border-2 text-[1.5vh] border-l-gray-50 border-t-gray-50 border-b-palette-purple border-r-palette-purple p-2 m-2" href={props.repo} target="_blank">Github Repo</a>
            </section>
        </div>
        )
}
