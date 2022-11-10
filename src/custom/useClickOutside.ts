import { useEffect } from "react";

export default function useClickOutside(ref: any, cb: Function) {
    
    useEffect(() => {
        
        const handler = (e:Event)=>{
            if(ref.current && !ref.current.contains(e.target)){
                cb();    
            }  
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
                
        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [ref,cb]);

}
