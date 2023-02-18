const Endpoint = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";

export async function getInformationGob() {
    try {
      
      const url = `${Endpoint}`;
      const response = await fetch(url);
      console.log(response)
      const result = await response.json();
        //const { results } = result;
        console.log("data",result)
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }