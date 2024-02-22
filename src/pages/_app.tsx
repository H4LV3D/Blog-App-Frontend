import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
// import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
// import localFont from "next/font/local";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "ClashDisplay/ClashDisplay-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Semibold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clashDisplay.className}>
      <MantineProvider withCssVariables>
        <Notifications position="top-left" zIndex={2077} />
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider>
              <Component {...pageProps} />;
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </MantineProvider>
    </main>
  );
}
