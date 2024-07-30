import { Component, createContext, JSXElement, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

interface WindowsContextProps{
    store: IStore,
    setStore: SetStoreFunction<IStore>
}

interface IStore{
    windowApp: string
}

const WindowsContext = createContext<WindowsContextProps>();

export function WindowsContextProvider(props){
    const [store, setStore] = createStore({windowApp: ""});

    return (<WindowsContext.Provider value={{store: store, setStore: setStore}}>
        {props.children}
    </WindowsContext.Provider>)
}

export function useWindowsContext(){
    return useContext(WindowsContext)!;
}