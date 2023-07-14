import './main_hot_post.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Post_hot() {

  const [popularPosts, setPopularPosts] = useState([]);

  // useEffect(() => {
  //   fetchPopularPosts();
  // }, []);

  // const fetchPopularPosts = async () => {
  //   try {
  //     const response = await axios.get('/api/popular-posts');
  //     setPopularPosts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching popular posts:', error);
  //   }
  // };

  return(
    <div>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">1</span>
          <div class="rk-info">
            {/* <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div> */}
            <div class="rk-title">
              <p>존버하면 망하는 이유</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">2</span>
          <div class="rk-info">
            {/* <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div> */}
            <div class="rk-title">
              <p>존버가 무조건 성공하는 이유</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">3</span>
          <div class="rk-info">
            {/* <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div> */}
            <div class="rk-title">
              <p>드디어 내려가나</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">4</span>
          <div class="rk-info">
            {/* <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div> */}
            <div class="rk-title">
              <p>코인 공부 조언</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">5</span>
          <div class="rk-info">
            {/* <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div> */}
            <div class="rk-title">
              <p>더운게 날씨 때문인지 코인 때문인지</p>
            </div>
          </div>
        </li>
      </a>
      {/* <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">2</span>
          <div class="rk-info">
            <div class="rk-name-time">
              <span>2023.eth</span>&nbsp;
              <span>2023.07.12.11:08</span>
            </div>
            <div class="rk-title">
              <p>메타마스크 테스트</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">3</span>
          <div class="rk-info">
            <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>2023.07.12.11:50</span>
            </div>
            <div class="rk-title">
              <p>코인공부 어떻게 하나요?</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">4</span>
          <div class="rk-info">
            <div class="rk-name-time">
              <span>12345.eth</span>&nbsp;
              <span>2023.07.11.15:27</span>
            </div>
            <div class="rk-title">
              <p>지금 매수각임?</p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">5</span>
          <div class="rk-info">
            <div class="rk-name-time">
              <span>king.eth</span>&nbsp;
              <span>2023.07.12.9:05</span>
            </div>
            <div class="rk-title">
              <p>더운게 날씨때문인지 코인때문인지</p>
            </div>
          </div>
        </li>
      </a> */}

      {/* <div>
      {data.map((item) => (
        <a key={item.id} href="#">
          <li className="rk-hot-li">
            <span className="rk-ranking">{item.ranking}</span>
            <div className="rk-info">
              <div className="rk-name-time">
                <span>{item.name}</span>
                <span>{item.time}</span>
              </div>
              <div className="rk-title">
                <p>{item.title}</p>
              </div>
            </div>
          </li>
        </a>
      ))}
    </div> */}

    </div>
    
  )
}

export default Post_hot;