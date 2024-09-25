interface IPost{
    content: string;
}

export default function Post(props: IPost){
    return (<section class="w-full h-1/3 p-2 flex flex-row mt-5 mb-5 border-r-gray-50 border-b-gray-50 border-[3px] border-palette-pink bg-gray-200 bg-opacity-10 shadow-sm">
        <img src="src/public/images/commenter.png" class="aspect-square h-1/3"/>    
        <article class="h-full flex flex-col ml-2 w-full">
            <span class="h-3/4 text-[1.6vh]">{props.content}</span> 
            <div class="w-full h-1/4 p-1">
            </div>   
        </article>  
    </section>);
}                   