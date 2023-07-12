import './community_view.css';
import { Cm_wrap } from './cm_main_css';
import Reply from '../../components/community/view_reply';
import Reple_write from '../../components/community/view_reply_write';
import V_post from '../../components/community/view_post';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import useWalletAddress from '../../hooks/useWalletAddress';
import axios from 'axios'

function Community_view() {
  const params = useParams();

  const [data, setData]=useState(null);
  const walletAddress = useWalletAddress();

  const comments = useMemo(() => {
    if(!data)return [];
    const comm =  data.comments.sort((a,b) => b.id - a.id);
    console.log({comm});
    return comm;
  },[data]);


  const getData  = async () => {

    const body = {"id" : params?.id, "wallet" : walletAddress}
    // const { data } = await axios.post ("http://172.30.1.14:3000/board/boardDetail", body)
    const { data } = await axios.post ("https://1d61-119-192-224-93.ngrok-free.app/board/boardDetail", body)
  
    console.log('llllllll',data)
  
    setData(data);
  
  
      }

  useEffect(() => {
    console.log(params)
    if(!params?.id) return;
 
    getData();
  },[params])


if(!data) return null;

  return(
    <div className="Community">
      <Cm_wrap>
        <div className="cm-box">
          <div className="cm-header">
            <div class="cm-title">
              <h1>Community</h1>
            </div>
          </div>
          <div class="hr-box">
            <hr/>
          </div>
        <div className="cm-box-2">
          <div className='cm-view-box'>
            <V_post title={data.posts.title} contents={data.posts.contents} ensname={data.posts.ensname} created_at={data.posts.created_at} p_id={data.posts.id} commentCount={comments.length ?? 0}></V_post>
            <hr/>
          <div className="post-reply-view">
            {/* 댓글 작성 */}
            <Reple_write writerId={data.myname?.[0]?.id} onRefresh={() => getData()}/>
            {/* 댓글 작성 */}
            {/* 댓글 */}
            {comments.map(v => {
              return <Reply ensName={v.ensname} content={v.contents}/>
            })}
            {/* 댓글 */}
          </div>
            </div>
          </div>
        </div>
      </Cm_wrap>
    </div>
  )
}

export default Community_view;