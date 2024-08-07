interface IPost{
    content: string;
}

export default function Post(props: IPost){
    return (<section class="w-full h-1/3 p-2 flex flex-row mt-5 mb-5">
        <img src="#" class="aspect-square h-1/4"/>
        <article class="h-full flex-grow flex border-2 flex-col">
            <span class="w-full h-3/4 text-[1.6vh]">{props.content}</span>
            <div class="w-full h-1/3 p-1">
                <div class="border-2 w-3/4 h-full">
                    <span class="text-[1.6vh] w-fit h-fit">Comment...</span>
                </div>
            </div>
        </article>
    </section>);
}   