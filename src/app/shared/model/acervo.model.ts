import { Biblioteca } from "./biblioteca.model";
import { Resource } from "./helpers/resource.model";

export class Acervo extends Resource {
  livros!: boolean;
  mapas!: boolean;
  filmes!: boolean;
  fotografias!: boolean;
  discos!: boolean;
  periodicos!: boolean;
  fitasK7!: boolean;
  fitasVideo!: boolean;
  acervoOutros!: string;
  //@Enumerated(EnumType.ORDINAL)
  //@Column(name = "intervalo_livro_id")
  //private IntervaloLivro intervaloLivro;
  etrLivrosTombados!: boolean;
  etrFolhasSoltas!: boolean;
  etrCadernos!: boolean;
  etrFichasSoltas!: boolean;
  etrNaoRegistrados!: boolean;
  etrOutros!: string;

  etiAutor!: boolean;
  etiTitulo!: boolean;
  etiAssunto!: boolean;
  etiOutros!: string;

  etcSimplificada!: boolean;
  etcDewey!: boolean;
  etcUniversal!: boolean;
  etcOutros!: string;

  etcatSimplificada!: boolean;
  etcatAbnt!: boolean;
  etcatOutros!: string;

  aquisicaoPorCompra!: boolean;
  aquisicaoPorDoacao!: boolean;
  aquisicaoPorPermuta!: boolean;

  maioriaRegistrado!: boolean;
  maioriaIdentificado!: boolean;
  maioriaClassificado!: boolean;
  maioriaCatalogado!: boolean;

  acervoAtendeLeitor!: boolean;
  acervoOutrasNecessidades!: string;
  //@Enumerated(EnumType.ORDINAL)
  //@Column(name = "periodico_id")
  //private Periodico periodico;
  periodicoMaioriaRegistrado!: boolean;
  periodicoOutrasNecessidades!: string;

  etregFichasKardex!: boolean;
  etregCadernos!: boolean;
  etregNaoRegistrado!: boolean;
  etregOutros!: string;

  biblioteca!: Biblioteca;
}
