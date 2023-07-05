import '../Style/Intro.css'

function Intro() {




  return (
    <div className='intro-main-div'>
      <div className="intro-flex-div">
        <div className="intro-flex-left-div">
          <h1>Hi all, I'm Khaqan</h1> <br /><br />
          <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
          <div className="social-media-icons">
            <a href="https://github.com/KhaqanAamir"><img src="https://tse2.mm.bing.net/th?id=OIP.z563E6C5FgBAnx4moTFeSgHaFj&pid=Api&P=0" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/khaqan-aamir-9a9469210/"><img src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0" alt="Linkedin" /></a>
            <a href="https://mail.google.com/mail/u/0/#inbox"><img src="https://tse1.mm.bing.net/th?id=OIP.e1EfbQdt6aVOMKEAaBzV_wHaHZ&pid=Api&P=0" alt="Mail" /></a>
            <a href="https://www.facebook.com/khaqan.aamir.10/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png" alt="Facebook" /></a>       
            <a href="https://twitter.com/AamirKhaqan"><img src="https://w7.pngwing.com/pngs/570/634/png-transparent-twitter-logo-icon-twitter-computer-network-logo-meme-thumbnail.png" alt="Facebook" /></a>         
          </div><br /><br />
          <button><a href="https://drive.google.com/file/d/1M8JcTj9GebFdUsgj_HVBfiYzjBigh7K1/view?usp=drive_link" alt="my resume" >See My Resume</a></button>
        </div>
        <div className="intro-flex-right-div" style={{flexBasis:'55%'}}>
          <div className='container' style={{margin:'auto'}}>
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_8LsVR1wgsM.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default Intro
