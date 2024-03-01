import {
  notificationStyles,
  notificationStyles2,
} from "@/utils/others/notificationStyles";
import { showNotification } from "@mantine/notifications";

type Props = {
  title: string;
  message: string;
};

const SuccessNotification = ({ title, message }: Props) => {
  showNotification({
    title: title,
    message: message,
    style: notificationStyles,
    //   @ts-ignore
    styles: notificationStyles2,
    color: "#000",
    radius: 10,
  });
  return;
};

export default SuccessNotification;
