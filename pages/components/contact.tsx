

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import {useState, useEffect} from 'react'

export default function Contact() {
  const [language, setLanguage] = useState('english');
  useEffect(() => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name.trim() === 'language') {
        setLanguage(cookie.substr(eqPos + 1));
        break;
      }
    }
  }, []);
  if (language === 'portuguese') {
    return (
      <>
        <div className='Body HomeBody'>
          <div className='Contact home-paragraph WhiteText text-center'>
            <div className="text-6xl SocButtonDiv">
              <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='linkButton linkedinSocial' icon={faLinkedin}/></a>
              <a href='https://github.com/NikolasSilvaLunkes' className='socialButtonLinks'><FontAwesomeIcon className='linkButton githubSocial' icon={faGithub}/></a>
             </div>
          </div>
        </div>
  
        <div className='Body HomeBody'>
          <div className='Contact home-paragraph WhiteText text-center'>
            <h4 className='WhiteText'>
              Email para contato:
            </h4>
            <br/>
            <h6 className='WhiteText can-copy'>
              {'nikolas.s.lunkes@gmail.com'.split('').map(function (x, i) {
                if (x === ' ') {
                  return <p className='letter can-copy'>{x}</p>;
                }
                return <p className='letter bounce '>{x}</p>;
              })}
            </h6>
          </div>
        </div>
  
  
      </>
    )
  }
  return (
    <>
      <div className='Body HomeBody'>
        <div className='Contact home-paragraph WhiteText text-center'>
          <div className="text-6xl SocButtonDiv">
            <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='linkButton linkedinSocial' icon={faLinkedin}/></a>
            <a href='https://github.com/NikolasSilvaLunkes' className='socialButtonLinks'><FontAwesomeIcon className='linkButton githubSocial' icon={faGithub}/></a>
           </div>
        </div>
      </div>

      <div className='Body HomeBody'>
        <div className='Contact home-paragraph WhiteText text-center'>
          <h4 className='WhiteText'>
            Contact email:
          </h4>
          <br/>
          <h6 className='WhiteText can-copy'>
            {'nikolas.s.lunkes@gmail.com'.split('').map(function (x, i) {
              if (x === ' ') {
                return <p className='letter can-copy'>{x}</p>;
              }
              return <p className='letter bounce '>{x}</p>;
            })}
          </h6>
        </div>
      </div>


    </>
  )
}
