
import Link from 'next/link'
import Button from '@mui/material/Button'

export default function Language() {
  return (
    <>
        <div classname='text-6xl SocButtonDiv' Style='Margin-top: 200px;'>
        <div className='Contact home-paragraph WhiteText SocButtonDiv'>
        <h2 Style='Margin-bottom: 20px;'>Select your language:</h2>
                <Link href={`/portuguese`}>
                  <Button >Português</Button>
                </Link>
                <Link href={`/english`} Style='Float: right;'>
                  <Button >English</Button>
                </Link>
        </div>
        </div>
    </>
  )
}
