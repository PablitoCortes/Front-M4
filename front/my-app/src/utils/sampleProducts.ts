import { Product } from "@/interfaces/Product";
import { getProducts } from "@/services/productService";

export const sampleProducts: Product[] = [
  {
    id: 7,
    name: "AMD Ryzen 7 5800X",
    description: "Procesador de alto rendimiento para gaming.",
    price: 380,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_621554-MLU78161328949_082024-O.webp",
    categoryId: 6,
  },
  {
    id: 8,
    name: "NVIDIA GeForce RTX 4070",
    description: "Tarjeta gráfica de última generación.",
    price: 650,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_654789-CBT80757917924_112024-O.webp",
    categoryId: 7,
  },
  {
    id: 9,
    name: "ASUS ROG Strix B550-F",
    description: "Placa madre gaming con chipset B550.",
    price: 200,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_990123-MLU54982778018_042023-O.webp",
    categoryId: 8,
  },
  {
    id: 10,
    name: "Corsair Vengeance RGB 16GB",
    description: "Memoria RAM DDR4 de alto rendimiento.",
    price: 90,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_910422-MLU75320923175_032024-O.webp",
    categoryId: 9,
  },

  {
    id: 11,
    name: "Samsung 980 Pro 1TB",
    description: "Unidad SSD NVMe de alta velocidad.",
    price: 120,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_838856-MLA54432947826_032023-O.webp",
    categoryId: 10,
  },
  {
    id: 12,
    name: "Cooler Master Hyper 212",
    description: "Enfriamiento por aire eficiente para CPU.",
    price: 45,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_742095-MLA80396227784_112024-O.webp",
    categoryId: 11,
  },
  {
    id: 13,
    name: "Chasis NZXT H510",
    description: "Gabinete compacto con diseño moderno.",
    price: 80,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623704-MCO76209268551_052024-O.webp",
    categoryId: 12,
  },
  {
    id: 14,
    name: "EVGA 750W Gold",
    description: "Fuente de poder con certificación 80+ Gold.",
    price: 100,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_872375-CBT82973367922_032025-O.webp",
    categoryId: 13,
  },
  {
    id: 15,
    name: "MSI Optix MAG274QRF",
    description: "Monitor gaming 27'' con 165Hz.",
    price: 300,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_695535-MLM74161153049_012024-O.webp",
    categoryId: 4,
  },
  {
    id: 16,
    name: "Logitech G Pro X",
    description: "Auriculares con calidad profesional para gamers.",
    price: 120,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_961112-MLU73175218775_112023-O.webp",
    categoryId: 3,
  },
  {
    id: 17,
    name: "Intel Core i7-13700K",
    description: "Procesador de alto rendimiento para gaming.",
    price: 420,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_810475-MLU74274112545_012024-O.webp",
    categoryId: 6,
  },
  {
    id: 18,
    name: "Gigabyte GeForce RTX 4060 Ti",
    description: "Tarjeta gráfica potente para juegos modernos.",
    price: 500,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_685537-CBT76811479994_062024-O.webp",
    categoryId: 7,
  },
  {
    id: 19,
    name: "MSI MAG B660 Tomahawk",
    description: "Placa madre con soporte para procesadores Intel.",
    price: 170,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_856626-CBT74551410301_022024-F.webp",
    categoryId: 8,
  },
  {
    id: 20,
    name: "G.Skill Trident Z RGB 32GB",
    description: "Kit de memoria RAM DDR4 de alto rendimiento.",
    price: 150,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_976081-MLA52219412266_102022-O.webp",
    categoryId: 9,
  },
  {
    id: 21,
    name: "WD Black SN850X 1TB",
    description: "SSD NVMe con velocidad extrema para juegos.",
    price: 140,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_799783-CBT72001729185_092023-O.webp",
    categoryId: 10,
  },
  {
    id: 22,
    name: "be quiet! Pure Rock 2",
    description: "Disipador silencioso para CPU.",
    price: 50,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_972512-CBT83038501547_032025-O.webp",
    categoryId: 11,
  },
  {
    id: 23,
    name: "Lian Li Lancool II Mesh",
    description: "Gabinete con excelente flujo de aire.",
    price: 95,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_730470-MLU78262841997_082024-O.webp",
    categoryId: 12,
  },
  {
    id: 24,
    name: "Corsair RM850e",
    description: "Fuente de poder modular con certificación Gold.",
    price: 130,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_763078-MCO79586442048_102024-O.webp",
    categoryId: 13,
  },
  {
    id: 25,
    name: "ASUS TUF Gaming VG27AQ",
    description: "Monitor 2K con 165Hz y G-Sync.",
    price: 330,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_772557-MLA81490235413_122024-O.webp",
    categoryId: 4,
  },
  {
    id: 26,
    name: "Razer BlackShark V2",
    description: "Auriculares gaming con sonido envolvente.",
    price: 100,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_665158-MLA74617812934_022024-O.webp",
    categoryId: 3,
  },
  {
    id: 27,
    name: "AMD Ryzen 7 7800X3D",
    description: "Procesador optimizado para gaming competitivo.",
    price: 450,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_810475-MLU74274112545_012024-F.webp",
    categoryId: 6,
  },
  {
    id: 28,
    name: "ASRock B650 Steel Legend",
    description: "Placa madre AM5 compatible con Ryzen de nueva generación.",
    price: 200,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_856626-CBT74551410301_022024-F.webp",
    categoryId: 8,
  },
  {
    id: 29,
    name: "Crucial P5 Plus 2TB",
    description: "SSD NVMe Gen4 ideal para carga rápida de juegos.",
    price: 180,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_763640-CBT78329747838_082024-O.webp",
    categoryId: 10,
  },
  {
    id: 30,
    name: "NZXT Kraken X63",
    description: "Sistema de refrigeración líquida para CPU.",
    price: 160,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_980114-CBT80074633813_102024-O.webp",
    categoryId: 11,
  },
  {
    id: 31,
    name: "Lenovo Legion 5",
    description: "Laptop potente para juegos.",
    price: 1500,
    stock: 0,
    image:
      "https://p3-ofp.static.pub//fes/cms/2024/09/12/m1jnssoporjtlmma8zqy3ssoour2yj992790.png",
    categoryId: 1,
  },
  {
    id: 32,
    name: "Samsung S25 ultra",
    description: "Teléfono inteligente de gama alta.",
    price: 1200,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_736571-MLA82889346063_032025-O.webp",
    categoryId: 2,
  },
  {
    id: 33,
    name: "Diadema Astro A50",
    description: "Auriculares con cancelación de ruido.",
    price: 200,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_723599-MLU77409436492_072024-O.webp",
    categoryId: 3,
  },
  {
    id: 34,
    name: "Monitor Samsung 4K",
    description: "Pantalla con resolución ultra HD.",
    price: 800,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_751186-MLA83761277453_042025-O.webp",
    categoryId: 4,
  },
  {
    id: 35,
    name: "Teclado Kumara K552",
    description: "Teclado RGB para gaming.",
    price: 100,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_636746-MLA52350707355_112022-O.webp",
    categoryId: 5,
  },
  {
    id: 36,
    name: "Logitech G502",
    description: "Mouse con sensor preciso.",
    price: 80,
    stock: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623664-MLU72761412922_112023-O.webp",
    categoryId: 5,
  },
];

export const completeProducts = async () => {
  const products = await getProducts();
  return [...products, ...sampleProducts];
};
