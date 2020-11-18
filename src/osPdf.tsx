import React from 'react'
import { Text, View, Document, Page, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';

interface PdfProps {
  address: string;
  cpf: string;
  cnpj: string;
  cep: string;
  date: string;
  name: string;
  inscEstad: string;
  inscMun: string;
  bairro: string;
  city: string;
  phone: string;
  represent: string;
  email: string;
  obs: string;
  proposta: string;
  itensList: { 
    quant: number;
    description: string; 
    value: string;
  }[];
}

const BORDER_COLOR = '#bfbfbf'
const BORDER_STYLE = 'solid'

const styles = StyleSheet.create({
  body: {
    padding: '20 20 90 20'
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  },    
  tableCol: { 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 500
  },
  centerTextTableCell: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableCell: { 
    margin: 5, 
    fontSize: 10 
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    marginHorizontal: 14,
    marginVertical: 4,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const OsBoleto: React.FC<PdfProps> = ({
  address,
  cpf,
  cnpj,
  cep,
  date,
  name,
  inscEstad,
  inscMun,
  bairro,
  city,
  proposta,
  phone,
  represent,
  itensList,
  obs,
  email,
}) => {
  function formatReal(real: string): string {
    return `R$ ${real}`
  }

  function getTotal(): string {
    let total = 0
    itensList.forEach(i => total += i.quant * Number(i.value.replace(',', '.')))
    return formatReal(total.toFixed(2).toString().replace('.', ','))
  }
  
  return (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>ORDEM DE COMPRA/ PROPOSTA</Text>
      <View style={[styles.table, { marginTop: 10 }]}> 
        <View style={styles.tableRow}> 
          <View style={[styles.tableCol, { width: '30%' }]}> 
            <Text style={styles.tableCellHeader}>Nº da Proposta</Text> 
          </View> 
          <View style={[styles.tableCol, { width: '70%' }]}> 
            <Text style={styles.tableCellHeader}>{proposta}</Text> 
          </View> 
        </View>       
      </View>
      <View style={[styles.table, {marginTop: '10px'}]}> 
        <View style={styles.tableRow}> 
          <View style={[styles.tableCol, { width: '20%' }]}> 
            <View style={styles.centerTextTableCell}> 
              <Text style={styles.tableCellHeader}>Fonte pagadora</Text> 
            </View> 
          </View> 
          <View style={[styles.tableCol, { width: '80%' }]}> 
            <Text style={styles.text}>{`Razão Social/ Pessoa Física: ${name}`}</Text>

            <Text style={styles.text}>{`Data de Nascimento: ${date}`}</Text>               

            <Text style={styles.text}>{`CNPJ: ${cnpj}`}</Text>           

            <Text style={styles.text}>{`Inscrição Estadual: ${inscEstad}`}</Text>

            <Text style={styles.text}>{`Inscrição Municipal: ${inscMun}`}</Text>

            <Text style={styles.text}>{`Endereço: ${address}`}</Text>

            <Text style={styles.text}>{`Bairro: ${bairro}`}</Text>

            <Text style={styles.text}>{`Cidade: ${city}`}</Text>

            <Text style={styles.text}>{`CEP: ${cep}`}</Text>

            <Text style={styles.text}>{`Representante Legal: ${represent}`}</Text>

            <Text style={styles.text}>{`CPF: ${cpf}`}</Text>

            <Text style={styles.text}>{`Telefone: ${phone}`}</Text>

            <Text style={styles.text}>{`E-mail: ${email}`}</Text>
          </View> 
        </View>       
      </View>
      <View style={[styles.table, {marginTop: '10px'}]}> 
        <View style={styles.tableRow}> 
          <View style={[styles.tableCol, {width: '100%'}]}> 
            <View style={styles.centerTextTableCell}> 
              <Text style={styles.tableCellHeader}>Orçamento</Text> 
            </View> 
          </View> 
        </View> 
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '18%' }]}> 
            <Text style={styles.text}>Quantidade</Text>
          </View> 
          <View style={[styles.tableCol, { width: '46%' }]}> 
            <Text style={styles.text}>Especificação</Text>
          </View> 
          <View style={[styles.tableCol, { width: '20%' }]}> 
            <Text style={styles.text}>Valor unitário</Text>
          </View> 
          <View style={[styles.tableCol, { width: '16%' }]}> 
            <Text style={styles.text}>Valor total</Text>
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '18%' }]}> 
            {itensList.map(i => <Text key={i.description} style={styles.text}>{i.quant}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '46%' }]}> 
            {itensList.map(i => <Text key={i.description} style={styles.text}>{i.description}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '20%' }]}> 
            {itensList.map(i => <Text key={i.description} style={styles.text}>{formatReal(i.value)}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '16%' }]}>
            <Text style={styles.text}>{getTotal()}</Text>
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '100%' }]}> 
            <Text style={styles.text}>{`Observações: ${obs}`}</Text>
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '100%' }]}> 
            <View style={styles.centerTextTableCell}> 
              <Text style={styles.text}>Dados da Fatura</Text>
            </View> 
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '33%' }]}> 
            <Text style={styles.text}>Tipo de Fatura</Text>
          </View> 
          <View style={[styles.tableCol, { width: '33%' }]}> 
            <Text style={styles.text}>Condições de Pagamento</Text>
          </View> 
          <View style={[styles.tableCol, { width: '34%' }]}> 
            <Text style={styles.text}>Formas de Pagamento</Text>
          </View> 
        </View>    
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '33%' }]}> 
            <Text style={styles.text}>Faturado pela Fade-UFPE</Text>
          </View> 
          <View style={[styles.tableCol, { width: '33%' }]}> 
            <Text style={styles.text}>Boleto Bancário</Text>
          </View> 
          <View style={[styles.tableCol, { width: '34%' }]}> 
            <Text style={styles.text}>Parcela única</Text>
          </View> 
        </View>    
      </View>
      <View style={[styles.table, {marginTop: '10px'}]}> 
        <View style={styles.tableRow}> 
          <View style={[styles.tableCol, {width: '100%'}]}> 
            <View style={styles.centerTextTableCell}> 
              <Text style={styles.tableCellHeader}>Termos e Condições</Text> 
            </View> 
          </View> 
        </View> 
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '100%' }]}> 
            <Text style={styles.text}>1. A presente proposta vincula-se ao Convênio de Arrecadação n° 1072.11.0320 - UFPB | FADE - FABLAB UFPB; Incentivando a Tecnologia e a Criatividade</Text>
            <Text style={styles.text}>4. A CONTRATANTE compromete-se a efetuar o pagamento dos excedentes até o vencimento do boleto respectivo, sob pena da CONTRATADA suspender a entrega dos excedentes pela inadimplência do pagamento.</Text>
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '45%' }]}> 
            <Text style={styles.text}>Local e Data</Text>
          </View> 
          <View style={[styles.tableCol, { width: '55%' }]}> 
            <Text style={styles.text}>Assinatura e Carimbo do Representante Legal</Text>
          </View>
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '45%' }]}> 
            <Text style={styles.text}>{`João Pessoa, PB – ${format(new Date(), 'dd/MM/yyyy')}`}</Text>
          </View> 
          <View style={[styles.tableCol, { width: '55%' }]}> 
            <Text style={styles.text}></Text>
          </View> 
        </View>   
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `FABLAB - Laboratório de Fabricação Digital\nUniversidade Federal da Paraíba\n${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
)};

export default OsBoleto