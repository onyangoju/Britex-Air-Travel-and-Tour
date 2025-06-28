
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your Kenyan adventure? Contact us today and let's plan your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">+254 741525971</p>
                <p className="text-gray-300">+254 741525972</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">info@britex.co.ke</p>
                <p className="text-gray-300">bookings@britextours.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Nairobi, Kenya</p>
                <p className="text-gray-300">Serving destinations across East Africa</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sat - Sun: 9:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Start Planning Your Journey</h3>
            <p className="text-green-100 mb-8 leading-relaxed">
              Whether you're dreaming of a safari adventure, cultural exploration, or business travel, 
              we're here to make it happen. Get in touch with our expert team today!
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-white text-green-700 hover:bg-gray-100">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-green-700">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
