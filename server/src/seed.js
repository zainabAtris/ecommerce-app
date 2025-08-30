import dotenv from 'dotenv';
import { connectDB } from './db.js';
import Product from './models/Product.js';

dotenv.config();

const run = async () => {
  await connectDB();

  try {
    await Product.deleteMany({});
    await Product.insertMany([
      // CPUs
      {
        title: 'Intel Core i9-13900K',
        description: 'High-performance 13th Gen Intel Core i9 CPU',
        price: 599.99,
        image: 'https://cdn.custompc.com/wp-content/sites/custompc/2023/02/intel-core-i9-13900K-review-01.jpg',
        category: 'CPU',
        stock: 50
      },
      {
        title: 'AMD Ryzen 9 7950X',
        description: '16-core Ryzen processor for extreme multitasking',
        price: 549.99,
        image: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:750,cw:1125,ch:1125,q:80,w:1125/gnxvSGFiY46DmPyxNxo4R.jpg',
        category: 'CPU',
        stock: 40
      },

      // GPUs
      {
        title: 'NVIDIA GeForce RTX 4090',
        description: 'Latest NVIDIA RTX GPU with ray tracing support',
        price: 1599.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER0DYXQTXcJgOWaM2IYeD5FWzSMp_ZA_xBQ&s',
        category: 'GPU',
        stock: 20
      },
      {
        title: 'AMD Radeon RX 7900 XT',
        description: 'Next-gen Radeon GPU with excellent 4K performance',
        price: 899.99,
        image: 'https://m.media-amazon.com/images/I/51SkVQUYHrL._AC_SL1027_.jpg',
        category: 'GPU',
        stock: 30
      },

      // RAM
      {
        title: 'Corsair Vengeance DDR5 32GB',
        description: 'High-speed DDR5 gaming memory kit',
        price: 179.99,
        image: 'https://images-cdn.ubuy.co.id/64922de997629814147af128-corsair-vengeance-rgb-ddr5-ram-32gb.jpg',
        category: 'RAM',
        stock: 100
      },
      {
        title: 'G.Skill Trident Z RGB 16GB',
        description: 'RGB DDR4 gaming RAM with low latency',
        price: 89.99,
        image: 'https://www.gskill.com/_upload/images/153665426811.png',
        category: 'RAM',
        stock: 120
      },
      

      // Motherboards
      {
        title: 'ASUS ROG Strix Z790-E',
        description: 'Gaming motherboard with WiFi 6E and DDR5 support',
        price: 349.99,
        image: 'https://dlcdnwebimgs.asus.com/files/media/49528E3D-ACDC-4EC1-9EC3-2144FEE68517/v1/img/kv/ROG-Strix-Z790-F-Gaming.png',
        category: 'Motherboard',
        stock: 60
      },
      {
        title: 'MSI B550 Tomahawk',
        description: 'Reliable AMD motherboard with PCIe 4.0 support',
        price: 169.99,
        image: 'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM5N2EzYzVlZjQxNWM0MWE0NDg2ZTVhLW1zaS1tYWctYjU1MC10b21haGF3ay1tYXgtd2lmaS1nYW1pbmcuanBn.jpg',
        category: 'Motherboard',
        stock: 80
      },

      // Storage
      {
        title: 'Samsung 980 Pro 1TB NVMe SSD',
        description: 'Ultra-fast PCIe 4.0 SSD for gaming and workstations',
        price: 129.99,
        image: 'https://m.media-amazon.com/images/I/713h+shZfQL._AC_SL1500_.jpg',
        category: 'Storage',
        stock: 150
      },
      {
        title: 'Seagate Barracuda 4TB HDD',
        description: 'High-capacity 7200RPM hard drive',
        price: 89.99,
        image: 'https://m.media-amazon.com/images/I/61HTOLqpL4L.jpg',
        category: 'Storage',
        stock: 200
      },

      // Power Supplies
      {
        title: 'EVGA SuperNOVA 850W Gold',
        description: 'Fully modular 80+ Gold PSU',
        price: 129.99,
        image: 'https://images.evga.com/products/gallery/png/220-GA-0850-X1_XL_1.png',
        category: 'PSU',
        stock: 75
      },
      {
        title: 'Corsair RM750x',
        description: '750W modular PSU with high efficiency',
        price: 109.99,
        image: 'https://techtitanlb.com/wp-content/uploads/2025/04/1-29.jpg',
        category: 'PSU',
        stock: 90
      },

      // Cases
      {
        title: 'NZXT H510',
        description: 'Minimalist mid-tower case with tempered glass',
        price: 89.99,
        image: 'https://nzxt.com/cdn/shop/files/h5-elite-hero-black.png?v=1744789660&width=2000',
        category: 'Case',
        stock: 110
      },
      {
        title: 'Lian Li PC-O11 Dynamic',
        description: 'Premium case with great airflow',
        price: 149.99,
        image: 'https://lian-li.com/wp-content/uploads/2020/11/O11D-black-side.jpg',
        category: 'Case',
        stock: 95
      },
          
      // --- Cooling ---
      { title: "Cooler Master Hyper 212", 
        description: "Air CPU Cooler", 
        price: 35, 
        image: "https://images-na.ssl-images-amazon.com/images/I/41RwJQGEKJL.jpg",
        category: "Cooling",
         stock: 80 
      },
      { title: "Noctua NH-D15",
        description: "Dual Tower CPU Cooler", 
        price: 100, 
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/h/nh_d15_chromax_black_1_4.jpg", 
        category: "Cooling", 
        stock: 40 
      },
      { title: "Corsair iCUE H100i", 
        description: "240mm Liquid Cooler", 
        price: 130, 
        image: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Liquid-Cooling/base-rgb-elite-coolers-config/Gallery/H100i_RGB_ELITE_01.webp", 
        category: "Cooling", 
        stock: 35 
      },
      // --- Networking ---
      { title: "TP-Link Archer AX50", 
        description: "Wi-Fi 6 Router", 
        price: 140, 
        image: "https://i.ytimg.com/vi/eKQbuInWuCc/maxresdefault.jpg", 
        category: "Networking", 
        stock: 35 
      },
      { title: "Netgear Nighthawk AX12", 
        description: "High Performance Wi-Fi 6 Router", 
        price: 300, 
        image: "https://www.netgear.com/cid/fit/1024x633/to/jpg/https/www.netgear.com/media/B1_rax120_32_tcm148-139328.png", 
        category: "Networking", 
        stock: 20 
      },
      { title: "ASUS PCE-AX3000", 
        description: "PCIe Wi-Fi 6 Card", 
        price: 50, 
        image: "https://www.cclonline.com/images/avante/PCE-AX3000-photo-top2.jpg?width=1600&height=1600&scale=canvas&trim.threshold=80", 
        category: "Networking", 
        stock: 60 
      },
    // --- Peripherals ---
      { title: "Logitech G502 Hero", 
        description: "Gaming Mouse", 
        price: 50, 
        image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._UF1000,1000_QL80_.jpg", 
        category: "Peripheral", 
        stock: 100 
      },
      { title: "Razer DeathAdder V2", 
        description: "Gaming Mouse", 
        price: 60, 
        image: "https://m.media-amazon.com/images/I/61C3xYVKtZL._AC_SL1500_.jpg", 
        category: "Peripheral", 
        stock: 80 
      },
      { title: "SteelSeries Apex Pro", 
        description: "Mechanical Keyboard", 
        price: 180, 
        image: "https://images.ctfassets.net/hmm5mo4qf4mf/5T6OTTzl1B5zaX1nILPFw4/186d8f786745424cdd8770cda23623af/apex_pro_tkl_wl_img_buy_01.png?fm=webp&q=90&fit=scale&w=1920", 
        category: "Peripheral", 
        stock: 50 
      },
      { title: "Corsair K70 RGB", 
        description: "Mechanical Keyboard", 
        price: 150, 
        image: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Keyboards/CH-9109012-NA/Gallery/K70_RGB_MK2_06.webp", 
        category: "Peripheral", 
        stock: 60 
      },
      { title: "Logitech G733", 
        description: "Wireless Gaming Headset", 
        price: 130, 
        image: "https://magnetshoplb.com/cdn/shop/files/G733_Gaming_Headset_-_Blue_981-000943_LOGITECH_Magnet_Shop_1_b6ded359-dd05-45f5-ba73-8ed180fda8dc.jpg?v=1703763762", 
        category: "Peripheral", 
        stock: 40 
      },

    ]);

    console.log('✓ Seeded products with matching images');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    process.exit(0);
  }
};

run();
