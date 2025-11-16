import { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import "../styles.css";

const Whatsapp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    fetch("https://ivbccserve.vercel.app/api/config") // O tu backend real en producción
      .then(res => res.json())
      .then(data => {
        setPhoneNumber(data.whatsappNumber);
      })
      .catch(err => console.error("Error cargando número de WhatsApp:", err));
  }, []);

  const whatsappUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}`
    : "#";

  return (
    <a
      href={whatsappUrl}
      className="btn-whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default Whatsapp;