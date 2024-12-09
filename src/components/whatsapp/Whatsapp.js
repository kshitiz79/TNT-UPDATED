import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/15132000529" // Replace with your WhatsApp number
      passHref
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-24 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50 transition-colors duration-300 hover:bg-green-600 text-2xl md:left-3 md:bottom-6 md:w-6 md:h-6 md:text-xl"
    >
      <i className="fab fa-whatsapp"></i>
    </Link>
  );
};

export default WhatsAppButton;
