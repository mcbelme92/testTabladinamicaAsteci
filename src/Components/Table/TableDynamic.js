import { map } from 'lodash';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { getInformationGob } from '../../Api/Table';

export const TableDynamic = () => {

  const [InfoTable, setInfoTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    (async () => {
    
      const response = await getInformationGob();
      setInfoTable(response)
    }
    )();
    
  }, [])
    
  console.log("informacion", InfoTable.results)

  const filterPage = () => {
    return InfoTable.results?.slice(currentPage,currentPage + 10);
  }
  console.log(typeof InfoTable)
  
  const nextPage = () => {
     setCurrentPage( currentPage + 10);
  }

  const beforePage = () => {
    if (currentPage > 0 ) {
      setCurrentPage(currentPage - 10);
      
    }
  }

  return (
    <div className="TableDynamic">
      <div className="title">Tabla informacion</div>
      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>-id</Table.HeaderCell>
              <Table.HeaderCell>CityId</Table.HeaderCell>
              <Table.HeaderCell style={{with: 100}}>name</Table.HeaderCell>
              <Table.HeaderCell style={{with: 100}}>state</Table.HeaderCell>
              <Table.HeaderCell style={{with: 100}}>probabilityofprecip</Table.HeaderCell>
              <Table.HeaderCell>relativehumidity</Table.HeaderCell>
              <Table.HeaderCell>Lastreporttime  </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
             {map(filterPage(), (product) => ( 
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
                  
              {InfoTable?.pagination?.total}
              </Table.Cell>
              <Table.HeaderCell colSpan='3' style={{with: 100}}>
          <Menu floated='right' pagination >
            <Menu.Item as='a' icon onClick={beforePage}>
              <Icon name='chevron left' />
            </Menu.Item>
            {/* <Menu.Item as='a' >1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item> */}
            <Menu.Item as='a' icon onClick={nextPage}>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
              
            </Table.Row>
          </Table.Body>
          <Table.Footer>
      <Table.Row  >
        
      </Table.Row>
    </Table.Footer>
        </Table>
      </div>
    </div>
  )
}
