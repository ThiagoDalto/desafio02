import ResponseBJ from "../ResponseBJ/responses";
import ResponseLOF from "../ResponseLOF/response";
import ResponseLOM from "../ResponseLOM/response";
import ResponseMA from "../ResponseMA/responses";
import ResponseM3I from "../ResponsesM3I/responses";


function Responses({ responses }){
    return(
        <>
            <ResponseBJ  responses={responses} />
            <ResponseLOF  responses={responses} />
            <ResponseLOM  responses={responses} />
            <ResponseMA  responses={responses} />
            <ResponseM3I  responses={responses} />
        </>
    )
}

export default Responses;