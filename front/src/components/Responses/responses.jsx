import ResponseBJ from "../ResponseBJ/responses";
import ResponseLOF from "../ResponseLOF/response";
import ResponseLOM from "../ResponseLOM/response";
import ResponseMA from "../ResponseMA/responses";
import ResponseM3I from "../ResponsesM3I/responses";


function Responses({ responses }){
    return(
        <>
            {/* {
                responses.length ? (
                    responses.map((response, index) => (
                        <li key={index}>
                            <span><div className="cell"><span className="tag">Nome da Loja: </span><span className="values">{response.nome_loja}</span></div></span>
                            <span><div className="cell"><span className="tag">Tipo: </span><span className="values">{response.tipo}</span></div></span>
                            <span><div className="cell"><span className="tag">Valor: </span><span className="values">{response.valor}</span></div></span>
                            <span><div className="cell"><span className="tag">Hora: </span><span className="values">{response.hora}</span></div></span>        
                        </li>
                    ))
                ) : (null)
            } */}
            <ResponseBJ  responses={responses} />
            <ResponseLOF  responses={responses} />
            <ResponseLOM  responses={responses} />
            <ResponseMA  responses={responses} />
            <ResponseM3I  responses={responses} />
        </>
    )
}

export default Responses;