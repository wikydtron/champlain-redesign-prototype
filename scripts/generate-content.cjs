const fs = require("node:fs");

const data = JSON.parse(fs.readFileSync("content-source/scraped-pages.json", "utf8"));

const groups = {
  "Notre école": [
    "/notre-ecole/au-sujet-de-l-ecole",
    "/notre-ecole/mission-vision-et-valeurs",
    "/notre-ecole/personnel-de-l-ecole",
    "/notre-ecole/signification-du-logo",
    "/notre-ecole/le-code-de-vie",
    "/notre-ecole/le-code-vestimentaire",
    "/notre-ecole/chanson-theme",
    "/notre-ecole/nouvelles",
  ],
  "Programmes et services": [
    "/programmes-et-services/l-ecole-communautaire-entrepreneuriale",
    "/programmes-et-services/petite-enfance",
    "/programmes-et-services/programmes-de-francisation",
    "/programmes-et-services/programmes-d-etudes",
    "/programmes-et-services/services-d-orientation",
  ],
  "Vie scolaire": [
    "/vie-scolaire/activites-scolaires",
    "/vie-scolaire/calendrier-scolaire",
    "/vie-scolaire/comites-et-clubs",
    "/vie-scolaire/horaire-de-la-journee",
    "/vie-scolaire/arts-et-culture",
    "/vie-scolaire/sante-et-mieux-etre",
  ],
  Parents: [
    "/parents/allergies",
    "/parents/comites-de-parents",
    "/parents/fournitures-scolaires",
    "/parents/inscription-a-l-ecole",
    "/parents/protocole-d-urgence",
    "/parents/ressources",
  ],
  Communauté: ["/communaute/benevoles", "/communaute/ecoles-nourricieres"],
  "Nous joindre": ["/contact"],
};

const ignored = new Set([
  "/templates/ecole/css/template.css?1720444525",
  "/templates/ecole/css/main.css?1720444525",
  "/templates/ecole/css/editor.css?1720444525",
  "/templates/ecole/favicon.ico",
  "/media/plg_system_jcepro/site/css/content.min.css?86aa0286b6232c4a5b58f892ce080277",
  "/media/plg_system_jcemediabox/css/jcemediabox.min.css?f646e5445d3791b94e8b9282903afc4f",
  "/notre-ecole/nouvelles?lang=fr",
]);

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function localImage(url) {
  if (!url || url.includes("logo_champlain_vertical")) return null;
  const name = decodeURIComponent(url.split("/").pop()).replace(/[^a-zA-Z0-9._-]/g, "-");
  return `/assets/site-images/${name}`;
}

function cleanupText(text = "") {
  return text
    .replace(/\bExpiré\b\s*/gi, "")
    .replace(/\bTest update\b/g, "")
    .replace(/sommes situé à/g, "sommes situés à")
    .replace(/\bacceuillons\b/g, "accueillons")
    .replace(/\bacueillir\b/g, "accueillir")
    .replace(/Intergénérationnel/g, "intergénérationnelle")
    .replace(/Activité intergénérationnelle\s*\|\s*Activité intergénérationnelle/g, "Activité intergénérationnelle")
    .replace(/Calendrier scholaire/g, "Calendrier scolaire")
    .replace(/élèves ayants droit/g, "élèves ayant droit")
    .replace(/barre de granula/g, "barre granola")
    .replace(/Littéracie/g, "Littératie")
    .replace(/Numéracie/g, "Numératie")
    .replace(/Cliquer pour/g, "Cliquez pour")
    .replace(/Cliquer sur le lien/g, "Cliquez sur le lien")
    .replace(/l`horaire/g, "l’horaire")
    .replace(/R espect/g, "Respect")
    .replace(/R esponsabilité/g, "Responsabilité")
    .replace(/R éussite/g, "Réussite")
    .replace(/\s+\|\s+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanupTitle(title = "") {
  return cleanupText(title)
    .replace(/^Matériel scolaire$/, "Fournitures scolaires")
    .replace(/^Comités$/, "Comités et clubs")
    .replace(/^Activité intergénérationnelle\s*$/, "Activité intergénérationnelle")
    .replace(/^imagination$/, "Imagination")
    .replace(/^inclusion$/, "Inclusion");
}

const pageGroup = Object.entries(groups)
  .flatMap(([group, hrefs]) => hrefs.map((href, order) => [href, { group, order }]))
  .reduce((acc, [href, value]) => {
    acc[href] = value;
    return acc;
  }, {});

let pages = data.pages
  .filter((page) => !ignored.has(page.href))
  .map((page, index) => ({
    id: slugify(page.href.replace(/^\//, "")) || `page-${index}`,
    href: page.href,
    title: cleanupTitle(page.title || page.href.split("/").pop()),
    group: pageGroup[page.href]?.group || (page.href.includes("/nouvelles/") ? "Nouvelles" : "Autres"),
    order: pageGroup[page.href]?.order ?? index,
    sourceUrl: page.url,
    body: cleanupText(page.body || ""),
    images: (page.images || []).map(localImage).filter(Boolean),
  }))
  .filter((page) => page.title || page.body || page.images.length);

const seen = new Set();
pages = pages.filter((page) => {
  if (seen.has(page.href)) return false;
  seen.add(page.href);
  return true;
});

const navGroups = Object.entries(groups).map(([label, hrefs]) => ({
  label,
  items: hrefs.map((href) => {
    const page = pages.find((candidate) => candidate.href === href);
    return {
      href,
      label: page?.title || cleanupTitle(href.split("/").pop().replace(/-/g, " ")),
    };
  }),
}));

const news = pages
  .filter((page) => page.href.includes("/notre-ecole/nouvelles/"))
  .map((page, index) => ({
    ...page,
    date: ["24 mars 2026", "10 octobre 2025", "10 avril 2025", "17 janvier 2025", "16 décembre 2024", "16 décembre 2024"][index] || "",
  }));

const quickLinks = [
  { label: "Retards et fermetures", url: "https://francophonesud.nbed.nb.ca/retards-et-fermetures" },
  { label: "Transport scolaire", url: "https://francophonesud.nbed.nb.ca/vie-scolaire/transport-scolaire" },
  { label: "Clic", url: "https://clic.nbed.nb.ca" },
  { label: "MonAccès", url: "https://siedsfs.nbed.nb.ca/public/home.html" },
  { label: "Le District", url: "https://francophonesud.nbed.nb.ca" },
];

const socialLinks = [
  { label: "Facebook", url: "https://www.facebook.com/champlainecole/?ref=br_rs" },
  { label: "YouTube", url: "https://www.youtube.com/channel/UCmnHT2BQlYPzPTsavuFcDXg" },
];

const payload = `export type Page = {
  id: string;
  href: string;
  title: string;
  group: string;
  order: number;
  sourceUrl: string;
  body: string;
  images: string[];
  date?: string;
};

export const navGroups = ${JSON.stringify(navGroups, null, 2)} as const;

export const quickLinks = ${JSON.stringify(quickLinks, null, 2)} as const;

export const socialLinks = ${JSON.stringify(socialLinks, null, 2)} as const;

export const pages: Page[] = ${JSON.stringify(pages, null, 2)};

export const news = ${JSON.stringify(news, null, 2)} satisfies Page[];
`;

fs.writeFileSync("src/content.ts", payload, "utf8");
console.log(JSON.stringify({ pages: pages.length, news: news.length, navGroups: navGroups.length }, null, 2));
