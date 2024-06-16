import { useRouter } from "next/router";

export default {
  faviconGlyph: "📚",
  logo: (
    <span className="nx-text-xl nx-font-semibold">
      📚 Sergii Velykodnyi's Wiki
    </span>
  ),
  project: {
    link: "https://github.com/sergiivelykodnyi/wiki",
  },
  docsRepositoryBase: "https://github.com/sergiivelykodnyi/wiki",
  useNextSeoProps() {
    const { asPath } = useRouter();
    let titleTemplate = "%s | Wiki";

    if (asPath === "/") {
      titleTemplate = "Wiki";
    }

    return {
      titleTemplate,
      description:
        "Sergii Velykodnyi's Wiki is a personal collection of useful articles, guides, tutorials and tips.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sergiivelykodnyi.github.io/wiki/",
        siteName: "Wiki",
      },
    };
  },
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta httpEquiv="Content-Language" content="en" />,
      <meta name="apple-mobile-web-app-title" content="Wiki" />
      <meta name="msapplication-TileColor" content="#fff" />
    </>
  ),
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <div>
        <p>
          Powered by{" "}
          <a href="https://nextra.site/" target="_blank">
            Nextra
          </a>
          .
        </p>
        <p>
          Hosted on{" "}
          <a href="https://pages.github.com" target="_blank">
            GitHub Pages
          </a>
          .
        </p>
        <p>
          MIT 2021 - {new Date().getFullYear()} ©{" "}
          <a href="https://github.com/sergiivelykodnyi" target="_blank">
            Sergii Velykodnyi
          </a>
          .
        </p>
      </div>
    ),
  },
};
