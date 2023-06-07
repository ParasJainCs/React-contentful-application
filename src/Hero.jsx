import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Contentful is a headless content management system (CMS). You upload
            your content (be it text, images, or video) to Contentful, and from
            there can organize and edit it as you desire.Contentful gives your
            business the ability to structure content and to scale it across
            multiple channels and platforms, allowing developers and content
            creators to work simultaneously, and ensuring that customers are
            always interacting with the freshest version of your brand
            experience.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman standing' className='img' />
        </div>
      </div>
    </section>
  )
}
export default Hero
