export function DayStats(){

    const today = new Date();

    return(<section class="border-2 w-[12%] h-3/5 border-l-purple-400 border-t-purple-400 border-b-pink-100 border-r-pink-100 flex items-center justify-center">
        <span class="text-[100%]">{`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`}</span>
    </section>)
}