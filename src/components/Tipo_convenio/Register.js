import { useLocation  } from "wouter";
import React, { useState, useRef } from 'react';
import swal from 'sweetalert';

export default function Register() {

  const [tico_nombre, setTico_nombre] = useState("");
  const reftico_nombre = useRef(null);
  const [location, setLocation] = useLocation();

  const guardar = async() => {
    let url = 'http://localhost:4000/api/tipoconvenios',
    data = {
      tico_nombre,
    },
    config = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    },
    res = await fetch(url,config),
    result = await res.json();
    console.log(result);
    if(result.errors){
      let text = '';
      result.errors.map(error =>{
        text += error.msg+"\n"
      });
      await swal({
        icon: 'info',
        title: 'Rellene los campos correctamente',
        text,
      });
      let param = result.errors[0].param;
      eval('ref'+param+'.current.focus()');
      return;
    }
    if (result.msg) {
      await swal({
        icon: 'info',
        title: 'Registre con otro nombre',
        text:result.msg,
      });
      reftico_nombre.current.focus();
      setTico_nombre('');
      return;

    }
    if (result.tipoConvenio) {
      await swal({
        icon: 'success',
        title: 'Registro exitoso',
      });
      setLocation("/tipo-convenio");
    }
  }
  return (
    <section className="w-full py-12">
      <h1 className="text-center text-2xl font-semibold mb-8">
        Registrar tipo de convenio
      </h1>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="tico_nombre"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text" id="tico_nombre" name="tico_nombre" ref={reftico_nombre}
              value={tico_nombre} onChange={(e)=>setTico_nombre(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-300 font-bold py-2 px-4 rounded" 
          type="button" onClick={guardar}>
          Registrar
        </button>
      </form>
    </section>
  );
}
  