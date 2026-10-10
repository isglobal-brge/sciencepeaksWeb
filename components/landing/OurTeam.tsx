import { ArrowUpRight, Plus } from "@phosphor-icons/react/ssr";
import "./our-team.css";

const members = [
  {
    id: "juan-ramon",
    name: "Prof. Juan Ramón González",
    firstName: "Juan Ramón",
    role: "Scientific direction & project lead",
    position: "Co-founder",
    introduction: "Research Professor at ISGlobal. Health Analytics Hub coordinator. 220+ peer-reviewed publications.",
    biography:
      "Juan Ramón leads the SciencePeaks project and its scientific direction. He heads ISGlobal’s Bioinformatics in Genetic Epidemiology group and is an Adjunct Professor at the Autonomous University of Barcelona. His research brings statistical modelling and bioinformatics into cancer research, precision medicine and sport. He is an author of Omic Association Studies with R and Bioconductor and contributes to tools including SNPassoc and DataSHIELD for reproducible biomedical analysis. This expertise guides SciencePeaks’ analytical methods and the interpretation of activity and physiological records.",
    profileUrl: "https://www.isglobal.org/our-team/-/profiles/18510",
    profileLabel: "ISGlobal profile",
    width: 220,
    height: 220,
  },
  {
    id: "didac",
    name: "Dídac Cayuela Dolcet",
    firstName: "Dídac",
    role: "Technology & product",
    position: "Co-founder",
    introduction: "Computer engineer and data scientist. Building the SciencePeaks platform.",
    biography:
      "Dídac leads technology and product, bringing engineering and data science together across the platform, wearable integrations and the user experience. He turns the scientific vision into software for participants and the professionals following them.",
    profileUrl: "https://didaccayuela.com/",
    profileLabel: "Professional profile",
    width: 480,
    height: 579,
  },
  {
    id: "manel",
    name: "Dr. Manel González Peris",
    firstName: "Manel",
    role: "Clinical advisor",
    position: "Activity & exercise medicine",
    introduction: "Sports medicine specialist at Xarxa Santa Tecla. Exercise prescription expertise.",
    biography:
      "Manel provides medical advice on SciencePeaks’ activity and METs work. He heads the Sports Medicine Unit at Xarxa Santa Tecla and is a co-author and coordinator of the Generalitat’s guide to prescribing physical exercise for health.",
    profileUrl:
      "https://comt.cat/es/el-dr-manel-gonzalez-escogido-nuevo-presidente-de-la-seccion-de-medicina-del-deporte-del-comt/",
    profileLabel: "Meet Manel at COMT",
    photoCredit: "Portrait source: Col·legi Oficial de Metges de Tarragona (COMT).",
    width: 1024,
    height: 576,
  },
  {
    id: "clara",
    name: "Clara Morella Teixidor",
    firstName: "Clara",
    role: "Innovation management",
    position: "Research into practice",
    introduction: "Innovation management expertise, connecting research with its practical applications.",
    biography:
      "Clara contributes innovation management expertise to SciencePeaks, helping connect the scientific project with opportunities for development and collaboration. Her perspective supports the path from research to practical use.",
    profileUrl: "https://www.linkedin.com/in/clara-morella-teixidor/",
    profileLabel: "LinkedIn profile",
    width: 220,
    height: 220,
  },
  {
    id: "victor",
    name: "Víctor Nàcher Castellet",
    firstName: "Víctor",
    role: "Data science",
    position: "Analysis & interpretation",
    introduction: "Data science expertise for understanding patterns in health and activity data.",
    biography:
      "Víctor contributes data science expertise to the team. His focus on data analysis brings an analytical perspective to SciencePeaks’ research and product work, alongside its scientific and engineering direction.",
    profileUrl: "https://www.linkedin.com/in/victornacher/",
    profileLabel: "LinkedIn profile",
    width: 400,
    height: 400,
  },
] as const;

export function OurTeam() {
  return (
    <section
      className="sp-section sp-team"
      id="team"
      aria-labelledby="team-title"
    >
      <div className="sp-wrap">
        <div className="sp-section-heading sp-reveal">
          <h2 id="team-title">Our team.</h2>
          <p>
            The people connecting science, clinical experience and technology
            for better follow-up in health and sport.
          </p>
        </div>

        <div className="sp-team-grid">
          {members.map((member) => (
            <article
              className={`sp-team-person sp-team-person-${member.id} sp-reveal`}
              key={member.id}
              aria-labelledby={`team-${member.id}-name`}
            >
              <div className="sp-team-portrait">
                <img
                  src={`/landing/team/${member.id}.webp`}
                  alt={member.name}
                  width={member.width}
                  height={member.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="sp-team-identity">
                <p className="sp-team-position">{member.position}</p>
                <h3 id={`team-${member.id}-name`}>{member.name}</h3>
                <p className="sp-team-role">{member.role}</p>
                <p className="sp-team-introduction">{member.introduction}</p>
              </div>

              <details className="sp-team-profile">
                <summary>
                  <span>
                    About {member.firstName}
                  </span>
                  <Plus size={18} weight="bold" aria-hidden="true" />
                </summary>
                <div className="sp-team-biography">
                  <p>{member.biography}</p>
                  <a
                    className="sp-team-link"
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.profileLabel}: ${member.name} (opens in a new tab)`}
                  >
                    {member.profileLabel}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  {"photoCredit" in member && (
                    <p className="sp-team-photo-credit">{member.photoCredit}</p>
                  )}
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
