import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/surfFishing.png" width={300} height={300} alt="An image of ya boi" />
      </div>
      <h1>
        Hallo, Ich heiße Mike
      </h1>
      <p>
        Blog stuff and words and shit chumbawumba.
      </p>
    </section>
  )
};

export default Hero;
