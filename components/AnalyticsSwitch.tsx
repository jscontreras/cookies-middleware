'use client';
import Cookies from 'js-cookie';
import Script from "next/script";
import { useEffect, useState } from 'react';

export function AnalyticsSwitch() {
  const [loaded, setLoaded] = useState(null);
  useEffect(() => {
    const someCookie = Cookies.get('device') || 'no-detected';
    setLoaded(someCookie);
  })
  // https://www.analyticsmania.com/post/how-to-install-google-tag-manager/#:~:text=The%20most%20recommended%20way%20how,after%20tag).
  // https://support.google.com/analytics/answer/1008080?hl=en#zippy=%2Cin-this-article%2Cdynamic-website
  if (loaded) {
    return <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
        onLoad={() => {
          console.log(_.sample([1, 2, 3, 4]))
        }}
      />
      <p>{`Client Component ${loaded}`}</p>
    </>
  }
  else {
    return <></>
  }
}
