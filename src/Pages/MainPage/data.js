//  Imagens dos prjetos
import video1 from "../../Videos/demoNossoBlog.webm";
import video2 from "../../Videos/demoCustos.webm";
import video3 from "../../Videos/FilmeLib.webm";
import demo4 from "../../Images/DemoDiabetes.jpg";
import demo5 from "../../Images/demoCarlessi.gif";
import demo6 from "../../Images/demoPanetones.gif";

// Fotos dos clientes que testemunharam
import avatar1 from "../../Images/avatar1.gif";
import avatar2 from "../../Images/avatar2.gif";
import avatar3 from "../../Images/avatar3.png";
import avatar4 from "../../Images/avatar4.gif";

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

export const servicos = [];

export const portfolio = [
   {
      titulo: "Nosso Blog: Blog de curiosidades",
      url: "https://nossoblog.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Firebase, Css"],
      tipo: "Website",
      pais: "Moçambique",
      imagemDestaque: video1,
      imagemThumbnail: "/src/Images/Miniblog.gif",
      fotoCentralizada: true,
   },
   {
      titulo: "Custos: Gerenciador de projetos",
      url: "https://custos-five.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Firebase, Css"],
      tipo: "Website",
      pais: "Moçambique",
      imagemDestaque: video2,
      imagemThumbnail: "/src/Images/custos.gif",
      fotoCentralizada: true,
   },
   {
      titulo: "FilmesLib: Biblioteca de filmes",
      url: "https://films-lib.vercel.app/",
      plataforma: "Vercel",
      linguagens: ["ReactJs, Css"],
      tipo: "Website",
      pais: "Moçambique",
      imagemDestaque: video3,
      imagemThumbnail: "/src/Images/FilmeLib.gif",
      fotoCentralizada: false,
   },
   {
      titulo: "LP para Ebook digital - O método correto",
      url: "https://ometodocorreto.com/diabetes",
      plataforma: "Wordpress",
      linguagens: ["WP, Elementor, JavaScript"],
      tipo: "Landing Page",
      pais: "Brasil",
      imagemDestaque: demo4,
      imagemThumbnail: "/src/Images/diabetes.gif",
      fotoCentralizada: false,
   },
   {
      titulo: "LP para construtora Unity Carlessi",
      url: "https://unitycarlessi.com.br/",
      plataforma: "Wordpress",
      linguagens: ["WP, Elementor, JavaScript"],
      tipo: "Landing Page",
      pais: "Brasil",
      imagemDestaque: demo5,
      imagemThumbnail: "/src/Images/unity.gif",
      fotoCentralizada: false,
   },
   {
      titulo: "Lp para Ebook digital - Panetones artesanais",
      url: "https://anovafase.com/panetones-artesanais/",
      plataforma: "Wordpress",
      linguagens: ["WP, Elementor, JavaScript"],
      tipo: "Landing Page",
      pais: "Brasil",
      imagemDestaque: demo6,
      imagemThumbnail: "/src/Images/projetopanetones.gif",
      fotoCentralizada: false,
   },
];
