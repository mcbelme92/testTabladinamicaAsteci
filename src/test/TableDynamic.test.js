import { getInformationGob } from "../Api/Table";

describe('Pruebas en </>', () => {
    
  test('debe de retornar un arreglo de objetos',async () => {
      const informacionFuncion = await getInformationGob();
      //console.log(informacionFuncion)
      expect(informacionFuncion).toBe();

   });

});