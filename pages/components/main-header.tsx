
import Link from 'next/link'

import {useState, useEffect} from 'react'

export default function MainHeader() {
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
        <div className='main-header '>
            <h2>Nikolas Silva Lunkes</h2>
            <Link href='/contact' passHref>
              <p>Contato</p>
            </Link>
            <Link href='/about' passHref>
              <p>Sobre</p>
            </Link>
            <Link href='/' passHref>
              <p>Início</p>
            </Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='main-header '>
          <h2>Nikolas Silva Lunkes</h2>
          <Link href='/contact' passHref>
            <p>Contact</p>
          </Link>
          <Link href='/about' passHref>
            <p>About</p>
          </Link>
          <Link href='/' passHref>
            <p>Home</p>
          </Link>
      </div>
    </>
  )
}
