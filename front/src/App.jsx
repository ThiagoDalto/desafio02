import React, { useState, useEffect }  from 'react'
import { useForm } from "react-hook-form"
import Responses from './components/Responses/responses';




function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responses, setResponses] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://127.0.0.1:8000/api/uploadfile/', {
      method: 'POST',
      body: formData,      
    })
    .then(response => response.json())
    .then(response => {
      setResponses(response)
      
    })
    .catch(error => {
      console.error(error);
    });
  }
  function removeDuplicated(responses){
    const resultado = responses.filter((elem, index, arr) => {
      const indice = arr.findIndex((innerElem) => {
        return elem.valor  === innerElem.valor && elem.hora === innerElem.hora
      })
      return indice === index
    })
    return resultado
  }
  console.log(removeDuplicated(responses))
  return (
    <>
    <div className='FormFile'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
    <Responses responses={responses} />
    </>
  );
}

export default App
