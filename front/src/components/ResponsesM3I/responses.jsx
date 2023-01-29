import { useState } from "react";



function ResponseM3I({ responses }){
    // [responseBJ, setResponseBJ] = useState([])

    const mercado3IrmaosResponses = responses.filter((response) => response.nome_loja === "MERCEARIA 3 IRMÃOS")

    return(
        <>
            {
                mercado3IrmaosResponses.length ? (
                    mercado3IrmaosResponses.map((response, index) => (
                        <li key={index}>
                            <span><div className="cell"><span className="tag">Nome da Loja: </span><span className="values">{response.nome_loja}</span></div></span>
                            <span><div className="cell"><span className="tag">Tipo: </span><span className="values">{response.tipo}</span></div></span>
                            <span><div className="cell"><span className="tag">Valor: </span><span className="values">{response.valor}</span></div></span>
                            <span><div className="cell"><span className="tag">Hora: </span><span className="values">{response.hora}</span></div></span>        
                        </li>
                    ))
                ) : (null)
            }
        </>
    )
}

export default ResponseM3I;