
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">Britex Tours</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With years of experience in the Kenyan tourism industry, Britex Air Travel and Tour 
              has established itself as a trusted partner for travelers seeking authentic and 
              memorable experiences.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Local Knowledge</h3>
                  <p className="text-gray-600">Deep understanding of Kenya's best destinations and hidden gems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Service</h3>
                  <p className="text-gray-600">Tailored itineraries to match your preferences and budget</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock assistance for a worry-free travel experience</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To showcase the beauty and diversity of Kenya through exceptional travel experiences 
                  that create lasting memories and foster cultural understanding.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Happy Travelers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">10+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
