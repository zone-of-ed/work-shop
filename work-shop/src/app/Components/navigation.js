'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Navigation({ canShowCommunity = true }) {
  const pathname = usePathname();
  console.log(pathname);
  return <nav className="navbar">
    <div className="navbar-logo">
      <a href="">
        <img src="/images/brand-logo.png" alt="Brand Logo" />
      </a>
    </div>
    <ul className="navbar-links">
      <li>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
      {/*<li>*/}
      {/*  <Link href="/">About Us</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link href="/code-editor" className={pathname === '/code-editor' ? 'active' : ''}>Code Editor</Link></li>*/}
      {/*<li>*/}
      {/*  <Link href="/quiz" className={pathname === '/quiz' ? 'active' : ''}>Quiz</Link></li>*/}
      {/*<li>*/}
      {/*  <Link href="/interview-questions" className={pathname === '/interview-questions' ? 'active' : ''}>Interview*/}
      {/*    Questions</Link></li>*/}
      {/*<li>*/}
      {/*  <Link href="/">Login</Link></li>*/}
      <li>
        <Link href="/workshops" className={pathname === '/workshops' ? 'active' : ''}>Workshops</Link></li>
      <li>
        <Link href="/">Login</Link></li>


    </ul>
    {canShowCommunity && <div className="community-button">
      <img src="/images/whatsappLogo.png" alt="WhatsApp Icon" />
      <span>Community</span>
    </div>}

  </nav>;
}

