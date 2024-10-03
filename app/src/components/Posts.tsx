import { JSX } from "solid-js";

interface IPost{
    content: JSX.Element;
    title: string;
}

export default function Post(props: IPost){
    return (<section class="w-full h-1/2 p-2 flex flex-row mt-5 mb-5 border-r-gray-50 border-b-gray-50 border-[3px] border-palette-pink bg-gray-200 bg-opacity-10 shadow-sm">
        <img src="/images/commenter.png" class="aspect-square h-1/5"/>    
        <article class="h-full ml-2 w-full text-[1.5vh]">
            <div class="h-[10%] bg-gradient-to-r from-palette-blue to-palette-pink text-palette-purple">
                {props.title}
            </div>
            {props.content}
        </article>  
    </section>);
}                   