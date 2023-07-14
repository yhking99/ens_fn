import { useState, useEffect } from 'react';
import CommentIcon from './img/Comments.png'
import HitIcon from "./img/hit.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useWalletAddress from '../../hooks/useWalletAddress';

// function post_detail(id) {
//   const navigate = useNavigate()
//   const wallet = useWalletAddress()
  
//   const data = {"id" : id, "wallet" : wallet}
//   axios.post ("http://172.30.1.14:3000/board/boardDetail", data)
//   .then (response => {
//     navigate('community_view', {
//       state: {
//         data : response
//       }
//     })
//   })
  
// }

function Main_post() {
  
  const navigate = useNavigate()
  // back서버 전체 게시글
  const [posts, setPosts] = useState([]);
  
  
  useEffect(() => {
    // 서버에서 게시글 데이터
    // axios.get('http://172.30.1.14:3000/board')
    axios.get('https://1d61-119-192-224-93.ngrok-free.app/board')
    .then(response => {
      console.log('>>>>',response.data.data)
      setPosts(response.data.data);
      
    })
    .catch(error => {
      // handle error
      if (error.message == 'Network Error') {
        console.error('There was a network error!');
      } else {
        console.error(error.message);
      }
    });
  }, []);
  
  // 타임 변환
  const formatTimestamp = (date_map) => {
    const date = new Date(date_map);
    
    return date.toLocaleString();
  };
  

  return(
    <div>
    {
      posts.map(function(a,i){    
        return (
          <div onClick={() => navigate(`/community/community_view/${a.id}`)}>
          <div class="post-box">
            <div class="post-info-box">
              <div class="post-info">
                <span>{a.ensname}</span>
                <span>{formatTimestamp(a.created_at)}</span>
              </div>
            </div>
            <div class="main-post-content-box">
              <div class="main-post-content">
                <h2 className='post-ct-title'>{a.title}</h2>
                <p className='post-ct-ct'>{a.contents}</p>
              </div>
            </div>
            <div class="post-btn-box">
              <div class="btn-list">
                <span class="cm-btn">
                  <img src={CommentIcon} width="20" height="20" />
                  <span class="btn-num">{a.commnet_count ??0}</span>
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )
    })
  }
</div>

)
}


export default Main_post;