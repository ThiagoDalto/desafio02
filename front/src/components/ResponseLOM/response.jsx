import { useState } from "react";



function ResponseLOM({ responses }){
    // [responseBJ, setResponseBJ] = useState([])

    const LojaDoOMResponses = responses.filter((response) => response.nome_loja === "LOJA DO Ó - MATRIZ")
    const saldo = LojaDoOMResponses.reduce((a, b) => b.valor + a, 0).toFixed(2)
    console.log(LojaDoOMResponses)
    console.log(saldo)

    return(
        <>
            {
                LojaDoOMResponses.length ? (
                    LojaDoOMResponses.map((response, index) => (
                        <li key={index}>
                            <span><div className="cell"><span className="tag">Nome da Loja: </span><span className="values">{response.nome_loja}</span></div></span>
                            <span><div className="cell"><span className="tag">Tipo: </span><span className="values">{response.tipo}</span></div></span>
                            <span><div className="cell"><span className="tag">Valor: </span><span className="values">{response.valor}</span></div></span>
                            <span><div className="cell"><span className="tag">Hora: </span><span className="values">{response.hora}</span></div></span>        
                            <span><div className="cell"><span className="tag">Saldo: </span><span className="values">{saldo}</span></div></span>        
                        </li>
                    ))
                ) : (null)
            }
        </>
    )
}

export default ResponseLOM;