

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-36">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: About Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
          <p className="text-sm">
            Our mission is to reduce food waste and share surplus food within the community.
            Join us in creating a sustainable future!
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/" className="hover:text-white text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="/available-foods" className="hover:text-white text-sm">
                Available Foods
              </a>
            </li>
            <li>
              <a href="/add-food" className="hover:text-white text-sm">
                Add Food
              </a>
            </li>
            <li>
              <a href="/my-requests" className="hover:text-white text-sm">
                My Food Requests
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">
            <strong>Email:</strong> support@foodsharing.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 Food Sharing Lane, Sustainability City
          </p>
          <div className="mt-4">
            <a href="#" className="mr-4 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mr-4 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        © 2024 Community Food Sharing Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
