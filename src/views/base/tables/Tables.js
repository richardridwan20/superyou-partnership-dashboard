import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CLink
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import TransactionService from '../../../services/TransactionService'

const getBadge = status => {
  switch (status) {
    case 'awaiting-payment': return 'success'
    case 'awaiting payment': return 'success'
    case 'validation-failed': return 'warning'
    case 'encryption-failed': return 'danger'
    case 'encryption failed': return 'danger'
    case 'request-encryption': return 'primary'
    case 'request encryption': return 'primary'
    default: return 'primary'
  }
}

//Initialize fields for column in Datatable
const fields = ['id', 'product_slug', 'product_code', 'product_plan_code', 'holder_name', 'holder_dob', 'holder_gender', 'holder_email', 'holder_mobile_number', 'insured_name', 'insured_for', 'status']

const Tables = () => {
  //Initialize Value and useState
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setActivePage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [query, setQuery] = useState('id')
  const [loading, setLoading] = useState(true)
  const options = {
    'external': true
  }
  const history = useHistory()

  //Fetch data through API using Axios in Service
  useEffect(() => {
    setLoading(true)
    TransactionService.getTransactions(currentPage, perPage, query)
    .then((res) => {
      setLoading(false)
      setTransactions(res)
    }).catch((error) => {
      setTransactions({})
      console.log(error)
    })
    
  }, [currentPage, perPage, query]); 

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Transactions
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={transactions}
              loading={loading}
              fields={fields}
              hover
              striped
              bordered
              size="lg"
              sorter={options}
              itemsPerPageSelect
              onColumnFilterChange={(q) => setQuery(q)}
              onSorterValueChange={(q) => setQuery(q)}
              onPaginationChange={(a) => setPerPage(a)}
              responsive={true}
              clickableRows
              onRowClick={(item) => history.push(`/transactions/${item.id}`)}
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            <CPagination   
              activePage={currentPage}
              pages={50}
              onActivePageChange={(i) => setActivePage(i)}
            >
            </CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
