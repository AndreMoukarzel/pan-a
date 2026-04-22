// =============================================================================
// DADOS DA PAN-A — edite este arquivo para atualizar parceiros e influenciadores
// =============================================================================


// -----------------------------------------------------------------------------
// PARCEIROS
//
// Campos de cada parceiro:
//   name  → Nome da empresa parceira
//   size  → Tamanho da audiência (número inteiro, ex: 350000 para 350 mil)
//   image → Caminho para a imagem/logo — aceita .jpg, .png, .svg, .webp
//            (ex: "img/partners/empresa.png" ou "img/partners/empresa.jpg")
// -----------------------------------------------------------------------------
const partners = [
  {
    name: "Gamology",
    size: 2080000,
    image: "img/partners/gamology.jpg"
  },
  {
    name: "La Roche Posay",
    size: 1400000,
    image: "img/partners/laroche.jpg"
  },
  {
    name: "Pokemon Go",
    size: 2600000,
    image: "img/partners/pokemongo.jpg"
  },
  {
    name: "Akiba Station",
    size: 42400,
    image: "img/partners/akiba.jpg"
  },
  {
    name: "Universidade Cruzeiro do Sul",
    size: 76700,
    image: "img/partners/cruzeiro.jpg"
  },
  {
    name: "Lumo Entertainment",
    size: 4000,
    image: "img/partners/lumo.jpg"
  },
  {
    name: "Anime Hunter",
    size: 22500,
    image: "img/partners/anime_hunter.jpg"
  }
];


// -----------------------------------------------------------------------------
// INFLUENCIADORES
//
// Campos de cada influenciador:
//   name        → Nome do influenciador
//   slug        → Identificador único para a URL (sem espaços, letras minúsculas,
//                 hífens no lugar de espaços — ex: "ana-flicker")
//   image       → Foto pequena (usada nos cards da página inicial)
//                 (ex: "img/influencers/nome.jpg")
//   fullImage   → Foto maior (usada na página de perfil individual)
//                 Pode ser o mesmo caminho de image se não houver foto maior
//   bio         → Texto curto de apresentação (1-3 frases)
//   mediaKitUrl → Link para o Media Kit em PDF (Google Drive, Dropbox, etc.)
//                 Use null se não houver media kit disponível
//   networks    → Redes sociais presentes
//              - url:  link do perfil
//              - size: tamanho da audiência (ex: "520K", "1,2M")
//              - Para omitir uma rede, use: null
// -----------------------------------------------------------------------------
const influencers = [
  {
    name: "Ana Flicker",
    slug: "ana-flicker",
    image: "img/influencers/ana_flicker.jpg",
    fullImage: "img/influencers/ana_flicker.jpg",
    bio: "Influencer com foco em games e assuntos geek, ela alcança centenas de milhares de seguidores através de seu bom humor e carisma enquanto fala de jogos, com grande foco em Pokémon e suas vertentes.",
    mediaKitUrl: "https://drive.google.com/file/d/19_4m9rLEZWg5hRAgDTfLPG2rrGQ8t6yh/view",
    networks: {
      youtube:   null,
      instagram: { url: "https://www.instagram.com/ana.flicker/",  size: "23K" },
      tiktok:    { url: "https://www.tiktok.com/@ana.flicker",    size: "130K"  },
      twitch:    null
    }
  }
];
