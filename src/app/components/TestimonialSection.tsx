import Image from 'next/image';

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      author: "Herman Jensen",
      role: "Founder & Leader",
      image: "/assets/Image.png" 
    },
    {
      quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      author: "Steve Mark",
      role: "Founder & Leader",
      image: "/assets.author.img.png.png" 
      
    },
    {
      quote: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      role: "Founder & Leader",
      image: "/assets/Image3.png" 
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-2">What people are saying about us</h2>
      <p className="text-gray-400 mb-8">
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-teal-400 text-4xl mb-4">"</div>
            <p className="mb-4">{testimonial.quote}</p>

            <div className="flex items-center">
              <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                <Image 
                  src={testimonial.image}
                  alt={`${testimonial.author}'s photo`} 
                  layout="fill" 
                  objectFit ="cover" 
                />
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
