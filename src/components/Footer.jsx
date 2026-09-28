import { Link } from "react-router-dom"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <section className="c-space pt-7 pb-3 border-t border-blue flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2 cursor-pointer">
            <Link path='/privacy-statement' >Terms & Conditions</Link>
            <p>|</p>
            <Link path='/privacy-statement'>Privacy Policy</Link>
        </div>

        <div className="flex gap-3">

                <a href="https://github.com/tejirishalom" className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>
                <a href="social-icon" className="social-icon">
                 <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>   
                </a>

                <a href="http://x.com/shally_tj" className="social-icon">
                 <img src="/assets/twitter.svg" alt="x" className="w-1/2 h-1/2 "/>   
                </a> 


                <a href="http://wa.me/2347077828889" className="social-icon">
                   <img src="/assets/whatsapp.svg" alt="whatsapp" className="w-1/2 h-1/2"/> 
                </a>
                

        </div>

        <p className="text-white-500">{year} Shalom.co. All rights reserved </p>
    </section>
  )
}

export default Footer