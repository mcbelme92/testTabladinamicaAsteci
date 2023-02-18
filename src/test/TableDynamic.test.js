import { getInformationGob } from "../Api/Table";

describe('Pruebas en </>', () => {
    
  test('debe de retornar un arreglo de objetos',async () => {
      const informacion = [];
      const informacionFuncion =await getInformationGob(informacion);
      console.log(informacionFuncion)

   });

});