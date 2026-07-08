import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Bus,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  Compass,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mail,
  Maximize2,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  Newspaper,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { navGroups, news, pages, quickLinks, socialLinks, type Page } from "./content";

const contact = {
  address: ["210, promenade Erinvale", "Moncton, Nouveau-Brunswick", "E1A 9T4"],
  phone: "506-856-2700",
  email: "Info.Champlain@nbed.nb.ca",
};

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

const quickActionMap = [
  { label: "Inscrire mon enfant", href: "/parents/inscription-a-l-ecole", icon: Users },
  { label: "Transport scolaire", url: "https://francophonesud.nbed.nb.ca/vie-scolaire/transport-scolaire", icon: Bus },
  { label: "Calendrier scolaire", href: "/vie-scolaire/calendrier-scolaire", icon: CalendarDays },
  { label: "Nous écrire", href: "/contact", icon: Mail },
];

const valueCards = [
  {
    title: "Respect",
    icon: HeartHandshake,
    copy: "Nous valorisons chaque personne et cultivons un climat accueillant, bienveillant et inclusif.",
  },
  {
    title: "Responsabilité",
    icon: Compass,
    copy: "Nous encourageons l’engagement, l’autonomie et des choix éclairés au quotidien.",
  },
  {
    title: "Réussite",
    icon: Star,
    copy: "Nous visons l’excellence et célébrons les efforts et les réalisations de chacun.",
  },
];

const schoolLifeLinks = [
  { href: "/vie-scolaire/activites-scolaires", icon: GraduationCap },
  { href: "/vie-scolaire/calendrier-scolaire", icon: CalendarDays },
  { href: "/vie-scolaire/arts-et-culture", icon: Sparkles },
  { href: "/vie-scolaire/sante-et-mieux-etre", icon: ShieldCheck },
];

type CampusPhoto = {
  src: string;
  title: string;
  copy: string;
  position?: string;
};

const campusPhotos: CampusPhoto[] = [
  {
    src: "/assets/school-photos/aerial-campus.png",
    title: "Vue aérienne du campus",
    copy: "Une école vaste, lumineuse et entourée d’espaces verts.",
    position: "center 48%",
  },
  {
    src: "/assets/school-photos/exterior-main.jpg",
    title: "Entrée principale",
    copy: "Une première impression claire, lumineuse et professionnelle.",
    position: "58% center",
  },
  {
    src: "/assets/school-photos/playground-exterior.png",
    title: "Cour extérieure",
    copy: "Des espaces de jeu et de rassemblement intégrés à la vie scolaire.",
    position: "center 54%",
  },
  {
    src: "/assets/school-photos/hallway-library.png",
    title: "Couloir et bibliothèque",
    copy: "Des corridors clairs qui ouvrent sur des lieux d’apprentissage.",
    position: "center center",
  },
  {
    src: "/assets/school-photos/gymnasium.jpg",
    title: "Gymnase",
    copy: "Un espace polyvalent pour bouger, se rassembler et célébrer.",
    position: "center center",
  },
  {
    src: "/assets/school-photos/learning-space.jpg",
    title: "Espaces d’apprentissage",
    copy: "Des zones ouvertes et colorées qui soutiennent la collaboration.",
    position: "35% center",
  },
  {
    src: "/assets/school-photos/commons-hall.jpg",
    title: "Aires communes",
    copy: "Un environnement accueillant pour les transitions et la vie scolaire.",
    position: "center center",
  },
  {
    src: "/assets/school-photos/exterior-flags.jpg",
    title: "Façade et drapeaux",
    copy: "Une école bien ancrée dans sa communauté francophone.",
    position: "44% center",
  },
];

