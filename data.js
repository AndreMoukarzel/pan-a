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
  }
  {
    name: "Akiba Station",
    size: 42400,
    image: "img/partners/akiba.jpg"
  },
  {
    name: "Lumo Entertainment",
    size: 4000,
    image: "img/partners/lumo.jpg"
  }
];


// -----------------------------------------------------------------------------
// INFLUENCIADORES
//
// Campos de cada influenciador:
//   name        → Nome do influenciador
//   personalUrl → Link para a página pessoal do influenciador (ex: "https://site.com.br")
//                 Use null se não houver página pessoal
//   image       → Caminho para a foto — aceita .jpg, .png, .svg, .webp
//                 (ex: "img/influencers/nome.jpg" ou "img/influencers/nome.png")
//   networks    → Redes sociais presentes
//              - url:  link do perfil
//              - size: tamanho da audiência (ex: "520K", "1,2M")
//              - Para omitir uma rede, use: null
// -----------------------------------------------------------------------------
const influencers = [
  {
    name: "Ana Flicker",
    personalUrl: "https://sites.google.com/pana-content.com/ana-flicker/",
    image: "img/influencers/ana_flicker.jpg",
    networks: {
      youtube:   null,
      instagram: { url: "https://www.instagram.com/ana.flicker/",  size: "23K" },
      tiktok:    { url: "https://www.tiktok.com/@ana.flicker",    size: "130K"  },
      twitch:    null
    }
  }
];
