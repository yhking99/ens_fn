function Reply ({ensName, content}) {
  return(
  <div>
    <div className='rp-list'>
      <div className='rp-us-box'>
        <div className='rp-top'>
          <span className='rp-us-name'>{ensName}</span>
          
        </div>
        <div className='rp-bt'>
          <p className='rp-content'>{content}</p>
        </div>
      </div>
      {/* <div className='cm-re-btn-list'>
        <button className='re-btn'>삭제</button>
      </div> */}
    </div>
    <hr/>
  </div>
  )
}

export default Reply;