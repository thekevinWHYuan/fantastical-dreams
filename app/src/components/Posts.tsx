interface IPost{
    content: string;
}

export default function Post(props: IPost){
    return (<section class="w-full h-1/3 p-2 flex flex-row mt-5 mb-5 border-2 border-palette-pink bg-gray-200 bg-opacity-10">
        <img src="src/public/images/commenter.png" class="aspect-square h-1/3"/>    
        <article class="h-full flex-grow flex flex-col ml-2">
            <span class="w-full h-3/4 text-[1.6vh]">{props.content}</span> 
            <div class="w-full h-1/3 p-1">
                <div class="border-2 w-5/6 h-full border-palette-pink"> 
                    <span class="text-[1.6vh] w-fit h-fit">Comment...</span>
                </div> 
            </div>   
        </article>  
    </section>);
}                   