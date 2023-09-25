import "./modale.css"
//
//
//
export default function Modale({text, isOpen, onClose}) {
    //
    //
    //
     return(
        <>
    {isOpen && (    
        <aside className="modale_background">
    <div className="bloc_modale">
    <button className="button_close_modale" onClick={() => onClose(false)}>&times;</button>
    <span className="text_modale">{text}</span>
    </div>
        </aside>
        )}
        </>
     )
    }