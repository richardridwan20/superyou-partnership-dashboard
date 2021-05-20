import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import UploadService from '../../services/UploadService'
import { DocsLink } from 'src/reusable'

const Upload = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  const useFormInput = initialValue => {
    const [value, setValue] = React.useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  const [selectedFile, setSelectedFile] = React.useState()
  const [progress, setProgress] = React.useState(0)
  const [message, setMessage] = React.useState()
  const [loading, setLoading] = React.useState(false);
  const file = useFormInput('');

  const handleUpload = () => {
    setLoading(true);
    UploadService.uploadExcel(file.value)
    .then((res) => {
      setLoading(false);
      console.log(file.value)
    }).catch((error) => {
      // setTransactions({})
      console.log(error)
    }) 
  }


  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Bulk Upload
              <small> Excel Form</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CLabel col md={3}>Excel File</CLabel>
                  <CCol xs="12" md="8">
                    <CInputFile custom id="file" name="file"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              {/* <CInput type="button" color="primary" className="px-4" onClick={handleUpload} value={loading ? 'Loading...' : 'Submit'} disabled={loading}></CInput> */}
              <CButton type="submit" size="sm" color="primary" onClick={handleUpload}><CIcon name="cil-scrubber" />{loading ? ' Loading...' : ' Submit'}</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Upload
