
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Air Travel",
      description: "Domestic and international flight bookings with competitive rates and excellent service.",
      icon: "✈️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Hotel & Flight Booking",
      description: "Complete travel packages combining the best accommodations with convenient flights.",
      icon: "🏨",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Visa & Passport Services",
      description: "Hassle-free visa processing and passport assistance for all your travel needs.",
      icon: "📋",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tour Vans for Hire",
      description: "Comfortable and reliable tour vehicles with experienced drivers for your adventures.",
      icon: "🚐",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Safari Trips",
      description: "Unforgettable safari experiences in Kenya's world-renowned national parks and reserves.",
      icon: "🦁",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cultural Tours",
      description: "Immersive cultural experiences showcasing Kenya's rich heritage and traditions.",
      icon: "🎭",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="group-hover:bg-green-600 group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
