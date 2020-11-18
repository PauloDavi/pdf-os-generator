import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import OsBoleto from './osPdf'
import InputMask from 'react-input-mask';
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import './app.css'
import img from './logo2.png'

function App() {
  const [address, setAddress] = useState('')
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cep, setCep] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [inscEstad, setInscEstad] = useState('isento')
  const [inscMun, setInscMun] = useState('isento')
  const [bairro, setBairro] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [represent, setRepresent] = useState('')
  const [email, setEmail] = useState('')
  const [proposta, setProposta] = useState('')
  const [obs, setObs] = useState('')
  const [state, setState] = useState<'fisica' | 'juridica'>('fisica');
  const [open, setOpen] = useState(false);
  const [itensList, setItensList] = useState([{ quant: 1, description: "", value: "" }]);

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
    let { name, value } = e.target as { value: any, name: 'quant' | 'description' | 'value' };
    if(name === 'quant') {
      value = value > 0 ? value : 1
    }
    const list = [...itensList];
    list[index][name] = value as never;
    setItensList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...itensList];
    list.splice(index, 1);
    setItensList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setItensList([...itensList, { quant: 1, description: "", value: "" }]);
  };

  return (
  <div className="divPrincipal">
      <form className="tamanhoMenor" style={{margin: '50px auto 20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <img style={{margin: 'auto'}} src={img} width={300} alt="logo"/>
      <h1 style={{ textAlign: 'center' }}>ORDEM DE COMPRA/ PROPOSTA</h1>
      <Select
        style={{width: '100%', marginBottom: 10}}
        variant="outlined"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={state}
        onChange={e => setState(e.target.value as 'fisica' | 'juridica')}
      >
        <MenuItem value="fisica">Pessoa Física</MenuItem>
        <MenuItem value="juridica">Pessoa Jurídica</MenuItem>
      </Select>
          <div className="memor2" style={{display: 'flex'}}>
          <div className="inputmemor1" style={{display: 'flex', flexDirection: 'column'}}>
          <InputMask mask="99/9999" type="number" onChange={e => setProposta(e.currentTarget.value)}>
            {() => <TextField label="Nº da Proposta" variant="outlined"/>}
          </InputMask>
  
          <TextField style={{marginTop: 10}} label="Razão Social/ Pessoa Física" variant="outlined" onChange={e => setName(e.currentTarget.value)}/>

          {state === "fisica" && <InputMask mask="99/99/9999" type="data" onChange={e => setDate(e.currentTarget.value)}>
            {() => <TextField style={{marginTop: 10}} label="Data de Nascimento" variant="outlined"/>}
          </InputMask>}

          {state === "fisica" && <InputMask mask="999.999.999-99" type="number" onChange={e => setCpf(e.currentTarget.value)}>
            {() => <TextField style={{marginTop: 10}} label="CPF" variant="outlined"/>}
          </InputMask>}

          {state === "juridica" && <InputMask mask="999.999.999-99" type="number" onChange={e => setCnpj(e.currentTarget.value)}>
            {() => <TextField style={{marginTop: 10}} label="CNPJ" variant="outlined"/>}
          </InputMask>}

          {state === "juridica" && <TextField style={{marginTop: 10}} label="Inscrição Estadual" value={inscEstad} onChange={e => setInscEstad(e.currentTarget.value)} variant="outlined"/>}

          {state === "juridica" && <TextField style={{marginTop: 10}} label="Inscrição Municipal" value={inscMun} onChange={e => setInscMun(e.currentTarget.value)} variant="outlined"/>}
          
          <TextField label="Endereço" style={{marginTop: 10}}  onChange={(e) => setAddress(e.currentTarget.value)} variant="outlined"/>
        </div>

        <div className="inputmemor2" style={{display: 'flex', flexDirection: 'column'}}>

          <TextField label="Bairro" onChange={(e) => setBairro(e.currentTarget.value)} variant="outlined"/>

          <TextField style={{marginTop: 10}} label="Cidade" onChange={(e) => setCity(e.currentTarget.value)} variant="outlined"/>

          <InputMask mask="99999-999" type="number" onChange={e => setCep(e.currentTarget.value)}>
            {() => <TextField style={{marginTop: 10}} label="CEP" variant="outlined"/>}
          </InputMask>

          {state === "juridica" && <TextField style={{marginTop: 10}} label="Representante Legal" onChange={(e) => setRepresent(e.currentTarget.value)} variant="outlined"/>}

          <InputMask mask="(99) 99999-9999" type="tel" onChange={e => setPhone(e.currentTarget.value)}>
            {() => <TextField style={{marginTop: 10}} label="Telefone" variant="outlined"/>}
          </InputMask>

          <TextField style={{marginTop: 10}} label="E-mail" onChange={e => setEmail(e.currentTarget.value)} type="email" variant="outlined"/>
          </div>
          </div>

          <TextField 
            style={{marginTop: 10, width: '100%'}} 
            label="Observações"
            name="obs"
            multiline
            variant="outlined"
            rows={4}
            onChange={e => setObs(e.currentTarget.value)}
          />

          <hr color="#222222" style={{width: '100%', marginTop: 25, marginBottom: 15  }}/>

          <div>
            {itensList.map((x, i) => {
              return (
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <TextField 
                    style={{marginTop: 10, width: 80}} 
                    label="Quant."
                    variant="outlined"
                    name="quant"
                    type="number"
                    value={x.quant}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <TextField 
                    style={{marginTop: 10, width: '55%', marginLeft: 10}} 
                    label="Descrição"
                    name="description"
                    variant="outlined"
                    value={x.description}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <CurrencyTextField
                    style={{marginTop: 10, width: 120, marginLeft: 10}} 
                    label="Valor Un."
                    variant="outlined"
                    name="value"
                    decimalCharacter=","
                    digitGroupSeparator=""
                    minimumValue={0}
                    maximumValue={100000}
                    decimalPlacesShownOnFocus={2}
                    decimalPlaces={2}
                    currencySymbol="R$ "
                    outputFormat="string"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, value: string) => handleInputChange(e, i)}
                  />
                  <div style={{marginLeft: 'auto'}}>
                    <Button
                      variant="contained" style={{height: 64, marginLeft: 10, marginTop: 10, width: 48, borderRadius: '50%' }} onClick={() => handleRemoveClick(i)}>
                        <DeleteOutlineIcon />
                      </Button>
                  </div>
                </div>
              );
            })}

            <Button variant="contained" style={{height: 56, width: '100%', marginTop: 10}} onClick={handleAddClick}>Adicionar Item</Button>
          </div>

      </form>
      <div className="pdfContent">
      <h2 className="labelPdf">Pre-visualização</h2>

      <PDFViewer className="pdfView tamanhoMenor3" children={<OsBoleto
        itensList={itensList}
        obs={obs}
        address={address}
        proposta={proposta}
        cpf={cpf}
        cnpj={cnpj}
        cep={cep}
        date={date}
        name={name}
        inscEstad={inscEstad}
        inscMun={inscMun}
        bairro={bairro}
        city={city}
        phone={phone}
        represent={represent}
        email={email}
      />}/>
      <Button className="button" variant="contained" style={{width: '100%', marginTop: 10, height: 52, padding: 0}}>
          <PDFDownloadLink style={{width: '100%', height: '100%', textDecoration: 'none', color: '#222222', display: 'flex', alignItems: 'center', justifyContent: 'center'}} document={<OsBoleto
            address={address}
            itensList={itensList}
            obs={obs}
            cpf={cpf}
            cnpj={cnpj}
            cep={cep}
            date={date}
            name={name}
            inscEstad={inscEstad}
            inscMun={inscMun}
            bairro={bairro}
            city={city}
            proposta={proposta}
            phone={phone}
            represent={represent}
            email={email}
          />} fileName={`boleto-${proposta.replace('/', '-')}.pdf`}>
            {({ blob, url, loading, error }) => (loading ? 'Fazendo Download...' : 'Baixar PDF')}
          </PDFDownloadLink>
          </Button>
      </div>
    </div>
  );
}

export default App;
