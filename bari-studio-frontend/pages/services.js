import Head from 'next/head'
import Link from 'next/link'
export default function Services(){ return (
  <div>
    <Head><title>Services - Bari Studio</title></Head>
    <header className="container header"><div className="logo"><img src="/logo.svg" alt="logo" style={{height:40}}/></div><nav className="nav"><Link href='/'><a>Home</a></Link><Link href='/services'><a>Services</a></Link><Link href='/portfolio'><a>Portfolio</a></Link><Link href='/start-a-project'><a>Start a Project</a></Link></nav></header>
    <main className="container"><h1>Services</h1><p>We offer Web Design, Development, SEO and Maintenance.</p></main>
  </div>
) }
