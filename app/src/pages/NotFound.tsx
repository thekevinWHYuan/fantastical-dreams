import { createSignal } from "solid-js";

export function NotFound(){

    const [currentString, setCurrentString] = createSignal("")
    const errorMessage: string = "An error has occurred. 404 Not Found :("
    let counter = 0;
    let playAnimation = setInterval(() => { 
        if (counter == (errorMessage.length - 1)){
            clearInterval(playAnimation);
        }
        setCurrentString(currentString() + errorMessage[counter])
        counter++;
    }, 50)

    return(<div class="w-screen h-screen bg-palette-blue flex items-center justify-center flex-col text-2xl">
        <h1>
            Windows
        </h1>
        <span>
            {currentString()}
        </span>
    </div>)
}