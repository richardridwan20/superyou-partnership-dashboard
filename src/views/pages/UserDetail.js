import React, {useState, useLayoutEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CCallout,
  CBadge,
  CButton,
  CForm,
  CTextarea,
  CButtonToolbar
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import UserService from '../../services/UserService'
import PartnerService from '../../services/PartnerService'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getIsActive = is_active => {
  switch (is_active) {
    case 'true': return 'success'
    case 'false': return 'danger'
    default: return 'success'
  }
}

const UserDetail = ({match}) => {
  const [id, setId] = useState(match.params.id);
  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [partner, setPartner] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [edit, setEdit] = useState(false);
  const [typed, setTyped] = useState(false);

  //Fetch data through API using Axios in Service
  useLayoutEffect(() => {
    UserService.getUserById(id)
    .then((res) => {
      setUsers(res.user)
      setPartners(res.partner)
      setPartner(res.partner)
      console.log(partners);
    }).catch((error) => {
      setUsers({})
      setPartners({})
      setPartner({})
      console.log(error)
    })
    
  }, [updated]); 

  const handleSubmit = () => {
    PartnerService.updatePartnerById(partners.id,partner)
    .then((res) => {
      MySwal.fire({
        title: <p>Success!</p>,
        icon: 'success',
        text: 'Partner info successfully updated.'
      });
      setUpdated(true);
      console.log(res);
    }).catch((error) => {
      MySwal.fire({
        title: <p>Error!</p>,
        icon: 'error',
        text: 'Partner info failed to update.'
      });
      setUpdated(false);
      console.log(error)
    })
  }

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
              <CForm action="#" className="form-horizontal">
                <CRow>
                  <CCol xs="12" sm="9" className="">
                    <p className="text-muted lead">Partner Info</p>
                  </CCol>
                  <CCol xs="12" sm="3">
                    <CButtonToolbar justify="between">
                      <CButton type="button" size="sm" color="info"  onClick={ e => setEdit(true) }>
                        <CIcon
                          name="cil-pencil"
                        /> Edit
                      </CButton>
                      <CButton type="button" size="sm" color="secondary" onClick={ handleSubmit } disabled={!typed}>
                        <CIcon
                          name="cil-save"
                        /> Save Changes
                      </CButton>
                    </CButtonToolbar>
                  </CCol>
                </CRow>
                <br />
                <CRow>
                  <CCol xs="12" sm="4">
                    <p><strong>Name</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.name ? partners.name : '-'} name="partner['name']" 
                      onChange={(e) => {
                        setPartner({ ...partner, name: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Company Name</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.company_name ? partners.company_name : '-'} name="partner['company_name']" onChange={(e) => {
                        setPartner({ ...partner, company_name: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Address</strong></p>
                    <CTextarea disabled={!edit} key={partners} defaultValue={partners.address ? partners.address : '-'} name="partner['address']" onChange={(e) => {
                        setPartner({ ...partner, address: e.target.value })
                        setTyped(true)
                    }}></CTextarea>
                  </CCol>
                </CRow>
                <br></br>
                <CRow>
                  <CCol xs="12" sm="4">
                    <p><strong>Email</strong></p>
                    <CInput disabled={!edit} key={partners} type="email" defaultValue={partners.email ? partners.email : '-'} name="partner['email']" onChange={(e) => {
                        setPartner({ ...partner, email: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="4">
                    <p><strong>Commission</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.commission ? partners.commission : '-'} name="partner['commission']" onChange={(e) => {
                        setPartner({ ...partner, commission: e.target.value })
                        setTyped(true)
                    }}></CInput>
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
                      <CInput disabled={!edit} key={partners} defaultValue={partners.banner_url ? partners.banner_url.desktop : '-'} name="partner['desktop_banner_url']" onChange={(e) => {
                        setPartner({ ...partner, desktop_banner_url: e.target.value })
                        setTyped(true)
                    }}></CInput>
                    </code>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Mobile Banner URL</strong></p>
                    <code>
                      <CInput disabled={!edit} key={partners} defaultValue={partners.banner_url ? partners.banner_url.mobile : '-'} name="partner['mobile_banner_url']" onChange={(e) => {
                        setPartner({ ...partner, mobile_banner_url: e.target.value })
                        setTyped(true)
                    }}></CInput>
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
                    <CInput disabled={!edit} key={partners} defaultValue={partners.branch_name ? partners.branch_name : '-'} name="partner['branch_name']" onChange={(e) => {
                        setPartner({ ...partner, branch_name: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Branch Code</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.branch_code ? partners.branch_code : '-'} name="partner['branch_code']" onChange={(e) => {
                        setPartner({ ...partner, branch_code: e.target.value })
                        setTyped(true)
                    }}></CInput>
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
                    <CInput disabled={!edit} key={partners} defaultValue={partners.agent_name ? partners.agent_name : '-'} name="partner['agent_name']" onChange={(e) => {
                        setPartner({ ...partner, agent_name: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>NPK (Agent) Code</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.agent_code ? partners.agent_code : '-'} name="partner['agent_code']" onChange={(e) => {
                        setPartner({ ...partner, agent_code: e.target.value })
                        setTyped(true)
                    }}></CInput>
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
                    <CInput disabled={!edit} key={partners} defaultValue={partners.callback_method ? partners.callback_method : '-'} name="partner['callback_method']" onChange={(e) => {
                        setPartner({ ...partner, callback_method: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <p><strong>Callback URL</strong></p>
                    <CInput disabled={!edit} key={partners} defaultValue={partners.callback_url ? partners.callback_url : '-'} name="partner['callback_url']" onChange={(e) => {
                        setPartner({ ...partner, callback_url: e.target.value })
                        setTyped(true)
                    }}></CInput>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserDetail
