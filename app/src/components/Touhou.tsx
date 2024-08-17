import { createSignal, Show } from "solid-js";

export default function Touhou(){

    const [counter, setCounter] = createSignal(0);
    const [showSongList, setShowSongList] = createSignal(false);

    let modal: HTMLDialogElement;
    const loadAmount: number = 10;

    function loadingBar(amount: number){
        let loadingArray: number[] = new Array(amount).fill(0);
        return loadingArray.map(() => {return <div class="w-[10%] h-full bg-red-100 mr-1"></div>})
    }

    function loading(){
        let interval = setInterval(() => {
            setCounter(counter() + 1);
            if (counter() > loadAmount){
                modal.close();
                setShowSongList(!showSongList());
                clearInterval(interval);
            }
            else if (counter() > 0){
                modal.show();
            }
        }, 250)
        return interval;
    }
    
    return (<div class="w-full h-full flex">
        <Show when={showSongList()}>
            <SongList/>
        </Show>
        <Show when={!showSongList()}>
            <dialog class="items-center justify-center self-center bg-pink-100 w-3/4 h-1/4" ref={modal}>
                    <div class="flex w-full h-full items-center justify-center">
                        <div class="h-1/6 w-3/4 border-2 flex flex-row">
                            {loadingBar(counter())}
                        </div>
                    </div>

            </dialog>


            <header class="h-full w-1/6 flex items-center justify-center">
                <h1 class="[writing-mode:vertical-rl] [text-orientation:upright] text-3xl">
                    The Touhou Project
                </h1>
            </header>
            <main class="h-full w-5/6 p-2 flex flex-col">
                <article class="flex flex-col">
                    <h1 class="text-2xl self-center mt-2 mb-2">
                        <u>Short Intro to the Touhou Project</u>
                    </h1>
                    <p>
                        Touhou is a series of bullet hell games created by a sole developer named ZUN with the first game being released on the PC-98 in 1997. ZUN's lax policies on copyright has resulted in a plethora of community driven content all of which are
                        filled with love and passion. You may have seen a video called <a href="https://youtu.be/FtutLA63Cp8" target="_blank" class="">Bad Apple</a> with alternating black and white silhouettes of different characters. As you may have probably guessed, all of its from Touhou and the song itself is a remix
                        of a song created by ZUN. That's right! He also composes music both in and out of his games which is what I want to focus on.
                    </p>
                </article>

                <article class="flex flex-col mt-2 mb-2">
                    <h1 class="text-2xl self-center">
                        <u>Touhou Music</u>
                    </h1>
                    <p>
                        As previously mentioned, music he's composed can be both found in and outside the games. Oftentimes, the title of these songs have titles referencing a certain character or stage which might I add, is wonderfully chosen. The word choice
                        imbues an extra layer of emotions conjured up when listening and really helps you visualize the picture that's being painted. Outside of the games, which might or might not be connected to the Touhou universe as a whole, ZUN composes
                        entirely different albums that focuses on an entirely different persective peering into Gensokyo (the place Touhou takes place in). I just want to take this time to show my appreciation for ZUN's work especially his music by listing out 
                        my personal top 3 favorites.
                    </p>
                </article>

                <button onClick={loading} class="hover:cursor-cute-pointer">
                    <span>Take me to Pseudo Paradise</span>
                </button>

            </main>
        </Show>

    </div>);
}

function SongList(){
    return (<div class="h-full w-full">
        <h1 class="h-1/5 w-full">
            <span>Hi</span>
        </h1>
        <li class="h-4/5 w-full list-none flex flex-col items-center justify-center">
        </li>
    </div>)
}

function Songs(){
    return (<ul class="aspect-[4/1] h-1/3">
        
    </ul>)
}