const ContactMap = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">

      {/* ✅ Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">

        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-3 md:p-4 shadow-md">
          
          <div className="rounded-xl overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;