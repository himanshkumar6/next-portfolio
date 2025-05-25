import HeroGradient from './HeroGradient';
import HeroPic from './HeroPic';
import HeroText from './HeroText';

const HeroMain = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 gap-12">
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </section>
  );
};

export default HeroMain;
