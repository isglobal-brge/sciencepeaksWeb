const logos = [
  {
    name: "ISGlobal",
    src: "/landing/institutions/isglobal.svg",
    url: "https://www.isglobal.org",
  },
  {
    name: "Garmin wearable integration",
    src: "/landing/garmin/garmin-logo.webp",
    url: "https://www.garmin.com",
  },
  {
    name: "Hospital Clínic Barcelona",
    src: "/landing/institutions/hospital-clinic.svg",
    url: "https://www.clinicbarcelona.org",
  },
  {
    name: "la Caixa Foundation",
    src: "/landing/institutions/la-caixa-foundation.svg",
    url: "https://fundacionlacaixa.org",
  },
  {
    name: "Severo Ochoa recognition",
    src: "/landing/institutions/severo-ochoa.svg",
    url: "https://www.isglobal.org/en/severo-ochoa",
  },
  {
    name: "CERCA Centres de Recerca de Catalunya",
    src: "/landing/institutions/cerca.svg",
    url: "https://cerca.cat",
  },
  {
    name: "Barcelona City Council",
    src: "/landing/institutions/barcelona-city-council.svg",
    url: "https://www.barcelona.cat",
  },
];

export function LogoMarquee() {
  return (
    <section className="sp-ecosystem" aria-labelledby="ecosystem-title">
      <div className="sp-wrap sp-ecosystem-intro">
        <p id="ecosystem-title">
          <strong>Born at ISGlobal.</strong> Part of a wider scientific
          ecosystem.
        </p>
        <a href="#science">
          Our scientific roots <span aria-hidden>↗</span>
        </a>
      </div>
      <div className="sp-logo-window">
        <div className="sp-logo-track">
          {[0, 1].map((copy) => (
            <ul
              className="sp-logo-set"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {logos.map((logo) => (
                <li key={logo.src}>
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={copy === 1 ? -1 : undefined}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      width="170"
                      height="58"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="sp-ecosystem-caption sp-wrap">
        Garmin wearable integration · ISGlobal institutional network and
        recognitions.
      </p>
    </section>
  );
}
