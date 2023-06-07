import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum
            numquam dicta dolor incidunt officia aut ex at mollitia similique
            debitis reiciendis eum, quisquam sunt harum exercitationem!
            Delectus, id quia! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quas labore voluptas cupiditate impedit a,
            quisquam repellat. Illo saepe iste eveniet animi eius esse vel vitae
            eos cupiditate. Ratione, labore quos. Lorem
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
