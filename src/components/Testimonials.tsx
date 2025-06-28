
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Thomas Jameson's",
      location: "Germany",
      content: "Professional services. My experience to maasai Mara was unexceptional. We really enjoyed our Safari from the pick up at JKIA airport to maasai mara, samburu and Amboseli the tour guide was very nice and we'll versed with the wild.I was also happy with the vehicles as most of them were new and upto the task. I would like to have the same service as the one enjoyed.",
      rating: 4
    },
    {
      name: "Evelyne",
      location: "Kenya",
      content: "My experience with Britex was not just amazing but special and unforgatable. I'll leave to tell.The communication with Britex was swift. They sent me the itinerary early enough for me to plan and responded to my mails within minutes. We were picked on time at our pick up point and the tour guide/driver (Lawrence) was friendly. My safari was amazing and beautiful and I actually learnt some new words from Lawrence. I just lover the way he answered my a thousand questions to mean he is conversant with the tour industry.If you wish to travel, I would recommend you choose Britex. Britex is a stay for me.",
      rating: 5
    },

    {
    name: "Hellenna Mulia",
    location: "Kenya",
    content: "It was an excellent safari, with great support from the staff. Everything was just cool, from airport to the parks",
    rating: 5
    },
    {
    name: "EdwinMcool",
    location: "US",
    content: "A life time experience in Maasai Mara. One thing I will never forget is the cool Maasai Mara safari trip. I mean, that was just a lifetime experience in the wilderness, with cool customer care service and friendly drivers.",
    rating: 4
    },
    {
    name: "EDWIN",
    location: "Kenya",
    content: "Excellent honeymoon safari experience. My fiance and I were looking for company that would cater for our budget honeymoon diani beach package, it was at this time that a friend of mine informed me to try Britex, and I decided to give it a try, the company provided the best package and up to now I will never regret choosing them, they have great customer care and whenever I travel r go on a safari with them I usually get ndovu points which I can redeem for either a air ticket or shopping",
    rating: 5
    },
    {
    name: "RITAH",
    location: "UK",
    content: "Awesome Experience. The Team was excellent and the driver experienced. I enjoyed my safari very much. The Team including drivers' communication skills was excellent. The coordination was super. I received personalised service which I didn't expect and this really made my safari memorable. Britex team met my expectations and exceeded them with lots of complementaries and surprises. The safari was indeed one that I will remember for a long time. The adventure was good and I loved every bit.",
    rating: 5
   }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from fellow adventurers who've experienced Kenya with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
