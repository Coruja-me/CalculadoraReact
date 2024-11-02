import { Container, Content, Row} from "./styles";
import Input from "./Components/Input";
import Button from "./Components/Button"
import { useState } from "react";


const App = () => {
  const [curNum, setCurNum] = useState('0')
  const [fNum, setFNum] = useState('0')
  const [opp, setOpp] = useState('')

  //Limpar tudo
  const handleOnClear = () => {
    setCurNum('0')
    setFNum('0')
    setOpp('')
  }
  //limpar tela atual
  const handleOnCancelEntry = () => {
    setCurNum('0')
  }
  //Colocar números no visor
  const handleAddNumber = (num) => {
    setCurNum(prev => { 
      if(num === '.' && prev.includes('.')){
        return prev;
      }
    return `${prev === '0' ? '' : prev}${num}`
    })
    }
  //Soma
  const handleSum = () => {
    if(fNum === '0'){
      setFNum(String(curNum))
      setCurNum('0')
      setOpp('+')
    } else {
      const sum = Number(fNum) + Number(curNum)
      setCurNum(String(sum))
      setOpp('')
    }
  }
  //Subtração
  const handleSub = () => {
    if(fNum === '0'){
      setFNum(String(curNum))
      setCurNum('0')
      setOpp('-')
    } else {
      const sub = Number(fNum) - Number(curNum)
      setCurNum(String(sub))
      setOpp('')
    }
  }
  //Multiplicação
  const handleMult = () => {
    if(fNum === '0'){
      setFNum(String(curNum))
      setCurNum('0')
      setOpp('x')
    } else {
      const mult = Number(fNum) * Number(curNum)
      setCurNum(String(mult))
      setOpp('')
    }
  }
  //Divisão
  const handleDiv = () => {
    if(fNum === '0'){
      setFNum(String(curNum))
      setCurNum('0')
      setOpp('/')
    } else {
      const div = Number(fNum) / Number(curNum)
      setCurNum(String(div))
      setOpp('')
    }
  }
  //Potência quadrada
  const handleExp = () => {
      const exp = Number(curNum) * Number(curNum)
      setCurNum(String(exp))
      setOpp('')
  }

  //Igual a
  const handleResult = () => {
    if(fNum !== '0' && opp !== '' && curNum !== '0'){
      switch(opp){
        case '+':
          handleSum();
        break;
        case '-':
          handleSub();
        break;
        case 'x':
          handleMult();
        break;
        case '/':
          handleDiv();
        break;
        default:
        break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={curNum}/>
        <Row>
          <Button label={"x²"} onClick={handleExp}/>
          <Button label={"/"} onClick={handleDiv} />
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"CE"} onClick={handleOnCancelEntry} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"x"} onClick={handleMult} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"-"} onClick={handleSub} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"+"} onClick={handleSum} />
        </Row>
        <Row>
          <Button/>
          <Button label={"0"} onClick={() => handleAddNumber('0')} />
          <Button label={"."} onClick={() => handleAddNumber('.')} />
          <Button label={"="} onClick={handleResult}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
