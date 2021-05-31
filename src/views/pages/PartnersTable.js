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
import PartnerService from '../../services/PartnerService'

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
const fields = ['id', 'name', 'company_name', 'address', 'email', 'commission', 'is_active', 'banner_url', 'branch_name', 'branch_code', 'agent_name', 'agent_code', 'callback_method', 'callback_url']

const PartnersTable = () => {
  //Initialize Value and useState
  const [partners, setPartners] = useState([]);
  const [currentPage, setActivePage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [query, setQuery] = useState('id')
  const [loading, setLoading] = useState(true)
  const options = {
    'external': true
  }

  //Fetch data through API using Axios in Service
  useEffect(() => {
    setLoading(true)
    PartnerService.getPartners(currentPage, perPage, query)
    .then((res) => {
      setLoading(false)
      setPartners(res)
    }).catch((error) => {
      setPartners({})
      console.log(error)
    })
    
  }, [currentPage, perPage, query]); 

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Partners
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={partners}
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
            />
            <CPagination   
              activePage={currentPage}
              pages={5}
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

export default PartnersTable
