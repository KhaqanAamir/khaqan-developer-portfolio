import '../Style/Intro.css'

function Intro() {




  return (
    <div className='intro-main-div'>
      <div className="intro-flex-div">
        <div className="intro-flex-left-div">
          <h1>Hi all, I'm Khaqan</h1> <br /><br />
          <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
          <div className="social-media-icons">
            <img src="https://tse2.mm.bing.net/th?id=OIP.z563E6C5FgBAnx4moTFeSgHaFj&pid=Api&P=0" alt="GitHub" />
            <img src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0" alt="Linkedin" />
            <img src="https://tse1.mm.bing.net/th?id=OIP.e1EfbQdt6aVOMKEAaBzV_wHaHZ&pid=Api&P=0" alt="Mail" />
            <img src="https://tse1.mm.bing.net/th?id=OIP.NoaCZSNGhkMIkVS3ojmNjQHaHa&pid=Api&P=0" alt="Gitlab" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png" alt="Facebook" />        
            <img src="https://cdn0.iconfinder.com/data/icons/washing-instructions-1/64/Untitled-4-37-512.png" alt="Medium" />
            <img src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/stackoverflow-512.png" alt="Gitlab" />
          </div><br /><br />
          <button><a href="https://drive.google.com/file/d/1F5VNluHiBWUhnHuNZG_CT3RWV3xMWFoz/view?usp=sharing" style={{color:'white', fontSize:'17px'}} >See My Resume</a></button>
        </div>
        <div className="intro-flex-right-div" style={{flexBasis:'55%'}}>
          <div className='container'>
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_8LsVR1wgsM.json"  background="transparent"  speed="1"  style={{width: '300px;', height: '300px;'}} loop  autoplay></lottie-player>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default Intro
