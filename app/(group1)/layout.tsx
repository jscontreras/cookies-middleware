import { cookies } from 'next/headers'

export default function RootLayout({ children }) {
  // opt out caching by using cookies
  const device = cookies().get('device') || {value: 'non-detected'};
  return (
      <div>
       {children}
        <p>Your cookie value: {`${device.value}`}</p>
      </div>
  );
}
