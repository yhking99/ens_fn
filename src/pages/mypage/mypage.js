import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet, useLocation} from 'react-router-dom';
import styled, { css } from 'styled-components';
import ensnft from './img/ens1.png';
import docs from './img/docs.svg'
import comment from './img/comment.svg'
import { Mypagest, Pagetitle, Box, Minibox, Nft, Icon, Myname, Myaddress, Button } from './mypagest';
import useWalletAddress from '../../hooks/useWalletAddress';

export const mypage = [];

function Mypage() {
  // const mypage = JSON.parse(localStorage.getItem('mypage')) || [];

  const [mypage, setMypage] = useState([]);
  const location = useLocation();
  const walletAddress = useWalletAddress();

  useEffect(() => {
    const storedMypage = JSON.parse(localStorage.getItem('mypage')) || [];
    setMypage(storedMypage);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get('inputValue');

    if (inputValue) {
      const updatedMypage = [...mypage, inputValue];
      setMypage(updatedMypage);
      localStorage.setItem('mypage', JSON.stringify(updatedMypage));
    }
  }, [location.search, mypage]);

  // const { copyToClipboard, isCopied } = useClipboard();

  // const handleCopyClick = () => {
  //   const textToCopy = wallet_address;
  //   copyToClipboard(textToCopy);
  // };
	// const handleCopyClipBoard = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert("클립보드에 링크가 복사되었어요.");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
  <Mypagest>
    <Pagetitle>
      MYPAGE
    </Pagetitle>
    <hr />
    
    <div>

    </div>
    <Box>
    <h5>INFORMATION</h5>
    <hr/>
    <Myname>1234.eth</Myname>
      <Minibox wi='15vw' he='10vw'>
        <Icon src={docs}/><br/>
        <p>WROTE</p> 
        <p>1</p>
      </Minibox>
      <Minibox>
        <Icon src={comment}/><br/>
        <p>COMMENT</p> 
        <p>1</p> 
      </Minibox>

      <Myaddress wi='40vw' he='10vw' dp='block'>
        <p>address</p>
        <p>{walletAddress}</p>
        <Button>Paste Address</Button>
      </Myaddress>
    </Box>
    <Pagetitle>
      COLLECTION
    </Pagetitle>
    <hr />
    <Box>
      <Nft src={ensnft} />
      {mypage.map((item, index) => (<p key={index}>{item}</p>))}
      <Button>Detail</Button>
    </Box>
  </Mypagest>
  );
}

export default Mypage;