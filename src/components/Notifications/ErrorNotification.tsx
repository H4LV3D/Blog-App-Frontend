import {
  notificationStyles,
  notificationStyles2,
} from "@/utils/others/notificationStyles";
import { showNotification } from "@mantine/notifications";

type Props = {
  title: string;
  message: string;
};

const ErrorNotification = ({ title, message }: Props) => {
  showNotification({
    title: title,
    message: message,
    style: notificationStyles,
    //   @ts-ignore
    styles: notificationStyles2,
    color: "red",
    radius: 10,
  });
  return;
};

export default ErrorNotification;
