import { toast, Bounce } from "react-toastify";

const ShowNotification = (message: string) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progressStyle: { backgroundColor: "#000" },
    theme: "light",
    transition: Bounce,
  });
};

export default ShowNotification;
