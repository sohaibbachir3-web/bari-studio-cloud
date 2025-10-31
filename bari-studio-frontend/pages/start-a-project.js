import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'

export default function Start(){ 
  const [status,setStatus]=useState('');
  async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    setStatus('Sending...');
    try{
      const res = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK || '/api/submit', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      if(res.ok){ setStatus('Request sent — we will contact you within 24 hours.'); e.target.reset(); }
      else { setStatus('Failed to send. Please try again later.'); }
    }catch(err){ setStatus('Error sending.'); console.error(err); }
  }
  return (
  <div>
    <Head><title>Start a Project - Bari Studio</title></Head>
    <header className="container header">
      <div className="logo"><img src="/logo.svg" alt="logo" style={{height:40}}/></div>
      <nav className="nav"><Link href='/'><a>Home</a></Link><Link href='/services'><a>Services</a></Link><Link href='/portfolio'><a>Portfolio</a></Link><Link href='/start-a-project'><a>Start a Project</a></Link></nav>
    </header>
    <main className="container">
      <h1>Start a Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row"><input name="name" placeholder="Full Name" required/></div>
        <div className="form-row"><input name="email" type="email" placeholder="Email Address" required/></div>
        <div className="form-row"><select name="projectType"><option>Website</option><option>Landing Page</option><option>E-commerce</option></select></div>
        <div className="form-row"><input name="budget" placeholder="Estimated Budget"/></div>
        <div className="form-row"><textarea name="description" placeholder="Describe your project" rows="5"></textarea></div>
        <button type="submit">Send Request</button>
      </form>
      <p style={{marginTop:12,color:'#aaa'}}>{status}</p>
    </main>
  </div>
) }
