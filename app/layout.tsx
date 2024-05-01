import { AnalyticsSwitch } from "../components/AnalyticsSwitch";

export default function RootLayout({ children }) {
  // opt out caching by using cookies
  const date = new Date();
  return (
    <html>
      <head />
      <body>{children}
        <AnalyticsSwitch />
        <p>{date.toISOString()}</p>
      </body>
    </html>
  );
}
