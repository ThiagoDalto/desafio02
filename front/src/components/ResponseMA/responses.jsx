import { useState } from "react";



function ResponseMA({ responses }){
    // [responseBJ, setResponseBJ] = useState([])

    const mercadoAvenidaResponses = responses.filter((response) => response.nome_loja === "MERCADO DA AVENIDA");
    const saldo = mercadoAvenidaResponses.reduce((a, b) => b.valor + a, 0).toFixed(2)

    return(
        <>
            {
                mercadoAvenidaResponses.length ? (
                    mercadoAvenidaResponses.map((response, index) => (
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

export default ResponseMA;