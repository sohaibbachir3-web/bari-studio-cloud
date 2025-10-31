import Head from 'next/head'
import Link from 'next/link'
export default function Home(){ return (
  <div>
    <Head><title>Bari Studio - Clean & Direct Web Design</title></Head>
    <header className="container header"><div className="logo"><img src="/logo.svg" alt="logo" style={{height:40}}/></div><nav className="nav"><Link href='/'><a>Home</a></Link><Link href='/services'><a>Services</a></Link><Link href='/portfolio'><a>Portfolio</a></Link><Link href='/start-a-project'><a>Start a Project</a></Link></nav></header>
    <main className="container"><section className="hero"><h1 style={{color:'#D4AF37'}}>We craft websites that grow your business.</h1><p style={{color:'#ddd'}}>Clean, modern websites for entrepreneurs and small businesses.</p><Link href='/start-a-project'><a className="cta">Start a Project</a></Link></section>
      <section><h2>Our Services</h2><div className="card-grid"><div className="card"><h3>Web Design</h3><p>Modern responsive designs built to impress.</p></div><div className="card"><h3>Landing Pages</h3><p>Conversion-focused, lightning-fast pages.</p></div><div className="card"><h3>E-commerce</h3><p>Sleek stores to sell smartly.</p></div></div></section>
      <section><h2>Portfolio</h2><div className="portfolio-grid"><div className="portfolio-item"><h4>Luxury Watches</h4><p>Mockup project</p></div><div className="portfolio-item"><h4>Real Estate Pro</h4><p>Mockup project</p></div><div className="portfolio-item"><h4>Creative Agency</h4><p>Mockup project</p></div><div className="portfolio-item"><h4>Startup Landing</h4><p>Mockup project</p></div><div className="portfolio-item"><h4>Online Store</h4><p>Mockup project</p></div><div className="portfolio-item"><h4>Consultant</h4><p>Mockup project</p></div></div></section>
      <section className="footer"><p>© Bari Studio</p></section>
    </main>
  </div>
) }
