import * as Styled from './CardExame.style';


function CardExame ({exame})  {
  console.log(exame)
  return (

    <>

  <Styled.RenderResultados>

    <p>Exame Solicitado: {exame?.exameNome} </p>
    <p>Data do Exame: </p>
    <p>Hora: </p>
    <p>Tipo de Exame: </p>
    <p>Laboratório Solicitado: </p>
    <p>Resultados: </p>


  </Styled.RenderResultados>

    
    </>
  );
}

export default CardExame;