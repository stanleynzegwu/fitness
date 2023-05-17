import { MouseEvent } from 'react';

const toggleFullScreen = (event: MouseEvent<HTMLElement | SVGElement>) => {
    const element = event.target as HTMLElement;
        if(!document.fullscreenElement){
            element.requestFullscreen()
        }
        else{
            document.exitFullscreen()
        }
    }

const numberAndSuffix = (str:string) => {
    let num = Number(str.slice(0,-1))
    let s = str[str.length - 1]
    return [num,s]
}

export { toggleFullScreen, numberAndSuffix }
