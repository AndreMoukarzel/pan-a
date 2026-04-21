// =============================================================================
// DADOS DA PAN-A — edite este arquivo para atualizar parceiros e influenciadores
// =============================================================================


// -----------------------------------------------------------------------------
// PARCEIROS
//
// Campos de cada parceiro:
//   name  → Nome da empresa parceira
//   size  → Tamanho da audiência (número inteiro, ex: 350000 para 350 mil)
//   image → Caminho para a imagem/logo (ex: "img/partners/empresa.png")
// -----------------------------------------------------------------------------
const partners = [
  {
    name: "Empresa Alpha",
    size: 350000,
    image: "img/partners/placeholder.svg"
  },
  {
    name: "Empresa Beta",
    size: 280000,
    image: "img/partners/placeholder.svg"
  },
  {
    name: "Empresa Gamma",
    size: 420000,
    image: "img/partners/placeholder.svg"
  },
  {
    name: "Empresa Delta",
    size: 190000,
    image: "img/partners/placeholder.svg"
  }
];


// -----------------------------------------------------------------------------
// INFLUENCIADORES
//
// Campos de cada influenciador:
//   name        → Nome do influenciador
//   personalUrl → Link para a página pessoal do influenciador (ex: "https://site.com.br")
//                 Use null se não houver página pessoal
//   image       → Caminho para a foto (ex: "img/influencers/nome.png")
//   networks    → Redes sociais presentes
//              - url:  link do perfil
//              - size: tamanho da audiência (ex: "520K", "1,2M")
//              - Para omitir uma rede, use: null
// -----------------------------------------------------------------------------
const influencers = [
  {
    name: "GamerBR",
    personalUrl: null,
    image: "img/influencers/placeholder.svg",
    networks: {
      youtube:   { url: "https://youtube.com/@gamerbr",   size: "520K" },
      instagram: { url: "https://instagram.com/gamerbr",  size: "180K" },
      tiktok:    { url: "https://tiktok.com/@gamerbr",    size: "95K"  },
      twitch:    null
    }
  },
  {
    name: "NerdCast",
    personalUrl: null,
    image: "img/influencers/placeholder.svg",
    networks: {
      youtube:   { url: "https://youtube.com/@nerdcast",  size: "1,2M" },
      instagram: null,
      tiktok:    null,
      twitch:    { url: "https://twitch.tv/nerdcast",     size: "45K"  }
    }
  },
  {
    name: "AnimeGirl",
    personalUrl: null,
    image: "img/influencers/placeholder.svg",
    networks: {
      youtube:   null,
      instagram: { url: "https://instagram.com/animegirl", size: "310K" },
      tiktok:    { url: "https://tiktok.com/@animegirl",   size: "220K" },
      twitch:    null
    }
  },
  {
    name: "PixelHero",
    personalUrl: null,
    image: "img/influencers/placeholder.svg",
    networks: {
      youtube:   { url: "https://youtube.com/@pixelhero",   size: "890K" },
      instagram: { url: "https://instagram.com/pixelhero",  size: "420K" },
      tiktok:    { url: "https://tiktok.com/@pixelhero",    size: "670K" },
      twitch:    { url: "https://twitch.tv/pixelhero",      size: "120K" }
    }
  }
];
