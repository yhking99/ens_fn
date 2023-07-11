import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import { Makeensst, Pagetitle, Input, Button, Form, H1, P} from './makeensst';
import Detail from './detail';
import styled from 'styled-components';


//user flow: 로그인 with 777 chain - ens page - ens조회 - ens기사용 여부 표시 - 사용가능 - 입력한 ens와 지갑주소 전송 - 둔 ens등록완료 - 마이페이지 이동

/*const checkens = () => {
  { if(ensname == ens){
    alert('this name iis already')
  }else{
    alert('사용가능합니다')
  }
  }
}
*/



function Makeens() {

const [inputValue, setInputValue] = useState('');
const navigate = useNavigate();

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (inputValue && inputValue.length >= 6 && inputValue.length <= 14  && inputValue.endsWith('.eth')) {
    alert('사용이 가능한 이름입니다');
    navigate(`/detail?inputValue=${encodeURIComponent(inputValue)}`);
    // Perform navigation to the next page here
  } else {
    // Proceed with the desired action
    alert('사용불가한 이름입니다 조건을 확인해주세요');
  } 
};

  return (
    <Makeensst>
    <Pagetitle>
      MAKE ENS
    </Pagetitle>
    <hr />
    <br/>
    <H1>Search ENS</H1>
    <br/>
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder='Enter your ENS' value={inputValue} onChange={handleInputChange} />
      <Button type="submit">Search</Button>
    </Form>
    <P>RULE</P>
    <P>- Must only be between 6 and 14 characters.</P>
    <P>- 6글자에서 14글자 사이로만 입력해주세요</P>
    <br/>
    <P>- Must include '.eth'</P>
    <P>- 반드시 '.eth'를 포함해주새요</P>
    </Makeensst>
  );
}




export default Makeens;

