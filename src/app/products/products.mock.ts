export const productList: Product[] = [
    
  {
    id: 1,
    name: 'Lavandina',
    price: 10,
    description: 'Botella de 1 Litro',
    img: 'https://http2.mlstatic.com/D_NQ_NP_936782-MLU72630261823_112023-O.webp',
  },
  {
    id: 2,
    name: 'Perfumina',
    price: 15,
    description: 'Olor A Flores Sivestres',
    img: 'https://http2.mlstatic.com/D_NQ_NP_752494-MLA44858643282_022021-O.webp',
  },
  {
    id: 3,
    name: 'Detergente',
    price: 15,
    description: 'Dura 200 Lavados',
    img: 'https://perfumeriaburbujas.com.ar/wp-content/uploads/magistral-750.jpg',
  },
  {
    id: 4,
    name: 'Liquido de Lampazo',
    price: 10,
    description: 'Tus pisos mas brillantes que nunca',
    img: 'https://http2.mlstatic.com/D_NQ_NP_814391-MLA74111717762_012024-O.webp',
  },
  {
    id: 5,
    name: 'Jabón de Tocador',
    price: 5,
    description: 'Jabón con 1/4 de crema humectante',
    img: 'https://www.conradomarket.com.ar/thumb/000000006760060695011PERFUMERIA-----Jabon-LUX---Lirio-Azul-x-125_800x800.jpg',
  },
  {
    id: 6,
    name: 'Jabón Liquido',
    price: 25,
    description: 'Limpieza profunda',
    img: 'https://modomarketar.vteximg.com.br/arquivos/ids/162628/Jabon-Liquido-Skip-P-diluir-X-500-Ml-Envase-X-3l-1-6858.jpg?v=637890141814800000',
  },
  {
    id: 7,
    name: 'Jabón para Manos',
    price: 10,
    description: 'Tus manos quedarán más limpias y perfumadas',
    img: 'https://acdn.mitiendanube.com/stores/001/130/470/products/algabo-jabon-liquido-x300-antibacterial-77912740008741-4946e2f9b4480b286b16582594469911-640-0.png',
  },
  {
    id: 8,
    name: 'Dentifrico',
    price: 7,
    
    img: 'https://recursos-sancor-we.s3.amazonaws.com/Tienda%20SanCor%20Salud/Farmavitus/Store/Productos/Cuidado%20Oral/1639140114_NzUwMDQzNTE3Njk4OS0x.webp',
  },
  {
    id: 9,
    name: 'Jabón en Polvo',
    price: 15,
    description: 'Fragancia Campos silvestres',
    img: 'https://clubdebeneficios.com/media/catalog/product/7/7/7791290790629.jpeg?width=480&height=480&canvas=480,480&quality=80&fit=bounds',
  },
];

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
  img: string;
}
