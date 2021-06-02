import React, {useEffect, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CInput,
  CWidgetBrand,
  CCardGroup,
  CWidgetProgressIcon,
  CProgress,
  CWidgetIcon,
  CCallout,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import UserService from '../../services/UserService'
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

const UserDetail = ({match}) => {
  const [id, setId] = useState(match.params.id);
  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);

  //Fetch data through API using Axios in Service
  useEffect(() => {
    UserService.getUserById(id)
    .then((res) => {
      setUsers(res.user)
      setPartners(res.partner)
    }).catch((error) => {
      setUsers({})
      setPartners({})
      console.log(error)
    })
    
  }, []); 

  return (
    <>
      <CRow>
        <CCol xs="12" sm="4">
          <CCard>
            <CCardHeader color="gradient-info" className="text-white text-center">
              <CIcon
                name="cil-user"
                height="52"
                className="my-4"
              />
              <h3>{users.full_name}</h3>
              <p>#{users.id}</p>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" sm="12">
                  <p className="text-muted lead">User Info</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" sm="4">
                  <CCallout color="info">
                    <small className="text-muted">EMAIL</small>
                    <br />
                    <strong className="h5">{users.email ? users.email : '-'}</strong>
                  </CCallout>
                </CCol>
                <CCol xs="12" sm="4">
                  <CCallout color="info">
                    <small className="text-muted">ROLE</small>
                    <br />
                    <strong className="h5">{users.role ? users.role : '-'}</strong>
                  </CCallout>
                </CCol>
                <CCol xs="12" sm="4">
                  <CCallout color="info">
                    <small className="text-muted">IS ACTIVE</small>
                    <br />
                    <CBadge className="h6" color={getIsActive(users.is_active)}>
                      {users.is_active ? 'active' : 'inactive'}
                    </CBadge>
                  </CCallout>
                </CCol>
              </CRow>
              <hr className="my-2" />
              <CRow>
                <CCol xs="12" sm="6">
                  <CCallout color="info">
                    <small className="text-muted">PARTNER ID</small>
                    <br />
                    <strong className="h6">{users.partner_id ? users.partner_id : '-'}</strong>
                  </CCallout>
                </CCol>
                <CCol xs="12" sm="6">
                  <CCallout color="info">
                    <small className="text-muted">BRANCH ID</small>
                    <br />
                    <strong className="h6">{users.branch_id ? users.branch_id : '-'}</strong>
                  </CCallout>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="8">
          <CCard>
            <CCardHeader color="gradient-info" className="text-white text-center">
              <CIcon
                name="cil-building"
                height="52"
                className="my-4"
              />
              <h3>{partners.name}</h3>
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
                    <p className="text-muted">{partners.name ? partners.name : '-'}</p>
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

export default UserDetail
