import { useState } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, BrowserRouter, useLocation} from 'react-router-dom';
import { Detailst, Pagetitle, H1, P, Input, Center, Button } from './detailst';

function Detail(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get('inputValue');
  const [editedValue, setEditedValue] = useState(inputValue);
  const navigate = useNavigate();

  const [ens, setMyens] = useState([]);

  const handleConfirm = () => {
    // Perform any necessary action with the edited value here
    console.log('Edited Value:', editedValue);
  };

  // const handleMoveToMyPage = () => {
  //   // Navigate to "My Page"
  //   navigate('/mypage');
  // };
  const handleMoveToMyPage = () => {
    // Add editedValue to mypage array
    setMyens((prevMypage) => [...prevMypage, editedValue]);
    const updatedMypage = [...ens, editedValue];
    localStorage.setItem('mypage', JSON.stringify(updatedMypage));
        // Navigate to "My Page"
        navigate('/mypage');
      };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
  <Detailst>
    <Pagetitle>
        MAKE ENS
    </Pagetitle>
    <hr />
      <H1>Your ENS</H1>
      <P>{editedValue}</P>

    <Center>
      <Input
       type="text"
        value={editedValue}
        onChange={handleInputChange}
      ></Input>
    </Center>
    <Center>
      <Button onClick={handleConfirm}>MODIFY</Button>
      <Button onClick={handleMoveToMyPage}>CONFIRM</Button>
    </Center>  

  
  </Detailst>
  );
}

export default Detail;

