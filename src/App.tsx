import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import OsBoleto from './osPdf'
import { TextField } from '@material-ui/core'

function App() {
  const [address, setAddress] = useState('')

  return (
    <div>
      <form>
        <TextField label="Endereço" onChange={(e) => setAddress(e.currentTarget.value)} variant="outlined"/>
        <TextField label="Cpf" variant="outlined"/>
        <TextField label="Cnpj" variant="outlined"/>
        <TextField label="Telefone" variant="outlined"/>
      </form>
      <PDFDownloadLink document={<OsBoleto address={address} />} fileName="osBoleto.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
      <PDFViewer children={<OsBoleto address={address} />} style={{height: '100vh', margin: 0, padding: 0}} width={650}/>
    </div>
  );
}

export default App;
