
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Britex Air Travel & Tour</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for unforgettable travel experiences in Kenya and beyond. 
              Discover the magic of East Africa with our expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/1557328291032942/" className="text-gray-300 hover:text-green-400 transition-colors">Facebook</a>
              <a href="https://x.com/BritexTours" className="text-gray-300 hover:text-green-400 transition-colors">Twitter</a>
              <a href="https://www.instagram.com/britexairtravel/" className="text-gray-300 hover:text-green-400 transition-colors">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Air Travel</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Visa Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Tour Vans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Safari Trips</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Britex Air Travel & Tour. All rights reserved. | Crafted with love for unforgettable journeys</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
