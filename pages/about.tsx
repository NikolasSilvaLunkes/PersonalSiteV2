import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import About from './components/about'

import MainHeader from './components/main-header'
const inter = Inter({ subsets: ['latin'] })



export default function Main() {
  return (
    <>
      <MainHeader/>
      <About/>
    </>
  )
}
