import Globe from "react-globe.gl";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
    
    const [hasCopied, setHasCopied] = useState();

    const startYear = 2025;
    const currentYear = new Date().getFullYear()
    const yearsPassed = currentYear - startYear;

    const handleCopy = () =>{
        navigator.clipboard.writeText('shalomakpotaire@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000    
    )

    }
    return (
        <section className='cspace my-20 '>
            <div className="about_tag text-white-700 sm:text-xl text-6xl">
                Meet Me
            </div>
            <div className="grid xl:grid-cols-3 xsl:grid-rows-6 md:grid-cols-2 gridcols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src='/assets/Profile.png' alt='profile picture' className='w-full sm:h-[276px] h-fit object-contain' />
                        <p className="grid-headtext">
                            Hi, I am Shalom
                        </p>
                        <p className="grid-subtext">
                            with {yearsPassed}+ years of experience I have honed my skills
                            in Full stack web development, AI Automation and Integration for Business,
                            Product Design and Cyber Security for Web applications.
                        </p>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src='/assets/grid2.png' alt='tech stack' className='w-full sm:h-[276px] h-fit object-contain' />
                        <p className="grid-headtext">
                            My Tech Stack
                        </p>
                        <p className="grid-subtext">
                            Amongst other softwares and languages I use,
                            I am proficient in the use of Javascript,
                            Figma, Kali Linux, n8n and lots more.....
                        </p>
                    </div>

                </div>

                <div className='grid-container col-span-1 xl:row-span-4'>
                    <div className=' rounded-3xl w-full sm:h-[326px] h-fit flex justify-center item-center'>
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0 ,0)"
                            backgroundImageOpacity="0.5"
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat:"6.33",
                                lng:"5.6174",
                                text: "Hello, I am Shalom",
                                color:"white",
                                size: '100000'
                            }]}
                        />
                    </div>
                    <div className="grid-headtext">
                        I work remotely across most timezones in Africa and beyond
                    </div>

                    <p className="grid-subtext">
                        I am currently based in Edo State, Nigeria.
                        <Link to='/contact'>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10 bg-sky-400/90"/>
                        </Link>
                       
                    </p>
                </div>


                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="mission" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div >
                            <p className="grid-headtext">
                                My Passion for Products
                            </p>
                            <p className="grid-subtext">
                                Every product is a dream. I love bringing people's dreams to reality with code.
                                Come now let me make your dreams come true like others before.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="email" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Send me an email:</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="grid-subtext">
                                    shalomakpotaire@gmail.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About