import React, {useEffect, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import PartnerService from '../../services/PartnerService'

const getIsActive = is_active => {
  switch (is_active) {
    case 'true': return 'success'
    case 'false': return 'danger'
    default: return 'success'
  }
}

const formStyles = {
  border: "0px"
};

const PartnerDetail = ({match}) => {
  const [id, setId] = useState(match.params.id);
  const [partners, setPartners] = useState([]);

  //Fetch data through API using Axios in Service
  useEffect(() => {
    PartnerService.getPartnerById(id)
    .then((res) => {
      setPartners(res)
    }).catch((error) => {
      setPartners({})
      console.log(error)
    })
    
  }, []); 

  return (
    <>
      <CRow>
        <CCol xs="12" sm="8">
          <CCard>
            <CCardHeader color="gradient-info" className="text-white text-center">
              <h3>Partner Detail</h3>
              <p>#{partners.id}</p>
            </CCardHeader>
            <CCardBody>
                <CRow>
                  <CCol xs="12" sm="12">
                    <p className="text-muted lead">Partner Info</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" sm="4">
                    <p><strong>Name</strong></p>
                    <CInput style={formStyles} className="text-muted" defaultValue={partners.name ? partners.name : '-'}></CInput>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Company Name</strong></p>
                    <p className="text-muted">{partners.company_name ? partners.company_name : '-'}</p>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Address</strong></p>
                    <p className="text-muted">{partners.address ? partners.address : '-'}</p>
                  </CCol>
                </CRow>
                <br></br>
                <CRow>
                  <CCol xs="12" sm="4">
                    <p><strong>Email</strong></p>
                    <p className="text-muted">{partners.email ? partners.email : '-'}</p>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Commission</strong></p>
                    <p className="text-muted">{partners.commission ? partners.commission : '-'}</p>
                  </CCol>
                </CRow>
                <br></br>
                <hr className="my-2" />
                <br></br>
                <CRow>
                  <CCol xs="12" sm="12">
                    <p className="text-muted lead">Banner Info</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" sm="6">
                    <p><strong>Desktop Banner URL</strong></p>
                    <code>
                        {partners.banner_url ? JSON.stringify(partners.banner_url.desktop, null, 6) : '-'}
                    </code>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Mobile Banner URL Code</strong></p>
                    <code>
                        {partners.banner_url ? JSON.stringify(partners.banner_url.mobile, null, 6) : '-'}
                    </code>
                  </CCol>
                </CRow>
                <br></br>
                <hr className="my-2" />
                <br></br>
                <CRow>
                  <CCol xs="12" sm="12">
                    <p className="text-muted lead">Branch Info</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" sm="6">
                    <p><strong>Branch Name</strong></p>
                    <p className="text-muted">{partners.branch_name ? partners.branch_name : '-'}</p>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Branch Code</strong></p>
                    <p className="text-muted">{partners.branch_code ? partners.branch_code : '-'}</p>
                  </CCol>
                </CRow>
                <br></br>
                <hr className="my-2" />
                <br></br>
                <CRow>
                  <CCol xs="12" sm="12">
                    <p className="text-muted lead">NPK Info</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" sm="6">
                    <p><strong>NPK (Agent) Name</strong></p>
                    <p className="text-muted">{partners.agent_name ? partners.agent_name : '-'}</p>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>NPK (Agent) Code</strong></p>
                    <p className="text-muted">{partners.agent_code ? partners.agent_code : '-'}</p>
                  </CCol>
                </CRow>
                <br></br>
                <hr className="my-2" />
                <br></br>
                <CRow>
                  <CCol xs="12" sm="12">
                    <p className="text-muted lead">Callback Info</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" sm="6">
                    <p><strong>Callback Method</strong></p>
                    <p className="text-muted">{partners.callback_method ? partners.callback_method : '-'}</p>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Callback URL</strong></p>
                    <p className="text-muted">{partners.callback_url ? partners.callback_url : '-'}</p>
                  </CCol>
                </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default PartnerDetail
