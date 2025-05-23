
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Globe, BarChart, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Aahar</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aahar is a social initiative dedicated to reducing food waste and fighting hunger by connecting those with excess food to those who need it most.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="text-orange-500 mr-2" />
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  Our mission is to create a world where no food goes to waste while people go hungry. Through our platform, we enable seamless connections between food donors and recipients, making food sharing as easy as possible. We believe that food is a basic right and that by working together, we can ensure that everyone has access to nutritious meals.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Globe className="text-orange-500 mr-2" />
                  Our Vision
                </h2>
                <p className="text-gray-600">
                  We envision a world where communities come together to solve the dual problems of food waste and hunger. Where sharing is normalized, and where technology serves as a bridge between abundance and need. A world where no one sleeps hungry and no food is wasted. Aahar is committed to being the catalyst for this change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Impact</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">5,000+</h3>
                <p className="text-gray-600">Meals Shared</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">1,200+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">15+</h3>
                <p className="text-gray-600">Cities Covered</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">1,500+</h3>
                <p className="text-gray-600">People Helped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Mizanur Rahman Tazim</h3>
                <p className="text-orange-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Leading our mission to create a world where no food goes to waste and no one goes hungry.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Mostafa Tahsin Ekleel</h3>
                <p className="text-orange-500 mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Driving our technological innovations to connect donors and recipients effectively.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Safwat Afreen Bushra</h3>
                <p className="text-orange-500 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Managing our day-to-day operations and ensuring food reaches those in need on time.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Abir Kundu</h3>
                <p className="text-orange-500 mb-3">Community Manager</p>
                <p className="text-gray-600 text-sm">
                  Building and nurturing relationships with donors, volunteers, and recipient communities.
                </p>
              </div>

              {/* Team Member 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Maishan Nadis Sindeed</h3>
                <p className="text-orange-500 mb-3">Marketing Director</p>
                <p className="text-gray-600 text-sm">
                  Spreading awareness about our mission and expanding our reach across communities.
                </p>
              </div>

              {/* Team Member 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Proma Barua</h3>
                <p className="text-orange-500 mb-3">Volunteer Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Recruiting, training, and coordinating our network of dedicated volunteers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We're always looking for volunteers, partners, and supporters to help us grow our impact. 
              If you're passionate about fighting food waste and hunger, we'd love to hear from you.
            </p>
            <a href="/contact" className="inline-block bg-white text-orange-600 hover:bg-orange-100 px-8 py-3 rounded-full font-medium transition-colors">
              Get Involved
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
