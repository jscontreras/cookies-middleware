import { cookies } from "next/headers";


export default function Home() {
  // Reading query from Server
  const cookieStorage = cookies();
  const device = cookieStorage.get('device') || { value:'Non-Detected'};
  return<>
    <h1>Hello World (M)</h1>
    <p>Device Cookie (Read From Server): {`${device?.value}`}</p>
  </>;
}
