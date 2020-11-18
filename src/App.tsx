import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import OsBoleto from './osPdf'
import InputMask from 'react-input-mask';
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

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
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: '95vh', padding: 10}}>
      <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 1000}}>
        <img style={{margin: 'auto'}} src="/logo2.png" width={300} alt="logo"/>
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
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: 500}}>
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

          {state === "juridica" && <TextField style={{marginTop: 10}} label="Inscrição Estadual" onChange={e => setInscEstad(e.currentTarget.value)} variant="outlined"/>}

          {state === "juridica" && <TextField style={{marginTop: 10}} label="Inscrição Municipal" onChange={e => setInscMun(e.currentTarget.value)} variant="outlined"/>}
          
          <TextField label="Endereço" style={{marginTop: 10}}  onChange={(e) => setAddress(e.currentTarget.value)} variant="outlined"/>
        </div>

        <div  style={{display: 'flex', flexDirection: 'column', marginLeft: 10, width: 500}}>

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
                    {itensList.length !== 1 && <Button
                      variant="contained" style={{height: '100%', marginRight: 4, marginTop: 10}} onClick={() => handleRemoveClick(i)}>Remover</Button>}
                    {itensList.length - 1 === i && <Button variant="contained" style={{height: '100%', marginTop: 10}} onClick={handleAddClick}>Adicionar</Button>}
                  </div>
                </div>
              );
            })}
          </div>
          <PDFDownloadLink style={{textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #000000', borderRadius: 2, marginTop: 10, height: 52, backgroundColor: '#525252'}} document={<OsBoleto
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
          />} fileName="boleto.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Fazendo Download...' : 'Baixar PDF')}
          </PDFDownloadLink>
      </form>
      <PDFViewer children={<OsBoleto
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
      />} style={{height: '100%', margin: 0, padding: 0}} width={650}/>
    </div>
  );
}

export default App;
