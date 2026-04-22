// =============================================================================
// BLOG — edite este arquivo para gerenciar os posts do blog
// =============================================================================
//
// Para publicar um novo post, adicione um objeto ao array blogPosts abaixo.
// Não é necessário criar nenhum arquivo HTML.
//
// ─── CAMPOS PRINCIPAIS ────────────────────────────────────────────────────────
//
//   slug        → Identificador único do post (letras minúsculas, hífens,
//                 sem espaços nem acentos — ex: "tendencias-gamer-2026")
//   title       → Título completo do post
//   date        → Data no formato AAAA-MM-DD (ex: "2026-04-22")
//   author      → Nome do autor
//   authorRole  → Cargo ou título do autor
//   authorAvatar→ Foto do autor em img/team/ (ex: "img/team/joao.jpg")
//                 Use null se não houver foto
//   excerpt     → Resumo curto (aparece no card do blog — 1 a 2 frases)
//   coverImage  → Imagem de capa em img/blog/ (ex: "img/blog/capa.jpg")
//                 Use null se não houver imagem de capa
//   tags        → Lista de categorias (ex: ["gaming", "marketing"])
//
// ─── CONTEÚDO DO POST (campo "content") ───────────────────────────────────────
//
//   O conteúdo é uma lista de blocos. Cada bloco tem um "type" e os campos
//   correspondentes. Tipos disponíveis:
//
//   { type: "paragraph", text: "..." }
//       Parágrafo de texto. Suporta formatação inline:
//         **texto em negrito**
//         _texto em itálico_    ou    *texto em itálico*
//         [texto do link](https://url.com)
//
//   { type: "heading", text: "..." }
//       Subtítulo de seção (h2)
//
//   { type: "subheading", text: "..." }
//       Subtítulo menor (h3)
//
//   { type: "image", src: "img/blog/nome.jpg", alt: "Descrição da imagem" }
//       Imagem dentro do post. Coloque o arquivo em img/blog/
//
//   { type: "list", items: ["Item 1", "Item 2", "Item 3"] }
//       Lista com marcadores. Cada item suporta a mesma formatação inline
//       descrita em "paragraph"
//
//   { type: "quote", text: "..." }
//       Citação em destaque (blockquote)
//
// =============================================================================

const blogPosts = [
  {
    slug: "bem-vindo-ao-blog-pan-a",
    title: "Bem-vindo ao Blog da Pan-A",
    date: "2026-04-22",
    author: "Equipe Pan-A",
    authorRole: "Agência de Marketing Gamer",
    authorAvatar: null,
    excerpt: "Apresentamos nosso novo espaço de conteúdo: artigos sobre marketing gamer, tendências do universo geek e estratégias para conectar marcas a comunidades apaixonadas.",
    coverImage: null,
    tags: ["pan-a", "marketing", "gaming"],
    content: [
      {
        type: "paragraph",
        text: "Estamos animados em apresentar o **Blog da Pan-A**: nosso espaço dedicado a conteúdo sobre marketing gamer, tendências do universo geek e estratégias para conectar marcas a comunidades apaixonadas no Brasil."
      },
      {
        type: "heading",
        text: "O que você vai encontrar aqui"
      },
      {
        type: "paragraph",
        text: "Aqui vamos compartilhar _insights_ do mercado de gaming e entretenimento digital, análises de campanhas, tendências emergentes e o que aprendemos trabalhando com marcas e criadores de conteúdo no universo gamer e geek."
      },
      {
        type: "list",
        items: [
          "Tendências de marketing no universo gamer e geek",
          "Estratégias para conectar marcas a comunidades digitais",
          "Bastidores de campanhas e parcerias",
          "Dicas para criadores de conteúdo"
        ]
      },
      {
        type: "heading",
        text: "Por que este blog existe"
      },
      {
        type: "paragraph",
        text: "O público gamer e geek brasileiro é um dos mais engajados e apaixonados do mundo. Ele não consume conteúdo de forma passiva — ele participa, debate, cria e compartilha. Para marcas que querem se conectar de forma **autêntica** com essa comunidade, entender esse universo é fundamental."
      },
      {
        type: "quote",
        text: "A Pan-A existe para facilitar essa conexão entre marcas e o universo gamer."
      },
      {
        type: "paragraph",
        text: "Novos posts serão publicados regularmente. Se sua marca quer explorar o potencial do marketing gamer, [entre em contato com a gente](../index.html#contato)."
      }
    ]
  }
];
