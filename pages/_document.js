import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {

  const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />        
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      </body>
    </Html>
  )
}