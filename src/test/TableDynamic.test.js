import { getInformationGob } from "../Api/Table";
import { dataTest } from "../data/dataTest";



describe('Pruebas en Datos de la tabla', () => {
    
  test('debe de retornar un arreglo de objetos',async () => {
      const informacionFuncion = await getInformationGob();
      //console.log(informacionFuncion)
      expect(informacionFuncion).toStrictEqual(dataTest);

   });

});