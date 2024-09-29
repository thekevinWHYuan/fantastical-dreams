interface IProjectTabs{
    name: string
    img: string
}

export default function ProjectSection(props){
    return (<div class="h-full w-full overflow-auto">
        <ProjectTab name="This Website! Fantastical Dreams" img=""/>
        <ProjectTab name="Rizzlet" img=""/>
        <ProjectTab name="Mealathon" img=""/>
    </div>);
}

function ProjectTab(props: IProjectTabs){
    return (
        <div class="h-full w-full border-2 border-palette-pink mb-2">
            <h1 class="w-full text-[1.8vh] border-b-2 border-b-palette-pink pl-2 pr-2 bg-gradient-to-r from-palette-blue to-palette-pink text-palette-purple flex justify-between">
                {props.name} 
            </h1>
            <img src={`${props.img}`}/>
        </div>
        )
}
