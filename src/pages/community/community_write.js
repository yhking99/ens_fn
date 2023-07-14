import './community_write.css';
import { Cm_wrap } from './cm_main_css';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';
import { Wallet } from 'ethers';
import useWalletAddress from '../../hooks/useWalletAddress';



function Community_write() {

  
    const location = useLocation();
    console.log('state' + location.state);

    const [userId, setUserId] = useState(
      location.state?.data.id
    
    );

    const [ensname, setEnsname] = useState(
      location.state?.data.ensname
    )

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@' + location.state.data.ensname)

  // Ensuser();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user_id, setUser_id] = useState(userId);
  const walletAddress = useWalletAddress();
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.user_id)

    try {
      // const response = await axios.post('http://172.30.1.14:3000/board/boardregister', {
      const response = await axios.post('https://1d61-119-192-224-93.ngrok-free.app/board/boardregister', {
        user_id: userId,
        _title: title,
        _content: content
      });
      console.log("response : ", response);
      window.alert('등록이 완료되었습니다');
      navigate('/community');
    } catch (error) {
      console.error(error);
      window.alert('오류가 발생했습니다');
      // navigate(-1);
    }
  };



  return(
    <div className="Community">
      <Cm_wrap>
        <div className="cm-box">
          <div class="cm-header">
            <div className="cm-title">
              <h1>Community</h1>
            </div>
          <div class="hr-box">
            <hr/>
          </div>
          </div>
        <div class="cm-box-write">
        <form onSubmit={handleSubmit}>
        <div className="post-wr-box">
          <div className="post-user-info">
            <div className='post-user'>
              {/* <span>{ensname}</span> */}
            </div>
          </div>
          <div className="post-ensname">
            <input
              type='text'
              className="post-title-input"
              name="ensname"
              value={ensname}
              onChange={(event) => setEnsname(event.target.value)}
            />
          </div>
          <div className="post-title">
            <input
              type='text'
              placeholder="제목을 입력해 주세요."
              minlength='3'
              maxlength='20'
              className="post-title-input"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <input 
            type='hidden'
            name='_id'
            value={user_id}
            onChange={(event) => setUser_id(event.target.value)}
            />
          <div className="post-content-box">
            <div className="post-content">
              <textarea
                className="post-info-txt"
                placeholder="근거없는 비방 글, 광고성 게시글은 삭제될 수 있습니다."
                name='content'
                value={content}
                onChange={(event) => setContent(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="post-upload">
            <button type="submit" className="upload-btn">
              등록
            </button>
          </div>
        </div>
      </form>
        </div>
      </div>
    </Cm_wrap>
  </div>
  )
}

export default Community_write