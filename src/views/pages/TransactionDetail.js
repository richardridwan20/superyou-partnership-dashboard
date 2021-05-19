import React, {useEffect, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
  CButton
} from '@coreui/react'
import TransactionService from '../../services/TransactionService'
import CIcon from '@coreui/icons-react'

const getBadge = status => {
  switch (status) {
    case 'awaiting-payment': return 'success'
    case 'awaiting payment': return 'success'
    case 'validation-failed': return 'warning'
    case 'encryption-failed': return 'danger'
    case 'encryption failed': return 'danger'
    case 'request-encryption': return 'primary'
    case 'request encryption': return 'primary'
    case 'bulk-upload': return 'success'
    case 'single-transaction': return 'primary'
    default: return 'primary'
  }
}

const TransactionDetail = ({match}) => {
  const [id, setId] = useState(match.params.id);
  const [transactions, setTransactions] = useState([]);

  //Fetch data through API using Axios in Service
  useEffect(() => {
    TransactionService.getTransactionById(id)
    .then((res) => {
      setTransactions(res)
    }).catch((error) => {
      setTransactions({})
      console.log(error)
    })
    
  }, []); 

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
              <CRow>
                <CCol xs="12" sm="4">
                  <CCard>
                    <CCardHeader color="gradient-info" className="text-white text-center">
                      <h2>Transaction</h2>
                      <p>#{transactions.id}</p>
                    </CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">STATUS</p>
                          <CBadge color={getBadge(transactions.status)}>
                            {transactions.status}
                          </CBadge>
                        </CCol>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">TYPE</p>
                          <CBadge color={getBadge(transactions.transaction_type)}>
                            {transactions.transaction_type}
                          </CBadge>
                        </CCol>
                      </CRow>
                      <br></br>
                      <hr className="my-2" />
                      <br></br>
                      <CRow>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">POLICY NUMBER</p>
                          <p>{transactions.policy_number ? transactions.policy_number : '-'}</p>
                          <CButton color="success" variant='outline' href="javascript:void(0)" disabled>
                            <CIcon name="cil-cloud-download" /> Download
                          </CButton>
                        </CCol>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">START DATE</p>
                          <p>{transactions.start_date ? transactions.start_date : '-'}</p>
                        </CCol>
                      </CRow>
                      <br></br>
                      <hr className="my-2" />
                      <br></br>
                      <CRow>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">CREATED AT</p>
                          <p>12/06/1998</p>
                        </CCol>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">UPDATED AT</p>
                          <p>12/06/1998</p>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                  <CCard>
                    <CCardHeader color="gradient-info" className="text-white text-center">
                      <h2>Invoice</h2>
                      <p>#{transactions.invoice_number ? transactions.invoice_number : '-'}</p>
                    </CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">PAYMENT MODE</p>
                          <p>{transactions.premium_payment_mode ? transactions.premium_payment_mode : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">PAYMENT METHOD</p>
                          <p>{transactions.premium_payment_method ? transactions.premium_payment_method : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">PAYMENT NAME</p>
                          <p>{transactions.payment_method_name ? transactions.payment_method_name : '-'}</p>
                        </CCol>
                      </CRow>
                      <br></br>
                      <hr className="my-2" />
                      <br></br>
                      <CRow>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">MEMBER ID</p>
                          <p>{transactions.member_id ? transactions.member_id : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">VIRTUAL ACCOUNT</p>
                          <p>{transactions.virtual_account ? transactions.virtual_account : '-'}</p>
                        </CCol>
                      </CRow>
                      <br></br>
                      <hr className="my-2" />
                      <br></br>
                      <CRow>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">TOTAL PREMIUM</p>
                          <p>{transactions.total_premium ? transactions.total_premium : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">TRANSACTION FEE</p>
                          <p>{transactions.transaction_fee ? transactions.transaction_fee : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="4" className="text-center">
                          <p className="text-muted">TOTAL PAYMENT</p>
                          <p>{transactions.total_payment ? transactions.total_payment : '-'}</p>
                        </CCol>
                      </CRow>
                      <br></br>
                      <hr className="my-2" />
                      <br></br>
                      <CRow>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">PAYMENT CYCLE</p>
                          <p>{transactions.payment_cycle ? transactions.payment_cycle : '-'}</p>
                        </CCol>
                        <CCol sm="12" sm="6" className="text-center">
                          <p className="text-muted">PROTECTION PERIOD</p>
                          <p>{transactions.protection_period ? transactions.protection_period : '-'}</p>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="8">
                  <CCard>
                    <CCardHeader color="gradient-info" className="text-white text-center">
                      <h3>Transaction Detail</h3>
                      <p>Product, Policy Holder, Insured, Beneficiary and Miscellaneous Info</p>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                          <CCol xs="12" sm="12">
                            <p className="text-muted lead">Product Info</p>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Product Slug</strong></p>
                            <p className="text-muted">{transactions.product_slug}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Product Code</strong></p>
                            <p className="text-muted">{transactions.product_code}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Product Plan Code</strong></p>
                            <p className="text-muted">{transactions.product_plan_code}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Rider Codes</strong></p>
                            <p className="text-muted">{transactions.rider_codes ? transactions.rider_codes : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <hr className="my-2" />
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="12">
                            <p className="text-muted lead">Policy Holder Info</p>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Name</strong></p>
                            <p className="text-muted">{transactions.holder_name}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Gender</strong></p>
                            <p className="text-muted">{transactions.holder_gender}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Email</strong></p>
                            <p className="text-muted">{transactions.holder_email}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Date of Birth</strong></p>
                            <p className="text-muted">{transactions.holder_dob ? transactions.holder_dob : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Place of Birth</strong></p>
                            <p className="text-muted">{transactions.holder_pob ? transactions.holder_pob : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder ID Card Number</strong></p>
                            <p className="text-muted">{transactions.holder_id_card_number ? transactions.holder_id_card_number : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Mobile Number</strong></p>
                            <p className="text-muted">{transactions.holder_mobile_number ? transactions.holder_mobile_number : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Telephone Number</strong></p>
                            <p className="text-muted">{transactions.holder_telephone_number ? transactions.holder_telephone_number : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Marriage</strong></p>
                            <p className="text-muted">{transactions.holder_marriage ? transactions.holder_marriage : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Address</strong></p>
                            <p className="text-muted">{transactions.holder_address ? transactions.holder_address : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder City</strong></p>
                            <p className="text-muted">{transactions.holder_city ? transactions.holder_city : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Holder Postal Code</strong></p>
                            <p className="text-muted">{transactions.holder_postal_code ? transactions.holder_postal_code : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <hr className="my-2" />
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="12">
                            <p className="text-muted lead">Insured Info</p>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Insured Name</strong></p>
                            <p className="text-muted">{transactions.insured_name}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Insured Gender</strong></p>
                            <p className="text-muted">{transactions.insured_gender ? transactions.insured_gender : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Insured For</strong></p>
                            <p className="text-muted">{transactions.insured_for}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Insured Date of Birth</strong></p>
                            <p className="text-muted">{transactions.insured_dob}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Insured ID Card Number</strong></p>
                            <p className="text-muted">{transactions.insured_id_card_number ? transactions.insured_id_card_number : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <hr className="my-2" />
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="12">
                            <p className="text-muted lead">Beneficiary Info</p>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Beneficiary Name</strong></p>
                            <p className="text-muted">{transactions.beneficiary_name ? transactions.beneficiary_name : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Beneficiary Gender</strong></p>
                            <p className="text-muted">{transactions.beneficiary_gender ? transactions.beneficiary_gender : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Beneficiary For</strong></p>
                            <p className="text-muted">{transactions.beneficiary_for ? transactions.beneficiary_for : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Beneficiary Date of Birth</strong></p>
                            <p className="text-muted">{transactions.beneficiary_dob ? transactions.beneficiary_dob : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Beneficiary ID Card Number</strong></p>
                            <p className="text-muted">{transactions.beneficiary_id_card_number ? transactions.beneficiary_id_card_number : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <hr className="my-2" />
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="12">
                            <p className="text-muted lead">Miscellaneous Info</p>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>File URL</strong></p>
                            <p className="text-muted">{transactions.file_url ? transactions.file_url : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Custom ID</strong></p>
                            <p className="text-muted">{transactions.custom_id ? transactions.custom_id : '-'}</p>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Skip Summary</strong></p>
                            <p className="text-muted">{transactions.skip_summary ? transactions.skip_summary : '-'}</p>
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol xs="12" sm="4">
                            <p><strong>Request Data</strong></p>
                              <code>
                                  {transactions.request_data ? JSON.stringify(transactions.request_data, null, 6) : '-'}
                              </code>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Response Data</strong></p>
                            <code>
                                  {transactions.response_data ? JSON.stringify(transactions.response_data, null, 6) : '-'}
                            </code>
                          </CCol>
                          <CCol xs="12" sm="4">
                            <p><strong>Validation Message</strong></p>
                            <code>
                                  {transactions.validation_message ? transactions.validation_message : '-'}
                            </code>
                          </CCol>
                        </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
        </CCol>
      </CRow>
      
    </>
  )
}

export default TransactionDetail
