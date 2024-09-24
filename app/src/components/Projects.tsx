interface IProjectTabs{
    name: string
    img: string
}

export default function ProjectSection(props){
    return (<div class="h-full w-full overflow-auto">
        <div class="flex flex-col h-full w-full justify-around items-center">
            <ProjectTab name="Rizzlet" img=""/>
            <ProjectTab name="Mealathon" img=""/>
            <ProjectTab name="And Of Course This Website! Fantastical Dreams" img=""/>

        </div>
        <div class="h-full w-full">
            <h1 class="text-2xl">
                Experience
            </h1>
        </div>
    </div>);
}

function ProjectTab(props: IProjectTabs){
    return (
        <div class="h-1/4 w-full border-2 border-palette-pink">
            <h1 class="w-full text-2xl border-b-2 border-b-palette-pink pl-2 pr-2 bg-gradient-to-r from-palette-blue to-palette-pink text-palette-purple flex justify-between">
                {props.name}
                <div class="aspect-square">
                    X
                </div>
            </h1>
            <img src={`${props.img}`}/>
        </div>
        )
}
