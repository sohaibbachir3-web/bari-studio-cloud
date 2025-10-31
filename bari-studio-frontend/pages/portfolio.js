import Head from 'next/head'
import Link from 'next/link'
export default function Portfolio(){ return (
  <div>
    <Head><title>Portfolio - Bari Studio</title></Head>
    <header className="container header"><div className="logo"><img src="/logo.svg" alt="logo" style={{height:40}}/></div><nav className="nav"><Link href='/'><a>Home</a></Link><Link href='/services'><a>Services</a></Link><Link href='/portfolio'><a>Portfolio</a></Link><Link href='/start-a-project'><a>Start a Project</a></Link></nav></header>
    <main className="container"><h1>Portfolio</h1><div className="portfolio-grid"><div className="portfolio-item"><h4>Luxury Watches</h4></div><div className="portfolio-item"><h4>Real Estate Pro</h4></div><div className="portfolio-item"><h4>Creative Agency</h4></div><div className="portfolio-item"><h4>Startup Landing</h4></div><div className="portfolio-item"><h4>Online Store</h4></div><div className="portfolio-item"><h4>Consultant</h4></div></div></main>
  </div>
) }
