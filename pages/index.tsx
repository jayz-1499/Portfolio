import type { NextPage } from 'next';
import CardItem from '../components/card/cardItem';
import HorizontalCard from '../components/card/horizontalCard';

const Home: NextPage = () => {
  const information = [
    'Name: Ha Nhat Dan(Jay Ha).',
    'Dob: 14/06/1999.',
    'Address: Ha Noi, Viet Nam.',
    'Hobby: Basketball, Football, Music, Movies, Fashion.',
  ];
  return (
    <div>
      <div className="my-5">
        <div className="text-xl font-bold text-center">
          <span>About Me 🤘🏻</span>
        </div>
        <div className="px-5 py-5">
          <HorizontalCard
            imageUrl={'/images/bwAvatar.jpg'}
            content={information}
          />
        </div>
      </div>
      <div>
        <div className="text-xl font-bold text-center">
          <span>About My Education ✏️ 📖</span>
        </div>
        <div className="grid grid-cols-3 gap-5 px-5 py-5">
          <CardItem
            imageUrl={'/images/fptLogo.jpeg'}
            time={'2017 - 2021'}
            major={'Major: Software engineer.'}
          />
          <CardItem
            imageUrl={'/images/fptSoftware.png'}
            time={'9/2019 - 1/2020'}
            major={'Major: Intern HTML, CSS, Angular basic.'}
          />
          <CardItem
            imageUrl={'/images/VMO.png'}
            time={'3/2022 - Now'}
            major={'Major: Intern ReactJS.'}
          />
        </div>
      </div>
      <div className=" py-5">
        <div className="text-xl font-bold text-center">
          <span>Technical & Tools 💻</span>
        </div>
        <div className="grid grid-cols-3 gap-5 px-5 py-5">
          <CardItem imageUrl={'/images/nextlogo.png'} major={'NextJS'} />
          <CardItem imageUrl={'/images/reactlogo.png'} major={'ReactJS'} />
          <CardItem imageUrl={'/images/tslogo.svg.png'} major={'TypeScript'} />
          <CardItem imageUrl={'/images/tailwindlogo.png'} major={'Tailwind CSS'} />
          <CardItem imageUrl={'/images/scsslogo.svg.png'} major={'SASS'} />
          <CardItem imageUrl={'/images/vslogo.svg.png'} major={'Visual Studio Code'} />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
