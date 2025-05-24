
const FoodGallery = () => {
  const foodImages = [
    {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Vegetable Curry",
      title: "Fresh Vegetable Curry"
    },
    {
      src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Bakery Items",
      title: "Fresh Bakery"
    },
    {
      src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Biryani",
      title: "Homemade Biryani"
    },
    {
      src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Fresh Vegetables",
      title: "Farm Fresh Vegetables"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Pizza",
      title: "Wood Fired Pizza"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Traditional Food",
      title: "Traditional Cuisine"
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of Food We Share
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From homemade meals to fresh produce, discover the variety of food being shared in our community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {foodImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
