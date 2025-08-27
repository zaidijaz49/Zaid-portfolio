// WhatsAppButton.js
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+923137407736" // Replace with your WhatsApp number
      className="fixed bottom-5 right-5 bg-[#25D366] text-white rounded-full p-4 shadow-lg text-3xl hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
