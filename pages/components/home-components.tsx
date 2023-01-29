
import {useState, useEffect} from 'react'


export default function Home() {
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
              <h1>Início</h1>
                <h4 className='WhiteText'>
                  Sou um Engenheiro de Software, atualmente trabalho na empresa Arpa Sistemas, meus principais conhecimentos são:
                </h4>
                <br/>
                <h6 className='WhiteText'>
                  {'Ciência de dados em Python e R '.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Machine Learning, IA training, MLOPS e Data Mining'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Desenvolvimento de backend em: Rust: Actix-web, Java: Spring, Python: Django, Flask and Fastapi e Node : Express'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Desenvolvimento de Frontend com: ReactJs, NextJs, Javascript, Typescript, Vue, Svelte, Solid, Yam e JSP'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Minhas principais linguagens de programação, em ordem de conhecimento são: Python, Rust, Java, Javascript, Typescript, R, C, C++, Lua e C#'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Eu tenho conhecimento tanto em SQL e NoSQL, e consigo utilizar qualquer engine de banco de dados, também utilizo dbeaver'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Sei utilizar Serviços em Cloud, consigo utilizar AWS, Azure e Google Cloud, esse site está sendo hosteado no AWS EC2, feito em Next.js'.split('').map(function (x, i) {
                    if (x === ' ') {
                      return <p className='letter'>{x}</p>;
                    }
                    return <p className='letter bounce'>{x}</p>;
                  })}
                </h6>
                <h6 className='WhiteText'>
                  {'Ainda estou aprendendo muito, planejo realizar outro site pessoal no yew quando o framework e o webassembly estiverem mais maduros'.split('').map(function (x, i) {
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
            <h1>Home</h1>
              <h4 className='WhiteText'>
                I'm a Software Engineer at Arpa Sistemas, my skills are:
              </h4>
              <br/>
              <h6 className='WhiteText'>
                {'Data science in Python and R'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'Machine Learning, AI training, MLOPS and Data Mining'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'Backend engineering in Rust: Actix-web, Java: Spring, Python: Django, Flask and Fastapi, and Node: Express'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'Frontend engineering with: Reactjs, Nextjs, Javascript, Typescript, Vue, Svelte, Solid, Yam '.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'I can create fullstack apps with combinations of these'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'My main programming languages, in knowledge ranking are: Python, Rust, Java, Javascript, Typescript, R, C, C++, C#'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'I know sql and i can use any database, relational or non relational, i can also use dbeaver'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'About cloud engineering, i can use AWS, Azure and Google Cloud, this site for example is hosted on AWS EC2, made with Next.js'.split('').map(function (x, i) {
                  if (x === ' ') {
                    return <p className='letter'>{x}</p>;
                  }
                  return <p className='letter bounce'>{x}</p>;
                })}
              </h6>
              <h6 className='WhiteText'>
                {'Im still learning a lot, im planning to make another personal website when web assembly becomes more mature, i still want to make some responsiveness features'.split('').map(function (x, i) {
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
