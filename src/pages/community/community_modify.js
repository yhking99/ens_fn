import { Cm_wrap } from './cm_main_css';
import './community_write.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from 'react';
import useWalletAddress from '../../hooks/useWalletAddress';

function Community_modify() {
  const params = useParams();
  const navigate = useNavigate()
  const [data, setData]=useState(null);

  const [title, setTitle]=useState('');
  const [contents, setContents] = useState('');

  const location = useLocation();
    console.log('state' + location.state);

    const [ensname, setEnsname] = useState(
      location.state?.data.ensname
    )
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@' + location.state.data.ensname)


  const walletAddress = useWalletAddress();

  useEffect(() => {
    if(!params?.id) return;
    const getData  = async () => {

  const body = {"id" : params?.id, "wallet" : walletAddress}
  // const { data } =await axios.post ("http://172.30.1.14:3000/board/boardDetail", body)
  const { data } =await axios.post ("https://1d61-119-192-224-93.ngrok-free.app/board/boardDetail", body)

  console.log(data)

  setTitle(data.posts.title)
  setContents(data.posts.contents)
  setEnsname(data.posts.ensname)

  setData(data);


    }
    getData();
  },[params])

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    // await axios.post('http://172.30.1.14:3000/board/boardup', {
    await axios.post('https://1d61-119-192-224-93.ngrok-free.app/board/boardup', {
      _id : params.id,
      _content : contents
      
    })
    window.alert('게시물 수정이 완료되었습니다.');
    window.alert(`/community/community_view/${params.id}`)
    navigate(`/community/community_view/${params.id}`);
    } 

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
          <form method="community-post">
            <div class="post-wr-box">
              <div className='post-user-info'>
                <div className='post-user'>
                  {/* <span>{ensname}</span> */}
                </div>
              </div>
              <div className='post-title'>
                <input className='post-title-input' name='ensname'
                value={ensname} onChange={e => setEnsname(e.target.value)} disabled/>
              </div>
              <div className='post-title'>
                <input className='post-title-input' name='post-title'
                value={title} onChange={e => setTitle(e.target.value)} disabled/>
              </div>
              <div className='post-content-box'>
                <div className='post-content'>
                  <textarea className='post-info-txt'
                    value={contents} 
                    onChange={e => setContents(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className='post-upload'>
                <button className='upload-btn' onClick={ (e) => handlesubmit(e)}>수정</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Cm_wrap>
  </div>
  )
}

export default Community_modify;