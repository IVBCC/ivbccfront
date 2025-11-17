import "../styles.css";

const VentanaMensaje = ({ isOpen, message, type = "success", onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="notification-overlay" onClick={onClose}>
      <div className={`notification-modal ${type}`} onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default VentanaMensaje;