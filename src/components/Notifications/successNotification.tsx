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
    color: "black",
    radius: 10,
    shadow: "sm",
  });
  return;
};

export default SuccessNotification;
