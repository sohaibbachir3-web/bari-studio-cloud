import Head from 'next/head'
import Link from 'next/link'
export default function Contact(){ return (
  <div>
    <Head><title>Contact - Bari Studio</title></Head>
    <header className="container header"><div className="logo"><img src="/logo.svg" alt="logo" style={{height:40}}/></div><nav className="nav"><Link href='/'><a>Home</a></Link><Link href='/services'><a>Services</a></Link><Link href='/portfolio'><a>Portfolio</a></Link><Link href='/start-a-project'><a>Start a Project</a></Link></nav></header>
    <main className="container"><h1>Contact Us</h1><p>Email: info@bari-studio.test</p></main>
  </div>
) }
