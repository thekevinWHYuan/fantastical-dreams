import { createContext, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

interface WindowsContextProps{
    store: IStore,
    setStore: SetStoreFunction<IStore>
}

interface IStore{
    windowApp: string
    flicker: boolean
    scanline: boolean
    taskbar: string[]
    searchHistory: string[]
    currentPage: number
}

const WindowsContext = createContext<WindowsContextProps>();

export function WindowsContextProvider(props){  
    const [store, setStore] = createStore({windowApp: "About Me", flicker: false, scanline: true, taskbar: ["About Me"], searchHistory: ["About Me"], currentPage: 0});

    return (<WindowsContext.Provider value={{store: store, setStore: setStore}}>
        {props.children}
    </WindowsContext.Provider>)
}

export function useWindowsContext(){
    return useContext(WindowsContext)!;
}