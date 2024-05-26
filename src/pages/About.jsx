

const AboutCard = ({ label, subtext, bgColor }) => (
  <div className="px-2 py-2">
    <div className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-12 ${bgColor}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  </div>
);



const AboutSection = () => {
  const cards = [
    {

      label: 'Our Mission',
      subtext: 'Our mission is to provide the best services to our customers with utmost dedication and excellence.',
      bgColor: 'bg-blue-500' // Change this to any desired color class
    },
    {

      label: 'Our Vision',
      subtext: 'We envision a world where our solutions make life easier and more enjoyable for everyone.',
      bgColor: 'bg-blue-500' // Change this to any desired color class
    },
    {

      label: 'Our Values',
      subtext: 'Integrity, innovation, and customer satisfaction are the core values .',
      bgColor: 'bg-blue-500' // Change this to any desired color class
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {cards.map((card, index) => (
        <AboutCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AboutSection;
