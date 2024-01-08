const AboutUs = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl capitalize ">
          welcome to
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              KBLINGS
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        KBLINGS PERFUMERY in Akure is more than a store; it is a gateway to
        olfactory excellence. Our curated collection of exquisite fragrances is
        an invitation to a world where every scent tells a story. Immerse
        yourself in the allure of our perfumes, meticulously crafted to evoke
        emotions and memories. Each bottle is a symphony of notes, a testament
        to quality and sophistication. Elevate your presence, leaving a lasting
        impression with scents that define your essence. At KBLINGS, we believe
        that everyone deserves to indulge in the luxury of smelling nice—a small
        yet powerful act that transforms ordinary moments into extraordinary
        memories
      </p>
    </>
  );
};

export default AboutUs;
