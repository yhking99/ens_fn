import axios from "axios";
import { useState } from "react";
import useWalletAddress from "../../hooks/useWalletAddress";
import { useParams } from "react-router-dom";

function Reple_write({writerId, onRefresh}) {

  // const walletAddress = useWalletAddress

  const params = useParams();

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      // axios.post("http://172.30.1.14:3000/board/commentAdd", { content: text, writer_id: writerId, post_id:parseInt( params.id ,10)})
      axios.post("https://1d61-119-192-224-93.ngrok-free.app/board/commentAdd", { content: text, writer_id: writerId, post_id:parseInt( params.id ,10)})
        .then((response) => {
          const newReply = response.data;
          setText('');
          window.alert('댓글 작성에 성공했습니다.')
          onRefresh();
        })
        .catch((error) => {
          window.alert('에러 발생')
          console.error('댓글 작성 실패:', error);
        })
    }
  };



  return(
    <div>
      <div className='reply-write'>
        <div className='rp-wr-user-box'>
          <span className='rp-wr-user-name'>test.eth</span>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <div>
          <textarea
            className='rp-wr-txt'
            placeholder='근거없는 비방 글, 광고성 댓글은 삭제될 수 있습니다.'
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <div className="btn-box">
            <button type='submit' className="reply-btn" onClick={handleSubmit}>작성</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reple_write;