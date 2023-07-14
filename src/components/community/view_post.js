import { useState } from 'react';
import HitIcon from "./img/hit.png";
import CommentIcon from './img/Comments.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function V_post({title, contents, ensname, created_at, p_id, commentCount}) {
  
  console.log(p_id)
  const navigate = useNavigate();
  
  // 타임 변환
  const formatTimestamp = () => {
    const date = new Date(created_at);
    
    return date.toLocaleString();
  };
  
  const formattedCreatedAt = formatTimestamp();
  

  const post_modify = () => {
    navigate("/community_modify/"+p_id)
  };

  const post_del = async () => {
    await axios.get("https://1d61-119-192-224-93.ngrok-free.app/board/contentdel?id=" + p_id)
      .then(response => {
        console.log('글이 성공적으로 삭제되었습니다.');
        navigate("/community")
      })
      .catch(error => {
        console.error('글 삭제 중 에러 발생:', error);
      });
  };


  return(
    <div>
      <a>
      <div className="cm-post-box-view">
        <div className="cm-user">
          <div className='cm-us-in'>
            <div className='cm-user-info'>
              <span className='v-post-n'>{ensname}</span>
              {/* <span className='v-post-t'>{created_at}</span> */}
              <span className='v-post-t'>{formattedCreatedAt}</span>
            </div>
            <div className='cm-post-btn-list'>
              <button className='post-btn' onClick={() => post_modify()}>수정</button>
              <button className='post-btn' onClick={() => post_del()}>삭제</button>
            </div>
          </div>
            <div className='cm-view-ct-info'>
              <div className="cm-view-id">
                <p hidden>{p_id}</p>
              </div>
              <div className="cm-view-title">
                <p>{title}</p>
              </div>
              <div className="cm-view-content">
                <p>{contents}</p>
              </div>
            </div>
            <div className='cm-us-st'>
              <div className='cm-post-icon'>
              <div class="post-btn-box">
                <div class="btn-list">
                  <span class="cm-btn">
                    <img src={CommentIcon} width="20" height="20" />
                    <span class="btn-num">{commentCount}</span>
                  </span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default V_post;