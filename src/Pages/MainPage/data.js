//  Imagens
import video1 from "../../Videos/demoNossoBlog.webm";
import video2 from "../../Videos/demoCustos.webm";
import video3 from "../../Videos/FilmeLib.webm";
import demo4 from "../../Images/DemoDiabetes.jpg";
import demo5 from "../../Images/demoCarlessi.gif";
import demo6 from "../../Images/demoPanetones.gif";

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
