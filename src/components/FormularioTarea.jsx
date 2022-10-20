import React, { useState,useEffect} from 'react';
import ListaTarea from './ListaTarea';
import { Form,Button } from 'react-bootstrap';
const FormularioTarea = () => {
  //busdco los datos del localstorage
  //hace que busque los datos del local storage y si no hubiese nada lo manda al arreglo vacío
  const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
    const [tarea, setTarea] = useState('');
    const [arregloTarea, setarregloTarea] = useState(tareasLocalStorage);

    //ciclo de vida
useEffect(()=>{
  //escrito asi funcona en el montaje y actualizacion del componente
  //seria escrito useEffect{()=>{bla}}
  //ejecuta logica pero no actualizacion si pongo, solo funcona en el montaje
  //useEffect{()=>{blabla,[]}}
  // si escribo useeffect con [arreglotara ]es para que fincione en montje y acrualizacion solo del arreglo 

  //guardar en localstorage
 
  localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea))
  console.log('hola')
},[arregloTarea])

    const handleSubmit = (e)=>{
 e.preventDefault();
 //operador spread son tres puntitos que hace que se haga una copia del arreglo posterior a los tres puntitos y al final se agregaria la nueva tarea en el arreglo. Solo copia lo que está en el arreglo previo al cambio
 setarregloTarea([...arregloTarea,tarea]);
 setTarea('');
    }

    const borrarTarea = (nombre)=>{
 let arregloModificado = arregloTarea.filter((item)=>( item !== nombre))
 //actualizo el state
 setarregloTarea(arregloModificado)
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
        
        <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
        </div>
        </>
    );
};

export default FormularioTarea;