interface IProjectTabs{
    name: string
    img: string
    content: string
}

export default function ProjectSection(props){
    return (<div class="h-full w-full overflow-auto">
        <ProjectTab name="This Website! Fantastical Dreams" img="" content="There's just something so charming and dreamy about the Y2K era. Whether or not it's only natural that I've become entranced by a bygone era as I slowly embraced the arms of nostalgia or whatnot, this website is dedicated to showing off the projects and passions I have since I took my first steps in university. Built using SolidJS and Tailwind, and inspired by the aesthetics of the Y2K era and Needy Streamy Overload, this website is a constantly evolving project as I continue to make improvements and the likes."/>
        <ProjectTab name="Rizzlet" img="" content=""/>
        <ProjectTab name="Mealathon" img="" content=""/>
    </div>);
}

function ProjectTab(props: IProjectTabs){   
    return (
        <div class="h-full w-full border-2 border-palette-pink mb-2">
            <h1 class="w-full h-[5%] text-[1.8vh] border-b-2 border-b-palette-pink pl-2 pr-2 bg-gradient-to-r from-palette-blue to-palette-pink text-palette-purple flex justify-between">
                {props.name} 
            </h1>
            <main class="pl-2 pr-2 w-full pt-2">
                {props.content}
            </main> 

        </div>
        )
}
