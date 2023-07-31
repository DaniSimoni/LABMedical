export const CEP_URL = 'viacep.com.br/ws/01001000/json/'

const Get = async () => {
    const response = await fetch(CEP_URL);
    const data = await response.json();

    return data;
   }


export const CEPService = {
    Get,
  
}