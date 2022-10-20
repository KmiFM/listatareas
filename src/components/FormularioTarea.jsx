import React, { useState } from 'react';
import ListaTarea from './ListaTarea';
import { Form,Button } from 'react-bootstrap';
const FormularioTarea = () => {
    const [tarea, setTarea] = useState('');
    const [arregloTarea, setarregloTarea] = useState([]);
    const handleSubmit = (e)=>{
 e.preventDefault();
 //operador spread son tres puntitos que hace que se haga una copia del arreglo posterior a los tres puntitos y al final se agregaria la nueva tarea en el arreglo. Solo copia lo que está en el arreglo previo al cambio
 setarregloTarea([...arregloTarea,tarea]);
 setTarea('');
    }
    return (
        <>
        <div>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
        
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      </Form.Group>
    </Form>
        
        <ListaTarea arregloTarea={arregloTarea}></ListaTarea>
        </div>
        </>
    );
};

export default FormularioTarea;