import {useState, useEffect} from 'react'



export default function About() {
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
              <h1>Sobre mim</h1>
                <br/>
                <h6 className='WhiteText'>
                  {'Eu começei a aprender programação quando eu tinha 14 anos, em 2017, após um tempo, eu começei a fazer jogos, fiz muitos jogos até 2022 quando eu começei a focar em Engenharia de Software'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'O objetivo foco da minha carreira é Machine Learning, eu ainda estudo bastante sobre desenvolvimento Web, Devops e Cyber Security, mas meu foco principal é atualmente Data Science e Machine Learning'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'As linguagens de programação que eu mais utilizo em meus projetos são: Python, Rust e Typescript'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Os frameworks e bibliotecas que eu mais utilizo são: Pythorch, Tensorflow, Pandas, Numpy, Fastapi, Actix-Web, Yew, Reactjs e Nextjs, eu espero que Yew se consolide bem no mercado frontend'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Eu tenho dois cursos técnicos em Desenvolvimento de Software, e atualmente estou me graduando em Engenharia de Software, Bacharelado, mas eu aprendo a maioria do que sei na internet, já que a maioria das escolas apenas ensinam o básico'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
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
            <h1>About me</h1>
              <br/>
              <h6 className='WhiteText'>
                {'I began learning programming when i was 14 years old, in 2017, after some time i started making games, i made games until 2022, when i started focusing on Software Engineering'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'My main carrer focus as of now is on Machine Learning, i still study a lot about web development, devops and cyber security, but my main focus is on Data Science and Machine Learning'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'The main languages i use on my own projects are: Python, Rust and Typescript'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'The frameworks and libraries i mostly use are: Pythorch, Tensorflow, Pandas, Numpy, Fastapi, Actix web, Yew ,Reactjs, Nextjs, i hope yew gets popular on frontend development'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'I have done two Cerfificate Programs in Software Development, and im Graduating in Software Engineering Bachelor, but i learn mostly on the internet, since most schools only teach you the basics'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              
            </div>
        </div>
    </>
  )
}
