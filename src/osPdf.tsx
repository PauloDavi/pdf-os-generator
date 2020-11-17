import React from 'react'
import { Text, View, Document, Page, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';

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

const items = [
  {
    quant: 1,
    description: '132 cm^2 Corte CNC PCB',
    value: 20,
  },
  {
    quant: 2,
    description: 'Setup Corte CNC PCB',
    value: 20,
  },
  {
    quant: 4,
    description: 'Impressão 3D',
    value: 30,
  },
]

function formatReal(real: number): string {
  return `R$ ${real.toFixed(2).toString().replace('.', ',')}`
}

function getTotal(): string {
  let total = 0
  items.forEach(i => total += i.quant * i.value)
  return formatReal(total)
}

const OsBoleto = ({address}: {address: string}) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>ORDEM DE COMPRA/ PROPOSTA</Text>
      <View style={[styles.table, { marginTop: 10 }]}> 
        <View style={styles.tableRow}> 
          <View style={[styles.tableCol, { width: '30%' }]}> 
            <Text style={styles.tableCellHeader}>Nº da Proposta</Text> 
          </View> 
          <View style={[styles.tableCol, { width: '70%' }]}> 
            <Text style={styles.tableCellHeader}>22/2020</Text> 
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
            <Text style={styles.text}>Razão Social/ Pessoa Física: Fernanda Maria Lima Fernandes – Pessoa Física</Text>

            <Text style={styles.text}>Data de Nascimento: 30/07/2001  </Text>               

            <Text style={styles.text}>CNPJ:</Text>           

            <Text style={styles.text}>Inscrição Estadual: isento</Text>

            <Text style={styles.text}>Inscrição Municipal: isento</Text>

            <Text style={styles.text}>{`Endereço: ${address}`}</Text>

            <Text style={styles.text}>Bairro: Jardim Cidade Universitária</Text>

            <Text style={styles.text}>Cidade: João Pessoa</Text>

            <Text style={styles.text}>CEP: 58052-290</Text>

            <Text style={styles.text}>Representante Legal:</Text>

            <Text style={styles.text}>CPF: 099256014-44</Text>

            <Text style={styles.text}>Telefone: (83) 993003902</Text>

            <Text style={styles.text}>E-mail: Fernanda.fernandes@cear.ufpb.br</Text>
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
            {items.map(i => <Text key={i.description} style={styles.text}>{i.quant}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '46%' }]}> 
            {items.map(i => <Text key={i.description} style={styles.text}>{i.description}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '20%' }]}> 
            {items.map(i => <Text key={i.description} style={styles.text}>{formatReal(i.value)}</Text>)}
          </View> 
          <View style={[styles.tableCol, { width: '16%' }]}>
            <Text style={styles.text}>{getTotal()}</Text>
          </View> 
        </View>       
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '100%' }]}> 
            <Text style={styles.text}>Observações:</Text>
            <Text style={styles.text}>Nada a observar</Text>
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
);

export default OsBoleto