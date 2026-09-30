import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeUpSection from '../components/FadeUpSection'
import SEO from '../components/SEO'
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    followup: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
    if (!webhookUrl) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please try again later.',
      })
      return
    }

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`)
      }

      setForm({ name: '', email: '', message: '', followup: '' })
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. I will get back to you soon.',
      })
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Talk to Shalom Tejiri | Shalom.Co"
        description="Satisfied by what you see?. Great Contact me via email."
        canonical="https://shalom-co.vercel.app/contact"
      />
      <FadeUpSection as="section" id="contact" className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
          <div className="contact-container">
            <h3 className="head-text">Let's Talk</h3>
            <p className="contact-intro">
              Whether you are looking to build/improve your products or you want me to intern/work with you, Lets talk.
              I am ready to help.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <label className="field-group">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="field-input"
                  placeholder="Ada Okafor"
                />
              </label>

              <label className="field-group">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="field-input"
                  placeholder="adaokafor@example.com"
                />
              </label>

              <label className="field-group">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="field-input field-textarea"
                  placeholder="I am interested in..."
                />
              </label>

              <div className=" flex flex-row gap-3 justify-start items-start"><input type="checkbox" name="followup" value={form.followup} /><span className="field-label">I would love to recieve marketing emails from Shalom</span></div>
              <div className=" flex flex-row gap-3 justify-start items-start"><input type="checkbox" name="terms" id="" required /><span className='field-label'>by submmiting this form you agree to our <Link to='/privacy-statement' className='text-underline cursor-pointer hover:underline'>Terms and conditions and Privacy Policy</Link> *</span></div>

              {status.message && (
                <p
                  role="status"
                  className={status.type === 'error' ? 'form-status form-status-error' : 'form-status form-status-success'}
                >
                  {status.message}
                </p>
              )}

              <button type="submit" className="field-btn w-full" disabled={loading}>
                <span>{loading ? 'Sending...' : 'Send me a message'}</span>{!loading && <img src="/assets/arrow-up.png" alt="" aria-hidden="true" className="field-btn_arrow" />}
              </button>

            </form>
          </div>
        </div>
      </FadeUpSection>
    </>

  )
}

export default Contact
