import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/tiptap/styles.css";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`  `}>
      <MantineProvider
        theme={{
          fontFamily: 'clash, "Clash Display", sans-serif',
        }}
      >
        <Notifications position="top-right" zIndex={10077} />
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </MantineProvider>
    </main>
  );
}
