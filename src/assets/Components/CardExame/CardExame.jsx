import * as Styled from './CardExame.style';


function CardExame ({exame})  {
  console.log(exame)
  return (

    <>

  <Styled.RenderResultados>

    <p>Exame Solicitado: {exame?.exameNome} </p>
    <p>Data do Exame: {exame?.dataExame} </p>
    <p>Hora: {exame?.hora} </p>
    <p>Tipo de Exame: {exame?.tipoExame} </p>
    <p>Laboratório Solicitado: {exame?.labExame} </p>
    <p>Resultados: {exame?.resultadoExame} </p>


  </Styled.RenderResultados>

    
    </>
  );
}

export default CardExame;