function getHashHref() {
  const hash = window.location.hash.replace(/^#/, "");
  return pages.some((page) => page.href === hash) ? hash : null;
}

function App() {
  const [activeHref, setActiveHref] = useState<string | null>(() => getHashHref());
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const activePage = activeHref ? pages.find((page) => page.href === activeHref) ?? null : null;

  const navigateTo = (href: string | null) => {
    setActiveHref(href);
    setMobileOpen(false);
    setSearchOpen(false);
    window.history.replaceState(null, "", href ? `#${href}` : window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onHashChange = () => setActiveHref(getHashHref());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="siteShell">
      <Header
        activeHref={activeHref}
        onNavigate={navigateTo}
        onSearch={() => setSearchOpen(true)}
        onMenu={() => setMobileOpen(true)}
      />
      {activePage ? (
        <ContentPage page={activePage} onNavigate={navigateTo} />
      ) : (
        <HomePage onNavigate={navigateTo} />
      )}
      <Footer onNavigate={navigateTo} />
      <SearchOverlay
        open={searchOpen}
        query={query}
        setQuery={setQuery}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigateTo}
      />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onNavigate={navigateTo} />
    </div>
  );
}

function Header({
  activeHref,
  onNavigate,
  onSearch,
  onMenu,
}: {
  activeHref: string | null;
  onNavigate: (href: string | null) => void;
  onSearch: () => void;
  onMenu: () => void;
}) {
  return (
    <header className="siteHeader">
      <div className="utilityBar">
        <div className="utilityInner">
          {quickLinks.map((link, index) => {
            const Icon = [AlertTriangle, Bus, MousePointer2, Users, Landmark][index] ?? ExternalLink;
            return (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="utilityLink">
                <Icon aria-hidden="true" size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="navBar">
        <button className="brandMark" onClick={() => onNavigate(null)} aria-label="Accueil">
          <img src={assetUrl("/assets/logo-champlain.png")} alt="École Champlain" />
        </button>
        <nav className="desktopNav" aria-label="Navigation principale">
          {navGroups.map((group) => (
            <div key={group.label} className="navGroup">
              <button className={group.items.some((item) => item.href === activeHref) ? "navTop active" : "navTop"}>
                {group.label}
                <ChevronDown aria-hidden="true" size={16} />
              </button>
              <div className="dropdownPanel">
                {group.items.map((item) => (
                  <button key={item.href} onClick={() => onNavigate(item.href)} className="dropdownItem">
                    <span>{item.label}</span>
                    <ChevronRight aria-hidden="true" size={16} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="headerActions">
          <a className="phoneLink" href={`tel:${contact.phone}`}>
            <Phone aria-hidden="true" size={20} />
            {contact.phone}
          </a>
          <button className="iconButton" onClick={onSearch} aria-label="Rechercher">
            <Search aria-hidden="true" size={22} />
          </button>
          <button className="menuButton" onClick={onMenu} aria-label="Ouvrir le menu">
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({ onNavigate }: { onNavigate: (href: string | null) => void }) {
  const latestNews = news.slice(0, 3);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [zoomPhoto, setZoomPhoto] = useState<CampusPhoto | null>(null);
  const activePhoto = campusPhotos[activePhotoIndex] ?? campusPhotos[0];

  useEffect(() => {
    if (!zoomPhoto) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomPhoto(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomPhoto]);

  return (
    <main>
      <section className="heroSection">
        <WaveLines className="heroWaves" />
        <div className="heroCopy">
          <h1>
            Ici, le voyage
            <br />
            d’apprentissage
            <br />
            commence.
          </h1>
          <p>
            Une école communautaire et entrepreneuriale de la maternelle à la 8e année, engagée
            dans la réussite, la construction identitaire acadienne et francophone, et le mieux-être
            de chaque élève.
          </p>
          <div className="heroCtas">
            <button className="primaryCta" onClick={() => onNavigate("/notre-ecole/au-sujet-de-l-ecole")}>
              Découvrir l’école
              <ArrowRight aria-hidden="true" size={18} />
            </button>
            <button className="secondaryCta" onClick={() => onNavigate("/parents/inscription-a-l-ecole")}>
              Inscription
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
        <div className="heroMedia" aria-label="Vie scolaire à École Champlain">
          <div className="photoCompass">
            <Compass aria-hidden="true" />
          </div>
          <img src={assetUrl("/assets/school-photos/exterior-main.jpg")} alt="Façade principale de l’École Champlain" />
          <div className="waveRibbons" aria-hidden="true">
            <span className="ribbon navy" />
            <span className="ribbon green" />
            <span className="ribbon red" />
            <span className="ribbon yellow" />
          </div>
        </div>
        <aside className="quickRail" aria-label="Actions rapides">
          {quickActionMap.map((item) => {
            const Icon = item.icon;
            const action = item.href ? () => onNavigate(item.href) : undefined;
            return item.href ? (
              <button key={item.label} onClick={action} className="railItem">
                <Icon aria-hidden="true" size={22} />
                <span>{item.label}</span>
              </button>
            ) : (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="railItem">
                <Icon aria-hidden="true" size={22} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </aside>
      </section>

      <section className="introBand">
        <BookOpen aria-hidden="true" />
        <h2>Apprendre. Découvrir. Grandir ensemble.</h2>
        <p>
          À École Champlain, chaque élève est accompagné pour développer son plein potentiel, en
          français, au cœur de notre communauté.
        </p>
        <button onClick={() => onNavigate("/notre-ecole/signification-du-logo")}>
          Lire la signification du logo
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </section>

      <section className="campusShowcase" aria-labelledby="campus-title">
        <div className="campusIntro">
          <h2 id="campus-title">L’école en images</h2>
          <p>
            De l’entrée principale aux espaces communs, le prototype met en valeur les lieux réels
            que les familles reconnaîtront et que l’équipe-école pourra défendre avec fierté.
          </p>
          <button onClick={() => onNavigate("/notre-ecole/au-sujet-de-l-ecole")}>
            Explorer l’école
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="photoExperience">
          <button
            className="photoStage"
            type="button"
            onClick={() => setZoomPhoto(activePhoto)}
            aria-label={`Agrandir ${activePhoto.title}`}
          >
            <img
              src={assetUrl(activePhoto.src)}
              alt={activePhoto.title}
              style={{ objectPosition: activePhoto.position }}
            />
            <span className="zoomCue" aria-hidden="true">
              <Maximize2 size={18} />
            </span>
            <span className="stageCaption">
              <strong>{activePhoto.title}</strong>
              <span>{activePhoto.copy}</span>
            </span>
          </button>
          <div className="photoStrip" aria-label="Photos de l’école">
            {campusPhotos.map((photo, index) => (
              <button
                key={photo.src}
                className={index === activePhotoIndex ? "photoThumb active" : "photoThumb"}
                type="button"
                onMouseEnter={() => setActivePhotoIndex(index)}
                onFocus={() => setActivePhotoIndex(index)}
                onClick={() => {
                  setActivePhotoIndex(index);
                  setZoomPhoto(photo);
                }}
                aria-label={`Afficher ${photo.title}`}
                aria-pressed={index === activePhotoIndex}
              >
                <img src={assetUrl(photo.src)} alt="" style={{ objectPosition: photo.position }} />
                <span>{photo.title}</span>
              </button>
            ))}
          </div>
        </div>
        {zoomPhoto && (
          <div className="photoLightbox" role="dialog" aria-modal="true" aria-label={zoomPhoto.title} onClick={() => setZoomPhoto(null)}>
            <button className="lightboxClose" type="button" onClick={() => setZoomPhoto(null)} aria-label="Fermer l’image agrandie">
              <X aria-hidden="true" />
            </button>
            <figure onClick={(event) => event.stopPropagation()}>
              <img src={assetUrl(zoomPhoto.src)} alt={zoomPhoto.title} style={{ objectPosition: zoomPhoto.position }} />
              <figcaption>
                <strong>{zoomPhoto.title}</strong>
                <span>{zoomPhoto.copy}</span>
              </figcaption>
            </figure>
          </div>
        )}
      </section>

      <section className="sectionFrame newsSection">
        <div className="sectionHeading">
          <Compass aria-hidden="true" />
          <h2>Nouvelles</h2>
        </div>
        <div className="newsRail">
          {latestNews.map((item) => (
            <button key={item.href} className="newsCard" onClick={() => onNavigate(item.href)}>
              {item.images[0] && <img src={assetUrl(item.images[0])} alt="" />}
              <span className="newsDate">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{summarize(item.body) || "Une nouvelle de la communauté scolaire Champlain."}</p>
              <span className="circleArrow">
                <ArrowRight aria-hidden="true" size={18} />
              </span>
            </button>
          ))}
          <button className="allNewsCard" onClick={() => onNavigate("/notre-ecole/nouvelles")}>
            <Newspaper aria-hidden="true" size={30} />
            <span>Voir toutes les nouvelles</span>
            <ArrowRight aria-hidden="true" size={20} />
          </button>
        </div>
      </section>

      <section className="valuesBand">
        <WaveLines className="valueWaves" />
        <h2>Mission, vision et valeurs</h2>
        <div className="valuesGrid">
          {valueCards.map((value, index) => {
            const Icon = value.icon;
            return (
              <button
                key={value.title}
                className={`valueCard tone${index}`}
                onClick={() => onNavigate("/notre-ecole/mission-vision-et-valeurs")}
              >
                <Icon aria-hidden="true" size={30} />
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="schoolLife">
        <div className="schoolLifeCopy">
          <h2>Vie scolaire</h2>
          <p>Tout ce qu’il faut savoir pour accompagner votre enfant dans son parcours scolaire.</p>
        </div>
        <div className="lifeRows">
          {schoolLifeLinks.map((item, index) => {
            const page = pages.find((candidate) => candidate.href === item.href);
            const Icon = item.icon;
            return (
              <button key={item.href} className={`lifeRow accent${index}`} onClick={() => onNavigate(item.href)}>
                <span>
                  <Icon aria-hidden="true" size={24} />
                </span>
                <strong>{page?.title}</strong>
                <ArrowRight aria-hidden="true" size={22} />
              </button>
            );
          })}
        </div>
      </section>

      <section className="communitySection">
        <div className="socialRail">
          <h2>Suivez-nous</h2>
          {socialLinks.map((link, index) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="socialLink">
              {index === 0 ? <MessageCircle aria-hidden="true" /> : <CirclePlay aria-hidden="true" />}
              {link.label}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          ))}
        </div>
        <div className="communityStory">
          <img src={assetUrl("/assets/school-photos/exterior-flags.jpg")} alt="Façade de l’École Champlain avec les drapeaux" />
          <div>
            <HeartHandshake aria-hidden="true" size={30} />
            <h3>Une communauté qui apprend ensemble</h3>
            <p>Des initiatives qui rapprochent les générations et renforcent les liens au sein de notre belle communauté.</p>
            <button onClick={() => onNavigate("/communaute/benevoles")}>
              Voir l’histoire
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentPage({ page, onNavigate }: { page: Page; onNavigate: (href: string | null) => void }) {
  const related = pages
    .filter((candidate) => candidate.group === page.group && candidate.href !== page.href && !candidate.href.includes("/nouvelles/"))
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);
  const groupPages = pages.filter((candidate) => candidate.group === page.group).sort((a, b) => a.order - b.order);

  return (
    <main className="contentShell">
      <aside className="sideNav" aria-label={`Pages ${page.group}`}>
        <button className="breadcrumbHome" onClick={() => onNavigate(null)}>
          Accueil
        </button>
        <h2>{page.group}</h2>
        {groupPages.map((item) => (
          <button
            key={item.href}
            className={item.href === page.href ? "sideItem active" : "sideItem"}
            onClick={() => onNavigate(item.href)}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <article className="articlePanel">
        <div className="articleHeader">
          <span>{page.group}</span>
          <h1>{page.title}</h1>
        </div>
        {page.images.length > 0 && <ImageGallery images={page.images} title={page.title} />}
        <ArticleBody page={page} />
        <div className="sourceActions">
          <a href={page.sourceUrl} target="_blank" rel="noreferrer">
            Voir la page source
            <ExternalLink aria-hidden="true" size={16} />
          </a>
          <button onClick={() => onNavigate("/contact")}>
            Une question?
            <ArrowRight aria-hidden="true" size={16} />
          </button>
        </div>
      </article>
      <aside className="relatedRail" aria-label="Pages connexes">
        <h2>Pages connexes</h2>
        {related.map((item) => (
          <button key={item.href} onClick={() => onNavigate(item.href)}>
            <span>{item.title}</span>
            <ChevronRight aria-hidden="true" size={16} />
          </button>
        ))}
        <div className="contactCard">
          <MessageCircle aria-hidden="true" />
          <h3>Une question?</h3>
          <p>Nous sommes là pour vous aider.</p>
          <button onClick={() => onNavigate("/contact")}>
            Nous joindre
            <ArrowRight aria-hidden="true" size={16} />
          </button>
        </div>
      </aside>
    </main>
  );
}

function ArticleBody({ page }: { page: Page }) {
  if (!page.body.trim()) {
    return <p className="emptyCopy">Cette page est principalement visuelle dans le site actuel. L’image source est conservée ici.</p>;
  }

  const lines = page.body
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="articleBody">
      {lines.map((line, index) => {
        if (line.length < 48 && index < lines.length - 1) {
          return <h2 key={`${line}-${index}`}>{line}</h2>;
        }
        return <p key={`${line}-${index}`}>{line}</p>;
      })}
    </div>
  );
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="imageGallery">
      {images.slice(0, 4).map((image, index) => (
        <img key={image} src={assetUrl(image)} alt={index === 0 ? title : ""} />
      ))}
    </div>
  );
}

function SearchOverlay({
  open,
  query,
  setQuery,
  onClose,
  onNavigate,
}: {
  open: boolean;
  query: string;
  setQuery: (value: string) => void;
  onClose: () => void;
  onNavigate: (href: string | null) => void;
}) {
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return pages.slice(0, 8);
    return pages
      .filter((page) => `${page.title} ${page.group} ${page.body}`.toLowerCase().includes(needle))
      .slice(0, 10);
  }, [query]);

  if (!open) return null;

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Recherche">
      <div className="searchPanel">
        <div className="searchTop">
          <Search aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher une page, un service, une ressource..."
          />
          <button onClick={onClose} aria-label="Fermer la recherche">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="searchResults">
          {results.map((page) => (
            <button key={page.href} onClick={() => onNavigate(page.href)}>
              <span>{page.group}</span>
              <strong>{page.title}</strong>
              <p>{summarize(page.body, 130)}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string | null) => void;
}) {
  if (!open) return null;

  return (
    <div className="mobileOverlay" role="dialog" aria-modal="true" aria-label="Menu mobile">
      <div className="mobileDrawer">
        <div className="mobileTop">
          <img src={assetUrl("/assets/logo-champlain.png")} alt="École Champlain" />
          <button onClick={onClose} aria-label="Fermer le menu">
            <X aria-hidden="true" />
          </button>
        </div>
        {navGroups.map((group) => (
          <details key={group.label} open={group.label === "Notre école"}>
            <summary>
              {group.label}
              <ChevronRight aria-hidden="true" />
            </summary>
            {group.items.map((item) => (
              <button key={item.href} onClick={() => onNavigate(item.href)}>
                {item.label}
              </button>
            ))}
          </details>
        ))}
        <button className="drawerContact" onClick={() => onNavigate("/contact")}>
          Nous joindre
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate: (href: string | null) => void }) {
  return (
    <footer className="footer">
      <WaveLines className="footerWaves" />
      <div className="footerBrand">
        <Compass aria-hidden="true" />
        <div>
          <h2>École Champlain</h2>
          <p>Naviguer. Apprendre. Réussir.</p>
        </div>
      </div>
      <address>
        <MapPin aria-hidden="true" />
        <span>
          {contact.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      </address>
      <div className="footerLinks">
        <a href={`tel:${contact.phone}`}>
          <Phone aria-hidden="true" size={18} />
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`}>
          <Mail aria-hidden="true" size={18} />
          {contact.email}
        </a>
        <button onClick={() => onNavigate("/contact")}>
          Nous joindre
          <Send aria-hidden="true" size={18} />
        </button>
      </div>
      <a href="https://francophonesud.nbed.nb.ca" target="_blank" rel="noreferrer" className="districtLogo">
        <img src={assetUrl("/assets/dsfs-logo.png")} alt="District scolaire francophone Sud" />
      </a>
    </footer>
  );
}

function WaveLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`waveLines ${className}`} viewBox="0 0 900 120" aria-hidden="true">
      <path d="M5 63 C 130 8, 215 110, 338 54 S 555 9, 688 61 828 92, 895 36" />
      <path d="M5 82 C 142 28, 230 126, 358 72 S 562 28, 694 80 824 111, 895 56" />
      <path d="M5 44 C 126 -4, 238 92, 344 36 S 546 -6, 690 43 810 74, 895 20" />
    </svg>
  );
}

function summarize(value = "", limit = 150) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  return cleaned.length > limit ? `${cleaned.slice(0, limit).trim()}…` : cleaned;
}

export default App;
