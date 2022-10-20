import ItemTarea from "./ItemTarea";
import ListGroup from 'react-bootstrap/ListGroup';
//desestructuramos el objet props escribiendo {arrelgoTarea}
const ListaTarea = ({arregloTarea}) => {
    return (
    <ListGroup>
        {
            arregloTarea.map((tarea,posicion)=> <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
        }
     
    </ListGroup>
    );
};

export default ListaTarea;