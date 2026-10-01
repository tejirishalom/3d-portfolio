import { clientReviews } from "../constants/constants"
import FadeUpSection from "../components/FadeUpSection"
import SEO from "../components/SEO"

const Testimonials = () => {
  return (
    <>
    <SEO
      title="Client Testimonials | Shalom Tejiri"
      description="Read feedback from clients and collaborators who have worked with Shalom Tejiri."
      canonical="https://shalom-co.vercel.app/testimonial"
    />
    <FadeUpSection as="section" className='c-space my-20 snap-start'>
      <h3 className='head-text'>Hear from Others I have Worked With</h3>
        <div className="client-container">
            {clientReviews.map(({id, name, review, img, position}) => (
            <div key={id} className="client-review">
                <div >
                    <p className="text-beige-300 font-light">{review}</p>
                </div>
                <div className="client-content">
                    <div className="flex gap-3 ">
                        <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                        <div className="flex flex-col">
                            <p className="font-semibold text-beige-300/90">{name}</p>
                            <p className="text-beige-300/90 md:text-base text-sm font-light">{position}</p>
                        </div>
                        
                       
                        
                    </div> 
                    <div className="flex items-center gap-2">
                            {Array.from ({length: 5}).map((_, index)=> (
                                <img key={index} src="/assets/star.png" alt="star" className="h-5 w-5" />
                            ))}
                        </div>

                </div>
            </div>
                
            ))}
        </div>
    </FadeUpSection>
    </>
  )
}

export default Testimonials