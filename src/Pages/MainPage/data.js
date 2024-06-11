import { jsx as _jsx } from "react/jsx-runtime";

//  Demo dos projetos
import video1 from "../../Videos/MusifyPro.mp4";
import video2 from "../../Videos/NossoBlog.mp4";
import video3 from "../../Videos/BelezaShop.mp4";
import video4 from "../../Videos/Custos.mp4";
import video5 from "../../Videos/FilmeLib.webm";
import demo6 from "../../Images/amcDestaque.jpg";

//  Thumbnails dos projetos
import thumb1 from "../../Images/musifyPro.jpg";
import thumb2 from "../../Images/nossoBlog.jpg";
import thumb3 from "../../Images/BelezeShop.jpg";
import thumb4 from "../../Images/Custos.jpg";
import thumb5 from "../../Images/filmelib.jpg";
import thumb6 from "../../Images/amc.jpg";

// Fotos dos clientes que testemunharam
import avatar1 from "../../Images/avatar1.gif";
import avatar2 from "../../Images/avatar2.gif";
import avatar3 from "../../Images/avatar3.png";
import avatar4 from "../../Images/avatar4.gif";

// Icones dos cards de serviço
import { CgWebsite } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { BiCopyAlt, BiVideo } from "react-icons/bi";

export const testemunhos = [
   {
      fotoCliente: avatar1,
      topico: "Professional de excelente qualidade",
      testemunho: "Eu considero o Renzi muito proativo e super talentoso, cuidou do meu problema num instante",
      nomeCliente: "Amanda Caleiras",
      profissaoCliente: "Ceo na ANOVAFASE",
   },
   {
      fotoCliente: avatar2,
      topico: "Professional de excelente qualidade",
      testemunho: "Renzi foi super prático, fez um ótimo trabalho em pouquíssimo tempo cobrou um ótimo valor",
      nomeCliente: "Devid Ronald",
      profissaoCliente: "Cliente no Workana",
   },
   {
      fotoCliente: avatar3,
      topico: "Professional de excelente qualidade",
      testemunho: "Seus serviços foram essenciais para o sucesso do meu projeto online! 💯",
      nomeCliente: "Ermelinda Manuel",
      profissaoCliente: "Assistente financeira",
   },
   {
      fotoCliente: avatar4,
      topico: "Professional de excelente qualidade",
      testemunho: "Incrível! Contratei o Renzi como freelancer web e fiquei impressionado com seu trabalho! 🚀",
      nomeCliente: "Daniel França",
      profissaoCliente: "Ceo no Nosso ads",
   },
];

export const servicos = [
   {
      icone: /*#__PURE__*/ _jsx(CgWebsite, {}),
      titulo: "Criação de Landing Page",
      descricao: "Páginas otimizadas que convertem. Design atraente e focado em resultados.",
   },
   {
      icone: /*#__PURE__*/ _jsx(BsGlobe, {}),
      titulo: "Desenvolvimento Web",
      descricao: "Soluções web personalizadas para impulsionar seu negócio utilizando as melhores tecnologias do mercado.",
   },
   {
      icone: /*#__PURE__*/ _jsx(MdOutlineDesignServices, {}),
      titulo: "Web design",
      descricao: "Designs modernos e intuitivos que cativam e envolvem seu público para garantir conversão e confiança.",
   },
   {
      icone: /*#__PURE__*/ _jsx(SiGoogleads, {}),
      titulo: "Gestão de tráfego",
      descricao: "Aumente sua visibilidade e resultados com estratégias eficazes de marketing digital.",
   },
   {
      icone: /*#__PURE__*/ _jsx(BiCopyAlt, {}),
      titulo: "Copywriting",
      descricao: "Mensagens persuasivas que impactam seu público-alvo e impulsionam as conversões.",
   },
   {
      icone: /*#__PURE__*/ _jsx(BiVideo, {}),
      titulo: "Edição de vídeo",
      descricao: "Transforme suas ideias em vídeos cativantes e profissionais com efeitos impressionantes com o Filmora.",
   },
];

export const portfolio = [
   {
      titulo: "Musify Pro: Leitor de prévias do Spotify",
      url: "https://musify-pro.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Css, Spotify api"],
      tipo: "Website",
      repositorio: "https://github.com/renzi-fidele-frontend/Music-player-app",
      videoDestaque: video1,
      imagemThumbnail: thumb1,
      fotoCentralizada: true,
   },
   {
      titulo: "Site para a venda de óculos Beleza",
      url: "https://www.belezanosolhos.com.br/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Css, Yampi"],
      tipo: "Website",
      repositorio: "https://github.com/renzi-fidele-frontend/BelezaShop",
      videoDestaque: video3,
      imagemThumbnail: thumb3,
      fotoCentralizada: true,
   },
   {
      titulo: "Blog de curiosidades fullstack com chat global",
      url: "https://nossoblog.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Redux, Firebase, Css"],
      tipo: "Website",
      repositorio: "https://github.com/renzi-fidele-frontend/Nossoblog",
      videoDestaque: video2,
      imagemThumbnail: thumb2,
      fotoCentralizada: true,
   },
   {
      titulo: "Custos: Gerenciador de projetos",
      url: "https://custos-five.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Firebase, Css"],
      tipo: "Website",
      repositorio: "https://github.com/renzi-fidele-frontend/custos",
      videoDestaque: video4,
      imagemThumbnail: thumb4,
      fotoCentralizada: true,
   },
   {
      titulo: "FilmesLib: Biblioteca de filmes",
      url: "https://films-lib.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Css"],
      tipo: "Website",
      repositorio: "https://github.com/renzi-fidele-frontend/Filmaki-react",
      videoDestaque: video5,
      imagemThumbnail: thumb5,
      fotoCentralizada: true,
   },
   {
      titulo: "Site institucional da AMC Contruções",
      url: "https://www.amc.eng.br/",
      plataforma: "Locaweb",
      linguagens: ["Html, Css, JavaScript"],
      tipo: "Site institucional",
      repositorio: "https://github.com/renzi-fidele-frontend/AMC-COnstucoes",
      imagemDestaque: demo6,
      imagemThumbnail: thumb6,
      fotoCentralizada: true,
   },
];
