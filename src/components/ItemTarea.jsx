import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
const ItemTarea = () => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                Tarea de Prueba
                <Button variant='danger'>Borrar</Button>
                </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;