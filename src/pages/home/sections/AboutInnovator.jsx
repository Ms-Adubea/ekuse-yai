import {
  FaUser,
  FaProductHunt,
  FaPhone,
  FaBook,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import davidInnovator from "../../../assets/images/innovator-removebg.png";
import bgImage from "../../../assets/images/bg-img.jpg"; // Import background image
import AnimatedSection from "../../../components/AnimatedSection";

const AboutInnovator = () => {
  return (
    <section
      id="innovator"
      className="py-16 bg-cover bg-no-repeat bg-fixed relative"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:text-center">
            <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Founder
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16">
          <AnimatedSection className="relative pb-10 lg:col-span-1">
            <div className="w-full h-auto object-contain rounded-full shadow-lg hover:scale-105 transition-transform duration-300 relative">
              <img
                src={davidInnovator}
                alt="Founder"
                className="h-full w-full object-cover rounded-lg"
              />
              {/* Glassy Hover Effect Under Image */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-white/30 backdrop-blur-md rounded-b-lg opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-10 sm:mt-0 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900">Mr. David Sam</h3>
            <p className="mt-3 text-lg text-gray-600">
              A visionary young innovator from Winneba, Central Region, David
              Sam is passionate about creating efficient solutions for everyday
              challenges. Through the Young Africa Innovates (YAI) program, he
              has developed groundbreaking innovations that address real-world
              problems.
              <br />
              <br />
              He addresses the challenge of the time-consuming and inconsistent
              process of manually slicing ginger. This inefficiency can
              negatively impact food quality and increase workloads in both
              domestic and commercial kitchens.
            </p>
            <p className="mt-3 text-lg text-gray-600">
              As the founder of Ekuse Metal Engineering, David leads with a
              commitment to excellence and innovation, bringing fresh
              perspectives to the metal engineering industry.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://x.com/DavidSam232743?t=0ep7eVDcmNgi7V47wxX06g&s=08"
                target="_blank"
                className="text-[#CD7F32] hover:text-orange-700 hover:scale-110 transition-transform duration-200"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1AyriFF8qA/"
                target="_blank"
                className="text-[#CD7F32] hover:text-orange-700 hover:scale-110 transition-transform duration-200"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/davidsam8882?igsh=NGYxenZsMmhvb2hp"
                target="_blank"
                className="text-[#CD7F32] hover:text-orange-700 hover:scale-110 transition-transform duration-200"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/+233547850760"
                target="_blank"
                className="text-[#CD7F32] hover:text-orange-700 hover:scale-110 transition-transform duration-200"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
