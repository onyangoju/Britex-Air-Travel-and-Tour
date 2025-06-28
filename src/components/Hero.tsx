import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header with white background */}
      <nav className="relative z-20 bg-white shadow-sm">
        <div className="flex justify-between items-center p-6 lg:px-12">
          <div className="flex items-center space-x-4 text-gray-800">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Britex Logo" className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">Britex Air Travel & Tour</h1>
              <p className="text-sm text-gray-600 italic">Your World, your way</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-gray-700">
            <a href="tel:+254741525972" className="flex items-center space-x-2 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+254 741525972</span>
            </a>
            <a href="mailto:info@britex.co.ke" className="flex items-center space-x-2 hover:text-blue-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@britex.co.ke</span>
            </a>
          </div>
        </div>
      </nav>

      {/* White background container */}
      <div className="relative bg-white min-h-screen -mt-20 pt-20 px-6 lg:px-12 flex items-center justify-center">
        {/* Floating blue card */}
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl shadow-2xl max-w-6xl w-full p-12 lg:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] rounded-3xl"></div>

          {/* Main Hero Content */}
          <div className="relative z-20 text-center text-white">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Discover
              <span className="block text-orange-400">Kenya's Beauty</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-slate-100 animate-fade-in max-w-2xl mx-auto">
              From safari adventures to cultural experiences, we make your Kenyan journey unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <a href="/tours">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  Explore Tours
                </Button>
              </a>
              <a href="https://x.com/BritexTours/status/1420652265677930499?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1420652265677930499%7Ctwgr%5Eab00491316c3ba8c4276db08bfce4c7fb107d772%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FBritexTours%2Fstatus%2F1420652265677930499">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
                >
                  Plan Your Trip
                </Button>
              </a>
            </div>
          </div>

          {/* Floating elements inside the card */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-6 h-6 bg-slate-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-orange-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
