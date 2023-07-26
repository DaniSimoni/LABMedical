import * as Styled from './CardConsulta.style';


function CardConsulta ({consulta})  {

  return (

    <>

  <Styled.RenderResultados>

    <p>Motivo: {consulta.motivo} </p>
    <p>Data da Consulta: </p>
    <p>Hora: </p>
    <p>Descrição: </p>
    <p>Medicação: </p>
    <p>Dosagem: </p>

  </Styled.RenderResultados>
 
    
    </>
  );
}

export default CardConsulta;