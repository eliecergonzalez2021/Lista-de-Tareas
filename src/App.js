import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
 //Obtenemos las tareas Guardadas del localStorage.
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];
  
  //Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  

  //Guardando el estado dentro de localStorage.
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  
  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //El estado de mostrar tareas Completadas "mostrarCompletadas".
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas) 

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

// ------------------------------ INICIO sin el error ------------------------------------------------//
/*const [tareas, cambiarTareas] = useState(
  [
    {
      id: 1,
      texto: 'Funciona 1',
      completada: false
    },
    {
      id: 2,
      texto: 'Funciona 2',
      completada: true
    }
  ]
)

const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true)*/
// ------------------------------ FIN sin el error ------------------------------------------------//
  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
        tareas = {tareas} 
        cambiarTareas = {cambiarTareas}
        mostrarCompletadas = {mostrarCompletadas}
      />
    </div>
  );
}

export default App;


