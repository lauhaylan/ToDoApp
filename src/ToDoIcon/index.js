// para importar los svg usar esta sintaxis- reactComponent se debe nombrar (as) cuando importamos más de uno
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css';


// // ponemos un array por cada valor posible del type, y le asignamos su svg
const iconTypes= {
    "check" : (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function ToDoIcon({ type, color, onClick }){
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { ToDoIcon };