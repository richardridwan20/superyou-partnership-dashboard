import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'
import TransactionService from '../../../services/TransactionService'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['id', 'product_slug', 'product_code', 'product_plan_code', 'holder_name', 'holder_dob', 'holder_gender', 'holder_email', 'holder_mobile_number', 'insured_for', 'insured_name', 'insured_for', 'status']

const Tables = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setActivePage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [query, setQuery] = useState('id')
  const [loading, setLoading] = useState(true)
  const options = {
    'external': true
  }
  const noItemOptions = {
    'noResults': 'No filter',
    'noItems': 'No itemmm'
  }
  console.log(query);

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
              pages={24}
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
