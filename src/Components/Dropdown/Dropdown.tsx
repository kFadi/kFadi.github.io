import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

interface DropdownProps {
    trigger_content: any;
    menu_items:{
        item_show: boolean;
        item_content: any;
        item_callback: Function;
    }[];
}

function Dropdown(props: DropdownProps): JSX.Element {
    
    let cnt = 0;
    const [open,setOpen] = useState<boolean>(false);

    const menuRef = useRef<any>(null);

    

    useEffect(() => {
        
        const handler = (e:Event)=>{
            if(open && menuRef.current && !menuRef.current.contains(e.target)){
                setOpen(false);    
            }  
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        
        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    },[open]);

    return (
        <div className="dd-container" ref={menuRef}>

            <button className="dd-trigger" onClick={()=>{setOpen(!open)}}>
                {props.trigger_content}
            </button>
            
            <div className={"dd-menu " + (open? "active":"inactive")}>
                {
                    props.menu_items.map((item) => (
                        (item.item_show)
                        &&
                        (
                            <div key={++cnt}
                                className="dd-item"
                                onClick={ () => {
                                        setOpen(false);
                                        item.item_callback();
                                    }
                                }
                            >
                                {item.item_content}
                            </div>
                        )
                    ))
                }
            </div>
            
        </div>
    );
}

export default Dropdown;
