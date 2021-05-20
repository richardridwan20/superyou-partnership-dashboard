import React from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInputFile,
  CLabel,
  CRow,
  CProgress
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
  const [response, setResponse] = React.useState()
  const [chosen, setChosen] = React.useState(false);

  const handleUpload = () => {
    setProgress(50);
    const fileName = selectedFile.name;
    var ext =  fileName.split('.').pop();
    console.log(ext);

    if(ext == 'xlsx'){
      UploadService.uploadExcel(selectedFile)
      .then((res) => {
        setProgress(100);
        setResponse(res.map((data) => 
        <div>
          <CRow>
            <CCol xs="12" md="4">
              <p key={data.row}>{data.row}</p>
            </CCol>
            <CCol xs="12" md="8">
                <pre><code key={data.row}>{JSON.stringify(data.response, null, 4)}</code></pre>
            </CCol>
          </CRow>
          <hr className="my-2" />
          </div>
        ));
      }).catch((error) => {
        setSelectedFile({});
        setProgress(0);
        setResponse({});
        console.log(error)
      }) 
    }else{
      setSelectedFile({});
      setProgress(0);
      setChosen(false);
    }
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
                    <CInputFile custom id="file" name="file" onChange={(e) => {
                        setSelectedFile(e.target.files[0])
                        setChosen(true)
                      }}/>
                    <CLabel htmlFor="file" variant="custom-file">
                      {selectedFile ? selectedFile.name : 'Select file...'}
                    </CLabel>
                  </CCol>
                </CFormGroup>
                <CProgress showPercentage animated value={progress} className="mb-3" />
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="md" color="primary" onClick={handleUpload} disabled={!chosen}><CIcon name="cil-scrubber" />{chosen ? ' Submit' : ' Please choose file first.'}</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Response
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="4">
                  <p>Row</p>
                </CCol>
                <CCol xs="12" md="8">
                  <p>Response</p>
                </CCol>
              </CRow>
              <hr className="my-2" />
              {response}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Upload
