import React from 'react';
import '../Style/Experience.css'

const Experience=()=>{
    return(
        <>
        <div className='experience-main-div' id='opening' style={{display:'flex'}}>
      <div className="experience-flex-div">
        <div className="experience-flex-left-div" style={{flexBasis:'100%'}}>
          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vnikrcia.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display:'relative', marginTop:'150px'}} loop  autoplay></lottie-player>
        </div>
        <div className="experience-flex-right-div" style={{flexBasis:'100%'}}>
            <h1 style={{fontWeight:'400'}}>What I do</h1>  
            <p style={{display:'block'}}>Crazy Full stack developer who wants to explore every Tech stack</p>
            <img src="https://e7.pngegg.com/pngimages/837/140/png-clipart-html-5-logo-html5-grey-black-icons-logos-emojis-tech-companies-thumbnail.png" alt="HTML 5" />
            <img src="data:image/png;base64,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" alt="css" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccPkLV6hpygjpYvB5PciJoCjRunPfO94vsrOGwnnQKS79aDLWMpOHIM_KuV_Zj36QeV8&usqp=CAU" alt="sass" />
            <img src="data:image/png;base64,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" alt="javascript" />
            <img src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" alt="react js" />
            <img src="data:image/png;base64,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" alt="node js" />
            <img src="data:image/png;base64,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" alt="swift" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/npm-2336953-1982834.png" alt="npm" />
            <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg" alt="Mongo DB" />
            <img src="https://p.kindpng.com/picc/s/129-1299528_black-aws-icon-aws-icon-png-transparent-png.png" alt="AWS" />
            <img src="https://firebase.google.com/static/images/brand-guidelines/logo-standard.png" alt="FireBase" />
            <img src="data:image/png;base64,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" alt="Python" />
            <img src="https://e7.pngegg.com/pngimages/442/914/png-clipart-docker-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="Docker" /> <br />
            <p>⚡ Develop highly interactive Front end / User Interfaces for your web applications</p>
            <p>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
            <p>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
        </div>
      </div>  
    </div>

</>
    )
}

export default Experience;
