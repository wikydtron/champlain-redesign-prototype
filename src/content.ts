export type Page = {
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

export const navGroups = [
  {
    "label": "Notre école",
    "items": [
      {
        "href": "/notre-ecole/au-sujet-de-l-ecole",
        "label": "Au sujet de l’école"
      },
      {
        "href": "/notre-ecole/mission-vision-et-valeurs",
        "label": "Mission, vision et valeurs"
      },
      {
        "href": "/notre-ecole/personnel-de-l-ecole",
        "label": "Personnel de l’école"
      },
      {
        "href": "/notre-ecole/signification-du-logo",
        "label": "Signification du logo"
      },
      {
        "href": "/notre-ecole/le-code-de-vie",
        "label": "Code de vie"
      },
      {
        "href": "/notre-ecole/le-code-vestimentaire",
        "label": "Code vestimentaire"
      },
      {
        "href": "/notre-ecole/chanson-theme",
        "label": "Chanson thème"
      },
      {
        "href": "/notre-ecole/nouvelles",
        "label": "Nouvelles"
      }
    ]
  },
  {
    "label": "Programmes et services",
    "items": [
      {
        "href": "/programmes-et-services/l-ecole-communautaire-entrepreneuriale",
        "label": "École communautaire entrepreneuriale"
      },
      {
        "href": "/programmes-et-services/petite-enfance",
        "label": "Petite enfance"
      },
      {
        "href": "/programmes-et-services/programmes-de-francisation",
        "label": "Programmes de francisation"
      },
      {
        "href": "/programmes-et-services/programmes-d-etudes",
        "label": "Programmes d'études"
      },
      {
        "href": "/programmes-et-services/services-d-orientation",
        "label": "Services d’orientation"
      }
    ]
  },
  {
    "label": "Vie scolaire",
    "items": [
      {
        "href": "/vie-scolaire/activites-scolaires",
        "label": "Activités scolaires"
      },
      {
        "href": "/vie-scolaire/calendrier-scolaire",
        "label": "Calendrier scolaire"
      },
      {
        "href": "/vie-scolaire/comites-et-clubs",
        "label": "Comités et clubs"
      },
      {
        "href": "/vie-scolaire/horaire-de-la-journee",
        "label": "Horaire de la journée"
      },
      {
        "href": "/vie-scolaire/arts-et-culture",
        "label": "Arts et culture"
      },
      {
        "href": "/vie-scolaire/sante-et-mieux-etre",
        "label": "Santé et mieux-être"
      }
    ]
  },
  {
    "label": "Parents",
    "items": [
      {
        "href": "/parents/allergies",
        "label": "Allergies"
      },
      {
        "href": "/parents/comites-de-parents",
        "label": "Comités de parents"
      },
      {
        "href": "/parents/fournitures-scolaires",
        "label": "Fournitures scolaires"
      },
      {
        "href": "/parents/inscription-a-l-ecole",
        "label": "Inscription à l’école"
      },
      {
        "href": "/parents/protocole-d-urgence",
        "label": "Protocole d’urgence"
      },
      {
        "href": "/parents/ressources",
        "label": "Ressources"
      }
    ]
  },
  {
    "label": "Communauté",
    "items": [
      {
        "href": "/communaute/benevoles",
        "label": "Bénévoles"
      },
      {
        "href": "/communaute/ecoles-nourricieres",
        "label": "École nourricière"
      }
    ]
  },
  {
    "label": "Nous joindre",
    "items": [
      {
        "href": "/contact",
        "label": "Nous joindre"
      }
    ]
  }
] as const;

export const quickLinks = [
  {
    "label": "Retards et fermetures",
    "url": "https://francophonesud.nbed.nb.ca/retards-et-fermetures"
  },
  {
    "label": "Transport scolaire",
    "url": "https://francophonesud.nbed.nb.ca/vie-scolaire/transport-scolaire"
  },
  {
    "label": "Clic",
    "url": "https://clic.nbed.nb.ca"
  },
  {
    "label": "MonAccès",
    "url": "https://siedsfs.nbed.nb.ca/public/home.html"
  },
  {
    "label": "Le District",
    "url": "https://francophonesud.nbed.nb.ca"
  }
] as const;

export const socialLinks = [
  {
    "label": "Facebook",
    "url": "https://www.facebook.com/champlainecole/?ref=br_rs"
  },
  {
    "label": "YouTube",
    "url": "https://www.youtube.com/channel/UCmnHT2BQlYPzPTsavuFcDXg"
  }
] as const;

export const pages: Page[] = [
  {
    "id": "notre-ecole-au-sujet-de-l-ecole",
    "href": "/notre-ecole/au-sujet-de-l-ecole",
    "title": "Au sujet de l’école",
    "group": "Notre école",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/au-sujet-de-l-ecole",
    "body": "L’école Champlain est une école communautaire et entrepreneuriale qui vise la réussite de tous les élèves. Nous sommes situés à Moncton au Nouveau-Brunswick et nous accueillons des élèves de la maternelle à la 8e année.\nC’est avec enthousiasme que nous vous accueillons à notre site Internet. Nous espérons qu’il saura répondre à vos questions et saura alimenter une belle réflexion par rapport aux apprentissages réalisés par nos élèves, nos parents et notre personnel. De plus, vous prendrez connaissance de certaines activités enrichissantes et stimulantes que vit notre communauté scolaire.\nL’école Champlain a d’abord pour mission d’offrir à sa communauté scolaire une éducation de haute qualité axée sur le respect des différences. De concert avec les parents et la collectivité, le personnel compétent et dynamique de notre école relève ce défi en étant efficace et attentif aux besoins de tous et de toutes.\nMerci à tous ces partenaires!",
    "images": []
  },
  {
    "id": "notre-ecole-chanson-theme",
    "href": "/notre-ecole/chanson-theme",
    "title": "Chanson thème",
    "group": "Notre école",
    "order": 6,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/chanson-theme",
    "body": "« Jardin d’espoir »\nDe pays en pays on sème l’harmonie\nPour voir germer l’entraide et l’amitié,\nEt peu importe la différence de couleur\nOn porte la langue française dans nos cœurs.\nQu’on soit rouge qu’on soit jaune blanc ou noir\nÀ l’école du monde grandit un jardin d’espoir (bis)\nPour que l’amour règne dans le monde entier\nFormons un bouquet de solidarité,\nQue chaque fleur ouvre ses pétales\nPour qu’à jamais la solitude s’en aille.\nQu’on soit rouge qu’on soit jaune blanc ou noir\nÀ l’école du monde grandit un jardin d’espoir (bis)\nOui j’ai le droit à mes opinions\nC’est comme l’eau qui me garde en santé,\nEt quand j’ai soif d’amour et d’éducation\nLe jardinier vient soudainement m’arroser.\nQu’on soit rouge qu’on soit jaune blanc ou noir\nÀ l’école du monde grandit un jardin d’espoir (bis)\nProduit du Canada 2009\nécrite, composée et interprétée par les élèves de 5e 2008-2009\navec la collaboration de tous les élèves de la maternelle à la 4e\nsous la direction de Ginette Ahier\nCe projet fut rendu possible grâce à la collaboration de : GénieArt, SANB, théâtre l'Escaouette, CPNB",
    "images": []
  },
  {
    "id": "notre-ecole-le-code-de-vie",
    "href": "/notre-ecole/le-code-de-vie",
    "title": "Code de vie",
    "group": "Notre école",
    "order": 4,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/le-code-de-vie",
    "body": "CODE DE VIE\nLa mission de notre école est d’offrir un milieu propice à l’apprentissage à tous nos élèves. Voici quelques règles de vie à observer ainsi que les conséquences logiques qui y sont rattachées :",
    "images": [
      "/assets/site-images/Pages_agenda_2019-2020_6-7-page-011_1.jpg"
    ]
  },
  {
    "id": "notre-ecole-le-code-vestimentaire",
    "href": "/notre-ecole/le-code-vestimentaire",
    "title": "Code vestimentaire",
    "group": "Notre école",
    "order": 5,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/le-code-vestimentaire",
    "body": "Porter la casquette (capuchon inclus), lunette de soleil ou autre est interdit à l’intérieur de l’école\nPourquoi?\nÉtant donné que le chapeau, le capuchon et les lunettes ont pour fonction de protéger du soleil ou du froid, les élèves devront les ranger ou enlever le capuchon lorsqu’ils sont à l’intérieur.\nExemples de comportements\nobservables\n- Je porte mon chapeau et/ou mes lunettes en entrant et en sortant de l’école seulement.\nConséquences\nAvertissement verbal\nL’enseignant.e confisque le chapeau/lunette jusqu’au lendemain.\nPorter des vêtements convenables\nPourquoi?\nL’école est un milieu d’apprentissage où le respect des autres se démontre aussi par nos choix vestimentaires.\nExemples de comportements\nobservables\n- Mon pantalon et/ou mon chandail recouvrent le bas du dos et le ventre.\n- Mon chandail ou ma camisole ne révèle pas mes sous-vêtements, mes épaules ou ma poitrine.\n- Ma jupe, ma robe ou mes culottes courtes doivent être pas plus que deux pouces au-dessus de la mi-cuisse.\n- Mon chandail est sans message ou images inappropriés.\n- Des pantalons moulants du genre « leggings » sont permis s’ils sont opaques.\n- Les pantalons doivent couvrir, en tout temps, les sous-vêtements. (voir l’image ci-dessous)\nConséquences\n1. L’enseignant.e titulaire appelle à la maison\n2. L’élève porte un chandail d’éducation physique disponible au secrétariat de l’école.\nN.B. Chaque situation d’écart de conduite est évaluée (cas par cas).\nTenue vestimentaire sécuritaire en éducation physique\nEn éducation physique, comme dans l’ensemble de l’école, la sécurité et le bien-être des élèves sont des préoccupations constantes qui nous tiennent à cœur. Donc, afin que votre enfant puisse participer de façon sécuritaire au cours d’éducation physique, nous vous demandons de bien vouloir respecter les directives provenant du nouveau document du Ministère de l'Éducation et du Développement de la petite enfance (Lignes directrices sur la sécurité en éducation physique du Nouveau-Brunswick 2015).\nVoici les lignes directrices dont nous aimerions attirer votre attention (p. 10/section 3):\nAvoir des espadrilles (non marquantes SVP) et des vêtements appropriés pour l’activité physique.\n*** (3 e à la 8 e année) L’école demande le port du chandail bleu de l’école au cours d’éducation physique.\nEnlever ou recouvrir tous bijoux qui pendent et/ou accessoires qui posent un risque de blessure lors d’activité physique (ex, montre, boucles d’oreilles, collier, etc.).\nLes cheveux longs doivent être attachés afin de dégager la vue (élastique ou bandeau en tissu).\n*** Avoir deux élastiques ou un bandeau en tout temps dans son sac d’école afin d’attacher ses cheveux.",
    "images": [
      "/assets/site-images/code_vestimentaire.jpg"
    ]
  },
  {
    "id": "notre-ecole-mission-vision-et-valeurs",
    "href": "/notre-ecole/mission-vision-et-valeurs",
    "title": "Mission, vision et valeurs",
    "group": "Notre école",
    "order": 1,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/mission-vision-et-valeurs",
    "body": "Mission de l'école\nEngager chaque élève dans sa réussite éducative, dans sa construction identitaire acadienne et francophone et dans le développement de son mieux-être global.\nAmener les individus à s’engager, à se responsabiliser et à devenir autonomes.\nDévelopper la fierté de la langue française dans notre milieu tout en respectant les cultures.\nCréer un milieu éducatif favorable au développement maximal du potentiel de chaque individu.\nLes trois R (valeurs)\nRespect\nResponsabilité\nRéussite\nDécouvrez également la mission, la vision, les valeurs et le crédo du District scolaire francophone Sud .",
    "images": []
  },
  {
    "id": "notre-ecole-nouvelles",
    "href": "/notre-ecole/nouvelles",
    "title": "Nouvelles",
    "group": "Notre école",
    "order": 7,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles",
    "body": "Nouvelles\nCapitaine Champlain\nExpiré\n24 Mars 2026\nLes élèves qui font de la couture au Centre d'exploration des métiers\nExpiré\n10 Octobre 2025\nActivité intergénérationnelle\nExpiré\n10 Avril 2025\nActivité intergénérationnelle\nMerci à la Santé publique, Zone 1 de Vitalité pour rendre cette belle activité possible et aussi le projet est réalisé en collaboration avec le Comité régional de résilience du sud-est du Nouveau-Brunswick\nMerci à la Santé publique, Zone 1 de Vitalité pour rendre cette belle activité possible et aussi le projet est réalisé en collaboration avec le Comité régional de résilience du sud-est du Nouveau-Brunswick\nimagination\nExpiré\n17 Janvier 2025\nLes élèves de 3e année de la classe de madame Kloé ont utilisé leur imagination, leurs habiletés en dessin et en écriture pour réaliser un projet unique!\nChaque élève a dessiné un lutin et a écrit un texte pour le décrire. Ensuite, ils ont lu leur texte devant la classe pour que les autres élèves de la classe devinent quel lutin leur appartenait.\nAvec Book Creator, ils ont réécrit leur texte et se sont enregistrés en faire la lecture. Enfin, ils ont créé un livre regroupant toutes leurs descriptions. Ce livre est maintenant disponible en ligne pour que les parents puissent eux aussi deviner quel lutin appartient à leur enfant!\nBravo à tous pour votre créativité et votre beau travail!\ninclusion\nExpiré\n16 Décembre 2024\nLes élèves de la 4e année de la classe de madame Josée Beaulieu ont eu la chance d’accueillir monsieur Zeqi pour une présentation spéciale sur le lien entre l’inclusion et la musique. Ils ont discuté des ressemblances et des différences qui nous rassemblent et nous rendent uniques, une belle occasion de réfléchir à l’importance de l’inclusion!\nNavire étudiants 2024-2025\nExpiré\n16 Décembre 2024\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
    "images": [
      "/assets/site-images/654317766_1437101005097249_1758538364296700708_n.jpg",
      "/assets/site-images/558323933_1296352302505454_3509589404852656434_n.jpg",
      "/assets/site-images/486602405_1123464933127526_1707134891622024237_n.jpg",
      "/assets/site-images/472299329_1059756922831661_5732527299923206157_n.jpg",
      "/assets/site-images/470206131_1044119724395381_8360843548341051676_n.jpg",
      "/assets/site-images/461180180_982037720603582_2195504242769398916_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-personnel-de-l-ecole",
    "href": "/notre-ecole/personnel-de-l-ecole",
    "title": "Personnel de l’école",
    "group": "Notre école",
    "order": 2,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/personnel-de-l-ecole",
    "body": "Cliquez ici pour voir la liste du Liste du personnel 2025-2026",
    "images": [
      "/assets/site-images/fc617e6f-1.png",
      "/assets/site-images/fc617e6f-2.png"
    ]
  },
  {
    "id": "notre-ecole-signification-du-logo",
    "href": "/notre-ecole/signification-du-logo",
    "title": "Signification du logo",
    "group": "Notre école",
    "order": 3,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/signification-du-logo",
    "body": "Signification du logo:\nLes Couleurs\nJaune, bleu et rouge : couleurs que l’on retrouve dans le drapeau acadien\nVert : représente l’environnement et la terre; c’est une valeur importante à l’école Champlain. De plus, puisque nous étions dans un environnement où il y avait beaucoup de pollution à l’ancienne école, nous voulions une couleur qui représente l’environnement et la terre.\nPour les couleurs de l’Acadie… nous ne sommes pas tous d’origine acadienne, mais nous sommes tous en Acadie et il faut être fier d'afficher nos couleurs .\nLe Bateau\nPuisque Champlain était un explorateur marin, nous voulions représenter la raison d’être du nom de notre école. De plus, le bateau représente le voyage et l’aventure des apprentissages des enfants à notre école.\nLes vagues\nElles sont représentées par les pages dans un livre. La lecture et les livres sont au centre des apprentissages des enfants.\nNous savons tous que dans un voyage… il arrive parfois que les vagues peuvent devenir un peu houleuses. Ceci représente les petits défis que nous devons affronter tous les jours. Ces petits défis font partie de nos expériences de vie.\nL’étoile pour les mâts du bateau\nPour nous en Acadie, l’étoile est présente sur notre drapeau. Elle nous guide dans nos vies.\nLe mot ÉCOLE écrit en scripte représente le début des apprentissages en lecture et en écriture.\nLe mot CHAMPLAIN en cursive (lettres collées) représente la suite logique des apprentissages de la lecture et de l’écriture.\nL’enfant au centre de l’étoile\nL'image d'un enfant au centre de l’étoile représente l'élève au cœur de ses apprentissages qui se fait guider par l'école Champlain à l'aide de ses différentes actions pédagogiques.\nOn remarque que l’élève a les bras ouverts. Ceci représente un signe de JOIE et D’ACCEPTATION EN GUISE DE RESPECT DES DIFFÉRENCES.\nDécouvrez également la signification du logo du District scolaire francophone Sud .",
    "images": []
  },
  {
    "id": "programmes-et-services-l-ecole-communautaire-entrepreneuriale",
    "href": "/programmes-et-services/l-ecole-communautaire-entrepreneuriale",
    "title": "École communautaire entrepreneuriale",
    "group": "Programmes et services",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/programmes-et-services/l-ecole-communautaire-entrepreneuriale",
    "body": "Au District scolaire francophone Sud, nous sommes fiers que toutes nos écoles soient dans le mouvement de l’école communautaire entrepreneuriale. Ce mouvement a pour objectif de rendre les écoles plus communautaires et plus entrepreneuriales\nRendre une école plus communautaire signifie un mouvement croissant de l’enfant/du jeune, de l’enseignant et de la direction vers la communauté et réciproquement, un mouvement des personnes, organisations et entreprises de la communauté vers l’école. Des partenariats bidirectionnels où chacun est gagnant.\nRendre une école plus entrepreneuriale signifie d’amener graduellement les enfants et les jeunes à développer leur esprit d’entreprendre de même que l’ensemble des compétences dont ils auront besoin pour réaliser leur projet de vie et de carrière.\nAinsi, les adultes mettent en place les conditions permettant aux élèves d’apprendre à s’entreprendre en étant initiateurs, réalisateurs et gestionnaires de projets/initiatives répondant à des besoins réels dans l’école et/ou dans la communauté.\nEn plus d’atteindre certains résultats d’apprentissage des programmes d’études, ces projets contextualisés et signifiants permettent le développement de compétences, qualités et attitudes associées à la politique de finalités du CED et au Profil de sortie d’un élève du ministère de l’Éducation et du Développement de la petite enfance .\nAinsi, de telles occasions d’apprentissages expérientiels favorisent chez chaque jeune la construction de son identité et la réalisation de son projet de vie-carrière, puisqu’on stimule la découverte de ses forces, défis, passions et intérêts, le développement de son autonomie, ses compétences, sa résilience et son sens d’appartenance, et ce, tout en lui donnant de multiples occasions de vivre des expériences diverses, d’innover et de s’engager au sein de sa communauté.\nUne école, c’est un peu l’âme d’une communauté. L’école communautaire entrepreneuriale est le reflet de cette pensée.\nPour en apprendre plus au sujet de la culture entrepreneuriale en éducation. Il est possible de consulter les ressources suivantes:\n« L’école communautaire entrepreneuriale : moyen privilégié pour favoriser le développement de compétences chez les élèves du DSFS. »\nLe site web de Place aux compétences , l’organisme avec lequel le District scolaire francophone Sud collabore étroitement",
    "images": [
      "/assets/site-images/ecole-communautaire-entrepreneuriale-stat.jpg"
    ]
  },
  {
    "id": "programmes-et-services-petite-enfance",
    "href": "/programmes-et-services/petite-enfance",
    "title": "Petite enfance",
    "group": "Programmes et services",
    "order": 1,
    "sourceUrl": "https://champlain.nbed.nb.ca/programmes-et-services/petite-enfance",
    "body": "Vous pouvez consulter la section sur la petite enfance dans le site Web du District scolaire francophone Sud.",
    "images": []
  },
  {
    "id": "programmes-et-services-programmes-d-etudes",
    "href": "/programmes-et-services/programmes-d-etudes",
    "title": "Programmes d'études",
    "group": "Programmes et services",
    "order": 3,
    "sourceUrl": "https://champlain.nbed.nb.ca/programmes-et-services/programmes-d-etudes",
    "body": "Toutes les écoles francophones du Nouveau-Brunswick utilisent les mêmes programmes créés par le ministère de l'éducation:\nProgrammes d'études\nDans son Plan d’éducation de 10 ans , le gouvernement du Nouveau-Brunswick a identifié le projet de vie et de carrière comme priorité. Le développement de compétences en fait partie.\nLes compétences identifiées dans le Profil de sortie d’un élève sont des acquis durables et transférables qui serviront à l’élève tout au long de sa vie tant personnelle que professionnelle. Il s’agit autant de compétences socioaffectives, cognitives que communicatives. Dans ces visées, chaque élève est capable de :\nCompétences socioaffectives\nFaire preuve d’une bonne connaissance et maîtrise de soi\nFaire preuve d’autonomie\nChoisir de saines habitudes de vie\nFaire preuve de conscience environnementale\nEntretenir des relations saines en respectant la diversité\nTravailler en équipe et faire preuve de leadership\nÊtre un citoyen engagé capable de contribuer à la vie communautaire\nCompétences cognitives\nQuestionner, analyser et faire des liens entre diverses informations\nPrendre position en utilisant des arguments fondés, nuancés et réfléchis\nFaire preuve d’une pensée créative et générer des idées novatrices\nCompétences communicatives\nChoisir de l’information pertinente pour traiter un sujet\nValider et ajuster ses perceptions et représentations\nUtiliser les technologies pour bien communiquer\nFaire preuve d’éthique dans l’exploitation des médias\nSavoir bien s’exprimer, de façon claire et par divers moyens\nLes visées du Profil de sortie sont de développer chez les élèves un sens de citoyenneté engagé et éthique, une vie équilibrée et un désir d’apprendre tout au long de sa vie.\nL’école communautaire entrepreneuriale\nL’école communautaire entrepreneuriale est l’un des moyens privilégiés par le district pour favoriser le développement des compétences.",
    "images": []
  },
  {
    "id": "programmes-et-services-services-d-orientation",
    "href": "/programmes-et-services/services-d-orientation",
    "title": "Services d’orientation",
    "group": "Programmes et services",
    "order": 4,
    "sourceUrl": "https://champlain.nbed.nb.ca/programmes-et-services/services-d-orientation",
    "body": "Le programme d'orientation à l'école a comme but d'aider les élèves à vivre pleinement leur cheminement de vie et de carrière. Pour ce faire, l'accent est placé sur la connaissance de soi et l'exploration de carrières. Pour que les jeunes soient pleinement engagés dans leur projet de carrière, il est nécessaire qu'ils se connaissent bien et qu'ils sachent quelles sont les différentes options de carrière qui se présentent à eux.\nÀ la fin du secondaire, plusieurs jeunes éprouvent des difficultés à faire un choix de carrière. Afin de remédier à ce problème, depuis septembre 2019, toutes les écoles de la 6 e année à la 8 e année du District scolaire francophone Sud ont une conseillère en orientation afin d'aider à l'instauration d'une approche ciblée sur la vie et la carrière.\nÀ l'école Champlain, le personnel scolaire a mis en place plusieurs choses afin de promouvoir ce mouvement dans leur école. Tout d'abord, un nouveau volet vie-carrière dans le programme d'études du cours de Formation personnelle et sociale permet aux élèves d'explorer diverses facettes de la connaissance de soi et des carrières. Le programme d'études propose des résultats d'apprentissages spécifiques à chaque niveau, abordant entre autres les thèmes suivants : développement vie-carrière, caractéristiques personnelles, exploration du monde du travail et valorisation des professions, l'importance des études, comprendre les relations entre le travail, la communauté et l'économie, et la conception d'un plan d'action ayant des objectifs de vie et de carrière. Pour répondre à ces objectifs, les enseignants et la personne conseillère en orientation animent des activités permettant aux élèves de réfléchir à ces différents thèmes.\nDeuxièmement, selon le niveau scolaire, les élèves ont l'occasion d'explorer les métiers et les professions en ayant des visites et des animations de professionnels (journée carrière), en visitant des lieux de travail (journée de stage), ou bien en visiteur des établissements de formation secondaire et post-secondaire.\nBref, le volet vie-carrière est très bénéfique pour les élèves. Puisque les élèves apprennent à se connaître sous différents angles, et qu'ils sont exposés à différents métiers et à diverses professions, ils seront plus en mesure de s'engager activement dans leur projet de carrière. Ils seront plus aptes à choisir une carrière leur permettant de s'épanouir comme personne, de mettre à profit leurs compétences et de contribuer positivement à une société changeante.\nConseillère en orientation :\nDanielle Vienneau\ndanielle.vienneau@nbed.nb.ca",
    "images": []
  },
  {
    "id": "programmes-et-services-programmes-de-francisation",
    "href": "/programmes-et-services/programmes-de-francisation",
    "title": "Programmes de francisation",
    "group": "Programmes et services",
    "order": 2,
    "sourceUrl": "https://champlain.nbed.nb.ca/programmes-et-services/programmes-de-francisation",
    "body": "Nous offrons divers programmes offerts dans le but :\nD’augmenter les compétences langagières des enfants ciblés (voir critères d’admissibilité pour chacun des programmes ci-dessous) afin de favoriser la réussite éducative, le mieux-être et la construction identitaire;\nD’accompagner et d'outiller les parents pour qu’ils s’engagent dans le processus de francisation de leurs enfants;\nFrancobulles\nQu’est-ce que c’est? Francobulles est un groupe-jeu de francisation pour les familles d’enfants de 0 à 5 ans (parent/tuteur, grand-parent, gardien ET enfant) qui a pour but d’accompagner et d’engager le parent dans l’éducation acadienne et francophone de son enfant.\nCritères d’admissibilité : Le programme est gratuit et aucune inscription préalable n’est nécessaire, il suffit de se présenter à l'école les mardis et jeudis dès 8h30.\nFrancojeunes\nQu'est-ce c'est? le CAFi offre un nouveau programme parascolaire de francisation et d’aide aux devoirs intitulé Franco-jeunes*NB, destiné aux élèves nouveaux arrivants de la maternelle à la 8e année. Ce programme vise principalement à accroître la persévérance et la réussite éducative des élèves allophones à travers des ateliers de francisation, de tutorat et d’accompagnement en après-classe offerts dans 4 écoles de la région de Moncton.\nPour de plus amples renseignements et inscription, veuillez écrire à coordination.fr@cafi-nb.org ou composez le (506) 588-5700.\nFrancisation préscolaire\nQu’est-ce que c’est? La francisation préscolaire est un programme pour les enfants de 4 à 5 ans qui fréquenteront la maternelle en septembre et qui vise le développement des compétences langagières francophones.\nCritères d’admissibilité : L’enfant doit satisfaire tous les critères d’admissibilité suivants :\nL’enfant fréquentera la maternelle en septembre;\nL’enfant a un parent ayant droit ou est immigrant et n’a pas de compétence linguistique suffisante dans aucune des deux langues officielles;\nL’enfant a fait l’ÉPE-AD en anglais (ou encore en français mais aurait dû la passer en anglais);\nL'enfant n’est pas inscrit dans un service de garderie éducatif francophone 3 jours ou plus par semaine.\nQuestions fréquemment posées\nEn tant que parent, quel est mon rôle dans l’apprentissage du français de mon enfant?\nÀ chaque jour, prenez le temps de chanter, de jouer, de parler et de lire, en français, avec vos enfants!\nProfitez des déplacements en voiture pour chanter et parler en français.\nMettez en place une routine du dodo en réservant un moment pour la lecture d’une histoire.\nParticipez aux jeux de votre enfant, intéressez-vous à ce qu’il aime, entrez dans son monde.\nAmenez votre enfant au parc et amusez-vous avez lui. Jouez à la cachette, balancez-vous, etc.\nComment puis-je favoriser l’apprentissage du français à la maison?\nCréez des zones stimulantes pour apprendre le français :\nUne zone délimitée dans l’espace : par exemple, un pupitre sur lequel on retrouve des livres français, des beaux crayons attirants, des décorations aux couleurs de notre francophonie acadienne, etc.\nUne zone délimitée dans le temps : par exemple, consacrez l’heure du bain à des discussions et des jeux en français ou faites place au « cinéma-maison francophone » les vendredis.\nL’important est « d’aider votre enfant à développer des habitudes de vie en français » tout en s’amusant en famille. La constance est la clé du succès!",
    "images": []
  },
  {
    "id": "vie-scolaire-activites-scolaires",
    "href": "/vie-scolaire/activites-scolaires",
    "title": "Activités scolaires",
    "group": "Vie scolaire",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/activites-scolaires",
    "body": "Activités scolaires\nConsultez ce calendrier pour découvrir les activités qui se déroulent à l’école. Comme cet espace fait la promotion d’activités scolaires, seuls les membres du personnel peuvent y faire des publications. Consultez Le Boulevard pour les activités communautaires. Promouvoir une activité scolaire\nInfo\nIl n'y a aucun article dans cette catégorie. Si des sous-catégories sont affichées sur cette page, elles peuvent contenir des articles.",
    "images": []
  },
  {
    "id": "vie-scolaire-arts-et-culture",
    "href": "/vie-scolaire/arts-et-culture",
    "title": "Arts et culture",
    "group": "Vie scolaire",
    "order": 4,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/arts-et-culture",
    "body": "Tout au long de l'année scolaire, nos élèves auront la chance de vivre plusieurs activités artistiques et culturelles. Nous croyons qu'elles sont essentielles pour améliorer leurs apprentissages et leur appréciation de la langue française en plus d'aider au développement de leur sentiment d'appartenance à la culture francophone et acadienne. Les activités culturelles qui auront lieu à l'école seront affichées dans la section \" Activités scolaires \" de ce site web. Nous offrons à nos élèves plusieurs spectacles, projets artistiques, activités et concours durant l’année scolaire. (GénieArts, spectacles Cerf-volant avec Radarts, invités, concours d'épellation, Festival Frye, tournée d'auteurs, Salon du livre de Dieppe, FICFA, sorties, etc).\nConsultez également la section Arts et culture dans le site Web du District scolaire francophone Sud.",
    "images": []
  },
  {
    "id": "vie-scolaire-calendrier-scolaire",
    "href": "/vie-scolaire/calendrier-scolaire",
    "title": "Calendrier scolaire",
    "group": "Vie scolaire",
    "order": 1,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/calendrier-scolaire",
    "body": "Cliquez pour télécharger le calendrier de cette année\nCalendrier scolaire 2026-2027",
    "images": []
  },
  {
    "id": "vie-scolaire-comites-et-clubs",
    "href": "/vie-scolaire/comites-et-clubs",
    "title": "Comités et clubs",
    "group": "Vie scolaire",
    "order": 2,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/comites-et-clubs",
    "body": "Nous offrons à nos élèves plusieurs occasions de s’impliquer dans la vie scolaire et participer à des comités qui les passionnent! En voici quelques exemples :\n- Tricot\n- Comité multiculturel\n- Échecs\n- Sciences et Math\n- Journal étudiant\n- Magie\n- Sportif\n- Conseil des élèves\n- Danse\n- 12 jours de Noël\n- Yoga\n- Art et culture\n- Diversité",
    "images": []
  },
  {
    "id": "vie-scolaire-horaire-de-la-journee",
    "href": "/vie-scolaire/horaire-de-la-journee",
    "title": "Horaire de la journée",
    "group": "Vie scolaire",
    "order": 3,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/horaire-de-la-journee",
    "body": "Cliquez sur le lien pour accéder à l’horaire de la journée 2025-2026\nHoraire de la journée 2025-2026",
    "images": []
  },
  {
    "id": "vie-scolaire-sante-et-mieux-etre",
    "href": "/vie-scolaire/sante-et-mieux-etre",
    "title": "Santé et mieux-être",
    "group": "Vie scolaire",
    "order": 5,
    "sourceUrl": "https://champlain.nbed.nb.ca/vie-scolaire/sante-et-mieux-etre",
    "body": "Consultez également la section sur la santé et le mieux-être dans le site Web du District scolaire francophone Sud.",
    "images": []
  },
  {
    "id": "parents-allergies",
    "href": "/parents/allergies",
    "title": "Allergies",
    "group": "Parents",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/allergies",
    "body": "Certains de nos élèves ont des allergies sévères. Nous sollicitons la collaboration de tous les parents, afin de réduire les risques de réactions allergiques. Par conséquent, nous vous demandons de nous aider en vérifiant qu’ aucun produit contenant des arachides ou ses dérivés (beurre d’arachides, barre granola, le Nutella, etc.), les noix, ne sont apportés à l’école.\nDe plus, si votre enfant, avant de partir de la maison, a été en contact avec des arachides ou ses dérivés ou des noix, nous vous demandons de l’inciter à se laver les mains avant de quitter le domicile. Pour de plus amples renseignements sur les allergies sévères, vous pouvez visiter les sites Internet suivants :\nhttp://epipen.ca/fr/?gclid=EAIaIQobChMIg6Dz6e2Q1gIVKjPTCh0UqQCGEAEYASAAEgIuO_D_BwE\nhttp://allergies-alimentaires.org/application/themes/aqaa/assets/pdf/Guide%20des%20synonymes_3.pdf\nhttp://allergies-alimentaires.org/fr/allergenes\nAfin d’assurer un milieu sécuritaire à tous les élèves, une directive portant sur la gestion des allergies est en vigueur au District scolaire francophone Sud. Cette directive a pour but d’encadrer la gestion des allergies, en raison du risque de réaction anaphylactique chez les élèves ayant un diagnostic d’allergies.\nConsultez la directive 7003 - Santé et sécurité au travail – La gestion des allergies dans le site Web du District scolaire francophone Sud.",
    "images": []
  },
  {
    "id": "parents-comites-de-parents",
    "href": "/parents/comites-de-parents",
    "title": "Comités de parents",
    "group": "Parents",
    "order": 1,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/comites-de-parents",
    "body": "Il y a deux comités constitués de parents à notre école, soit le comité de parents de l'école Champlain et le comité parental d'appui à l'éducation. Afin de clarifier davantage le rôle de ces comités, voici quelques-uns de leurs objectifs :\nCPNB : Comité de parents de l'école Champlain\nLe comité de parents (CPNB) voit à enrichir la vie scolaire des enfants. Le CPNB est responsable des campagnes de financement. Celui-ci travaille en étroite collaboration avec les membres du personnel afin d'améliorer la qualité de vie des élèves en assurant une participation active des parents aux activités de l'école. Le CPNB entretient un lien étroit avec le comité parental d'appui à l'école.\nLe comité parental d'appui à l'école :\nconseiller la direction au sujet du plan d'amélioration de l'école,\npasse en revue le rapport sur le rendement de l'école,\ncollaborer à l'embauche de la direction et de la direction adjointe,\nparticiper à l'évaluation du rendement de la direction,\ncommuniqué au CÉD (Conseil d'Éducation du District) les enjeux du CPAÉ (ex : rénovations, ajouts à l'école.),\nconseiller la direction à propos des politiques de l'école (ex : sécurité, affichage.).",
    "images": []
  },
  {
    "id": "parents-fournitures-scolaires",
    "href": "/parents/fournitures-scolaires",
    "title": "Fournitures scolaires",
    "group": "Parents",
    "order": 2,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/fournitures-scolaires",
    "body": "Liste de matériel 2026-2027",
    "images": []
  },
  {
    "id": "parents-inscription-a-l-ecole",
    "href": "/parents/inscription-a-l-ecole",
    "title": "Inscription à l’école",
    "group": "Parents",
    "order": 3,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/inscription-a-l-ecole",
    "body": "Consultez la section Inscription à l’école dans le site Web du District scolaire francophone Sud. Vous y trouverez de l’information au sujet de l’inscription et de l’admissibilité à l’école de langue française pour les élèves ayant droit, les élèves immigrants et pour les personnes qui souhaitent faire des études dans notre district à titre d’élèves internationaux.",
    "images": []
  },
  {
    "id": "parents-protocole-d-urgence",
    "href": "/parents/protocole-d-urgence",
    "title": "Protocole d’urgence",
    "group": "Parents",
    "order": 4,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/protocole-d-urgence",
    "body": "Pour toute situation d’urgence où les élèves et le personnel de l’école doivent évacuer le bâtiment, nous nous rendrons à l’extérieur, aux points indiqués pour chaque classe lors des pratiques de sorties d’urgences faites en début d’année scolaire.\nDans le cas où les conditions météorologiques sont inacceptables (pluie, neige ou froid) ou dans l’éventualité d’une impossibilité de reprendre les lieux de l’école à cause d’un danger quelconque, les titulaires conduiront leurs élèves dans un lieu de rassemblement secondaire.\nPrière de prendre connaissance de l’Avis raisonnable et des consignes aux parents en cas d’urgence dans le site Web du District scolaire francophone Sud.",
    "images": []
  },
  {
    "id": "parents-ressources",
    "href": "/parents/ressources",
    "title": "Ressources",
    "group": "Parents",
    "order": 5,
    "sourceUrl": "https://champlain.nbed.nb.ca/parents/ressources",
    "body": "École à distance\nConstruction identitaire\nMieux-être\nLittératie\nNumératie\nFrancisation",
    "images": []
  },
  {
    "id": "communaute-benevoles",
    "href": "/communaute/benevoles",
    "title": "Bénévoles",
    "group": "Communauté",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/communaute/benevoles",
    "body": "L'école Champlain est toujours heureuse d'accueillir de nouveaux bénévoles.\nVous pouvez communiquer avec l'école et laisser votre nom afin de faire du bénévolat!\nMERCI !!! Étant bénévole, vous contribuez à l'épanouissement des enfants de l'école Champlain !",
    "images": []
  },
  {
    "id": "communaute-ecoles-nourricieres",
    "href": "/communaute/ecoles-nourricieres",
    "title": "École nourricière",
    "group": "Communauté",
    "order": 1,
    "sourceUrl": "https://champlain.nbed.nb.ca/communaute/ecoles-nourricieres",
    "body": "École nourricière\nL'école Champlain accueille des élèves de la maternelle à la 8e année. Nous sommes l'école nourricière de l'école secondaire L'Odyssée de la 9e à la 12e année.\nSite web L'Odyssée: https://lodyssee.nbed.nb.ca/",
    "images": []
  },
  {
    "id": "contact",
    "href": "/contact",
    "title": "Nous joindre",
    "group": "Nous joindre",
    "order": 0,
    "sourceUrl": "https://champlain.nbed.nb.ca/contact",
    "body": "210, promenade Erinvale\nMoncton, Nouveau-Brunswick\nE1A 9T4\n506-856-2700",
    "images": []
  },
  {
    "id": "notre-ecole-nouvelles-253-capitaine-champlain",
    "href": "/notre-ecole/nouvelles/253-capitaine-champlain",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 28,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/253-capitaine-champlain",
    "body": "",
    "images": [
      "/assets/site-images/654317766_1437101005097249_1758538364296700708_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-nouvelles-251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "href": "/notre-ecole/nouvelles/251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 29,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "body": "",
    "images": [
      "/assets/site-images/558323933_1296352302505454_3509589404852656434_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-nouvelles-250-activite-intergenerationnel",
    "href": "/notre-ecole/nouvelles/250-activite-intergenerationnel",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 30,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/250-activite-intergenerationnel",
    "body": "Activité intergénérationnelle\nMerci à la Santé publique, Zone 1 de Vitalité pour rendre cette belle activité possible et aussi le projet est réalisé en collaboration avec le Comité régional de résilience du sud-est du Nouveau-Brunswick",
    "images": [
      "/assets/site-images/486602405_1123464933127526_1707134891622024237_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-nouvelles-249-imagination",
    "href": "/notre-ecole/nouvelles/249-imagination",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 31,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/249-imagination",
    "body": "Les élèves de 3e année de la classe de madame Kloé ont utilisé leur imagination, leurs habiletés en dessin et en écriture pour réaliser un projet unique!\nChaque élève a dessiné un lutin et a écrit un texte pour le décrire. Ensuite, ils ont lu leur texte devant la classe pour que les autres élèves de la classe devinent quel lutin leur appartenait.\nAvec Book Creator, ils ont réécrit leur texte et se sont enregistrés en faire la lecture. Enfin, ils ont créé un livre regroupant toutes leurs descriptions. Ce livre est maintenant disponible en ligne pour que les parents puissent eux aussi deviner quel lutin appartient à leur enfant!\nBravo à tous pour votre créativité et votre beau travail!",
    "images": [
      "/assets/site-images/472299329_1059756922831661_5732527299923206157_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-nouvelles-248-inclusion",
    "href": "/notre-ecole/nouvelles/248-inclusion",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 32,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/248-inclusion",
    "body": "Les élèves de la 4e année de la classe de madame Josée Beaulieu ont eu la chance d’accueillir monsieur Zeqi pour une présentation spéciale sur le lien entre l’inclusion et la musique. Ils ont discuté des ressemblances et des différences qui nous rassemblent et nous rendent uniques, une belle occasion de réfléchir à l’importance de l’inclusion!",
    "images": [
      "/assets/site-images/470206131_1044119724395381_8360843548341051676_n.jpg"
    ]
  },
  {
    "id": "notre-ecole-nouvelles-247-navire-etudiants-2024-2025",
    "href": "/notre-ecole/nouvelles/247-navire-etudiants-2024-2025",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 33,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/247-navire-etudiants-2024-2025",
    "body": "",
    "images": [
      "/assets/site-images/461180180_982037720603582_2195504242769398916_n.jpg"
    ]
  }
];

export const news = [
  {
    "id": "notre-ecole-nouvelles-253-capitaine-champlain",
    "href": "/notre-ecole/nouvelles/253-capitaine-champlain",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 28,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/253-capitaine-champlain",
    "body": "",
    "images": [
      "/assets/site-images/654317766_1437101005097249_1758538364296700708_n.jpg"
    ],
    "date": "24 mars 2026"
  },
  {
    "id": "notre-ecole-nouvelles-251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "href": "/notre-ecole/nouvelles/251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 29,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/251-les-eleves-qui-font-de-la-couture-au-centre-dexploration-des-metiers",
    "body": "",
    "images": [
      "/assets/site-images/558323933_1296352302505454_3509589404852656434_n.jpg"
    ],
    "date": "10 octobre 2025"
  },
  {
    "id": "notre-ecole-nouvelles-250-activite-intergenerationnel",
    "href": "/notre-ecole/nouvelles/250-activite-intergenerationnel",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 30,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/250-activite-intergenerationnel",
    "body": "Activité intergénérationnelle\nMerci à la Santé publique, Zone 1 de Vitalité pour rendre cette belle activité possible et aussi le projet est réalisé en collaboration avec le Comité régional de résilience du sud-est du Nouveau-Brunswick",
    "images": [
      "/assets/site-images/486602405_1123464933127526_1707134891622024237_n.jpg"
    ],
    "date": "10 avril 2025"
  },
  {
    "id": "notre-ecole-nouvelles-249-imagination",
    "href": "/notre-ecole/nouvelles/249-imagination",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 31,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/249-imagination",
    "body": "Les élèves de 3e année de la classe de madame Kloé ont utilisé leur imagination, leurs habiletés en dessin et en écriture pour réaliser un projet unique!\nChaque élève a dessiné un lutin et a écrit un texte pour le décrire. Ensuite, ils ont lu leur texte devant la classe pour que les autres élèves de la classe devinent quel lutin leur appartenait.\nAvec Book Creator, ils ont réécrit leur texte et se sont enregistrés en faire la lecture. Enfin, ils ont créé un livre regroupant toutes leurs descriptions. Ce livre est maintenant disponible en ligne pour que les parents puissent eux aussi deviner quel lutin appartient à leur enfant!\nBravo à tous pour votre créativité et votre beau travail!",
    "images": [
      "/assets/site-images/472299329_1059756922831661_5732527299923206157_n.jpg"
    ],
    "date": "17 janvier 2025"
  },
  {
    "id": "notre-ecole-nouvelles-248-inclusion",
    "href": "/notre-ecole/nouvelles/248-inclusion",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 32,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/248-inclusion",
    "body": "Les élèves de la 4e année de la classe de madame Josée Beaulieu ont eu la chance d’accueillir monsieur Zeqi pour une présentation spéciale sur le lien entre l’inclusion et la musique. Ils ont discuté des ressemblances et des différences qui nous rassemblent et nous rendent uniques, une belle occasion de réfléchir à l’importance de l’inclusion!",
    "images": [
      "/assets/site-images/470206131_1044119724395381_8360843548341051676_n.jpg"
    ],
    "date": "16 décembre 2024"
  },
  {
    "id": "notre-ecole-nouvelles-247-navire-etudiants-2024-2025",
    "href": "/notre-ecole/nouvelles/247-navire-etudiants-2024-2025",
    "title": "Nouvelles",
    "group": "Nouvelles",
    "order": 33,
    "sourceUrl": "https://champlain.nbed.nb.ca/notre-ecole/nouvelles/247-navire-etudiants-2024-2025",
    "body": "",
    "images": [
      "/assets/site-images/461180180_982037720603582_2195504242769398916_n.jpg"
    ],
    "date": "16 décembre 2024"
  }
] satisfies Page[];
