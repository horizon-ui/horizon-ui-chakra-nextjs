import Script from "next/script";
import React from "react";

function SEO() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-226179263-1"
      ></Script>
      <Script id="data-layer">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-226179263-1");
    `}
      </Script>
      <Script id="google-tag-manager">
        {`
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-KC7D56Q");
        `}
      </Script>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="canonical" href="https://www.horizon-ui.com/" />
      <meta
        name="keywords"
        content="horizon ui, typescript, typescript dashboard, react typescript, admin typescript, typescript admin dashboard, nextjs, nextjs dashboard, react nextjs, admin nextjs, nextjs admin dashboard, next, next dashboard, react next, admin next, next admin dashboard, open source, react dashboard, nfts dashboard, nft dashboard, nft admin template,react admin, react chakra admin, react chakra dashboard, react panel, react chakra template, react admin template, react free, react premium, react free dashboard, react premium dashboard, dashboard, react free chakra dashboard, free admin template, premium admin template, react chakra, react chakra dashboard, react chakra free, react free premium, react chakra free dashboard, react free premium dashboard, chakra admin dashboard, admin dashboard, admin template, free admin template, chakra ui free template, chakra ui admin template"
      />
      <meta
        name="description"
        content="Horizon UI NextJS is the trendiest free open-source admin template built on top of Chakra UI. Horizon UI comes with over 70+ dark/light frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. "
      />
      <meta
        name="name"
        content="Horizon UI NextJS - Trendiest Free Open Source NextJS Admin Template for Chakra UI & React"
      />
      <meta
        name="description"
        content="Horizon UI NextJS is the trendiest free open-source NextJS admin template built on top of Chakra UI. Horizon UI comes with over 70+ dark/light frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. "
      />

      <meta
        name="image"
        content="https://i.ibb.co/mtLkcYL/horizon-ui-nextjs-free.png"
      />

      <meta name="twitter:card" content="product" />
      <meta name="twitter:site" content="@simmmple_web" />
      <meta
        name="twitter:title"
        content="Horizon UI NextJS - Trendiest Free Open Source NextJS Admin Template for Chakra UI & React"
      />

      <meta
        name="twitter:description"
        content="Horizon UI NextJS is the trendiest free open-source NextJS admin template built on top of Chakra UI. Horizon UI comes with over 70+ dark/light frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. "
      />
      <meta name="twitter:creator" content="@simmmple_web" />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/mtLkcYL/horizon-ui-nextjs-free.png"
      />

      <meta
        property="og:title"
        content="Horizon UI NextJS - Trendiest Free Open Source Admin Template for Chakra UI & React"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://horizon-ui.com/horizon-ui-chakra-/"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/mtLkcYL/horizon-ui-nextjs-free.png"
      />
      <meta
        property="og:description"
        content="Horizon UI NextJS is the trendiest free open-source admin template built on top of Chakra UI. Horizon UI NextJS comes with over 70+ dark/light frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. "
      />
      <meta property="og:site_name" content="Horizon UI NextJS" />
      <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      <title>Horizon UI NextJS</title>
    </>
  );
}

export default SEO;
