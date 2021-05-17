import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
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

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Tables = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    TransactionService.getTransactions()
    .then((res) => {
      setTransactions(res)
      setLoading(false);
    }).catch((error) => {
      setTransactions({})
      console.log(error)
    })
    
  }, []); 

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
              fields={fields}
              itemsPerPage={5}
              itemsPerPageSelect
              hover
              striped
              bordered
              size="lg"
              sorter
              tableFilter
              responsive={true}
              pagination
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
