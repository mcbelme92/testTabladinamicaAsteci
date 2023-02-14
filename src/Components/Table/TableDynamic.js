import { map } from 'lodash';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { getInformationGob } from '../../Api/Table';

export const TableDynamic = () => {

  const [InfoTable, setInfoTable] = useState(null);


  useEffect(() => {
    (async () => {
    
      const response = await getInformationGob();
      setInfoTable(response)
    }
    )();
    
  }, [])
    
  console.log("informacion", InfoTable)
  


  return (
    <div className="sumary-cart">
      <div className="title">Tabla informacion</div>
      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>-id</Table.HeaderCell>
              <Table.HeaderCell>CityId</Table.HeaderCell>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>state</Table.HeaderCell>
              <Table.HeaderCell>probabilityofprecip</Table.HeaderCell>
              <Table.HeaderCell>relativehumidity</Table.HeaderCell>
              <Table.HeaderCell>Lastreporttime  </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
             {map(InfoTable.results, (product) => ( 
              <Table.Row key={ product?._id }  className="sumary-cart__product">
                <Table.Cell>
                  

                               {product._id}
                              
                </Table.Cell>
                {/* <Table.Cell>{count}</Table.Cell> */}
                <Table.Cell>
                {product.cityid}
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                          <Table.Cell>
                            {product.state}
                          </Table.Cell>

                {<Table.Cell>{product.probabilityofprecip}</Table.Cell>}

                <Table.Cell>
                {product.relativehumidity}
                </Table.Cell>
                 <Table.Cell>
                 {moment(product.lastreporttime).format("LL")}
                
                </Table.Cell>
              </Table.Row>
             ))} 
            <Table.Row className="sumary-cart__resume">
              <Table.Cell className="clear" />
              <Table.Cell className="total-price">
              <Table.Cell colSpan="5">Total:</Table.Cell>
                  
              {InfoTable.pagination.total}
              </Table.Cell>
              
            </Table.Row>
          </Table.Body>
          <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
        </Table>
      </div>
    </div>
  )
}
