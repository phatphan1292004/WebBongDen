export const cateData = [
  {
    id: "DM01",
    name: "Đèn chùm",
  },
  {
    id: "DM02",
    name: "Đèn thả",
  },
  {
    id: "DM03",
    name: "Đèn bàn",
  },
  {
    id: "DM04",
    name: "Đèn ốp trần",
  },
  {
    id: "DM05",
    name: "Đèn quạt",
  },
  {
    id: "DM06",
    name: "Đèn khác",
  },
];

export const subcateData = [
  // Chi tiết danh mục đèn chùm
  {
    id: "CTDM01",
    name: "Đèn chùm hiện đại",
    idCate: "DM01",
  },
  {
    id: "CTDM02",
    name: "Đèn chùm cổ điển",
    idCate: "DM01",
  },
  {
    id: "CTDM03",
    name: "Đèn chùm pha lê",
    idCate: "DM01",
  },
  {
    id: "CTDM04",
    name: "Đèn chùm nến",
    idCate: "DM01",
  },
  {
    id: "CTDM05",
    name: "Đèn chùm thông tầng",
    idCate: "DM01",
  },
  {
    id: "CTDM05",
    name: "Đèn chùm đồng",
    idCate: "DM01",
  },

  // Chi tiết danh mục của đèn thả
  {
    id: "CTDM06",
    name: "Đèn thả nghệ thuật",
    idCate: "DM02",
  },

  {
    id: "CTDM07",
    name: "Đèn thả cổ điển",
    idCate: "DM02",
  },

  {
    id: "CTDM08",
    name: "Đèn thả hiện đại",
    idCate: "DM02",
  },

  {
    id: "CTDM09",
    name: "Đèn thả pha lê",
    idCate: "DM02",
  },

  {
    id: "CTDM010",
    name: "Đèn thả thông tầng",
    idCate: "DM02",
  },

  // Chi tiết danh mục đèn bàn
  {
    id: "CTDM11",
    name: "Đèn bàn phòng ngủ",
    idCate: "DM03",
  },

  {
    id: "CTDM12",
    name: "Đèn bàn phòng khách",
    idCate: "DM03",
  },

  {
    id: "CTDM13",
    name: "Đèn bàn cổ điển",
    idCate: "DM03",
  },

  {
    id: "CTDM14",
    name: "Đèn bàn hiện đại",
    idCate: "DM03",
  },

  // Chi tiết danh mục đèn ốp trần
  {
    id: "CTDM15",
    name: "Đèn ốp trần cổ điển",
    idCate: "DM04",
  },

  {
    id: "CTDM16",
    name: "Đèn ốp trần hiện đại",
    idCate: "DM04",
  },

  {
    id: "CTDM17",
    name: "Đèn ốp trần gỗ",
    idCate: "DM04",
  },

  {
    id: "CTDM18",
    name: "Đèn ốp trần trung hoa",
    idCate: "DM04",
  },

  // Chi tiết danh mục đèn quạt trần
  {
    id: "CTDM19",
    name: "Đèn quạt giấu cánh",
    idCate: "DM05", // Cập nhật idCate thành "DM05"
  },
  {
    id: "CTDM20",
    name: "Đèn quạt sải cánh",
    idCate: "DM05", // Cập nhật idCate thành "DM05"
  },

  {
    id: "CTDM21",
    name: "Đèn quạt cổ điển",
    idCate: "DM05", // Cập nhật idCate thành "DM05"
  },

  {
    id: "CTDM21",
    name: "Đèn quạt hiện đại",
    idCate: "DM05", // Cập nhật idCate thành "DM05"
  },

  // Đèn khác
  {
    id: "CTDM22",
    name: "Đèn ngoài trời",
    idCate: "DM06",
  },

  {
    id: "CTDM23",
    name: "Đèn tranh",
    idCate: "DM06",
  },

  {
    id: "CTDM24",
    name: "Đèn âm trần",
    idCate: "DM06",
  },
];

export const productData = [
  {
    id: "001",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03814",
    urlImage:
      "./img/dc1.jpg",
    price: "3000000",
    discountPercent: "0.1",
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "12-9-2023",
  },
  {
    id: "002",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03815",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/8991den-chum-trang-tri-noi-that-phong-cach-my-dc03813-01.jpg",
    price: "4500000",
    discountPercent: "0.15",
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "15-10-2023",
  },
  {
    id: "003",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03816",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/5647den-chum-trang-tri-noi-that-phong-cach-my-dc03812-01.jpg",
    price: "2200000",
    discountPercent: "0.05",
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "20-10-2023",
  },
  {
    id: "004",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03817",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/837den-chum-trang-tri-noi-that-phong-cach-my-dc03811-07.jpg",
    price: "3500000",
    discountPercent: "0.2",
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "22-10-2023",
  },
  {
    id: "005",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03818",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/3414den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01558-01.jpg",
    price: "1500000",
    discountPercent: "0.05",
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "25-10-2023",
  },
  {
    id: "006",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/8155den-quat-trang-tri-noi-that-phong-cach-hien-dai-dq00907-01.jpg",
    price: "2000000", // Đã thay đổi giá
    discountPercent: "0.15", // Đã thay đổi phần trăm giảm
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "30-10-2023",
  },

  {
    id: "007",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03219",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/7022den-chum-trang-tri-noi-that-phong-cach-my-dc03809-06.jpg",
    price: "2200000", // Đã thay đổi giá
    discountPercent: "0.2", // Đã thay đổi phần trăm giảm
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "30-10-2023",
  },

  {
    id: "008",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/1984den-chum-trang-tri-noi-that-phong-cach-my-dc03808-04.jpg",
    price: "2100000", // Đã thay đổi giá
    discountPercent: "0.12", // Đã thay đổi phần trăm giảm
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "30-10-2023",
  },

  {
    id: "009",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/2051den-chum-trang-tri-noi-that-phong-cach-my-hien-dai-dc03782-02.jpg",
    price: "2500000", // Đã thay đổi giá
    discountPercent: "0.18", // Đã thay đổi phần trăm giảm
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "30-10-2023",
  },

  {
    id: "010",
    name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/3433den-chum-trang-tri-noi-that-phong-cach-my-dc03780-01.jpg",
    price: "2300000", // Đã thay đổi giá
    discountPercent: "0.2", // Đã thay đổi phần trăm giảm
    idCate: "DM01",
    nameCate: "Đèn chùm",
    dateCreate: "30-10-2023",
  },
  {
    id: "011",
    name: "Đèn thả trang trí phòng khách phong cách hiện đại DC04501",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/9006den-tha-trang-tri-noi-that-phong-cach-my-dt02994-02.jpg",
    price: "2500000", // Giá linh hoạt
    discountPercent: "0.1", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "012",
    name: "Đèn thả trang trí phòng ăn phong cách cổ điển DC04502",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/9723den-tha-trang-tri-noi-that-phong-cach-my-dt02992-04.jpg",
    price: "2800000", // Giá linh hoạt
    discountPercent: "0.15", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "013",
    name: "Đèn thả trang trí phòng ngủ phong cách Scandinavian DC04503",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/8002den-tha-trang-tri-noi-that-phong-cach-my-dt02991-03.jpg",
    price: "2300000", // Giá linh hoạt
    discountPercent: "0.12", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "014",
    name: "Đèn thả phong cách hiện đại DC04504",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/4118den-tha-trang-tri-noi-that-phong-cach-my-dt02990-03.jpg",
    price: "3000000", // Giá linh hoạt
    discountPercent: "0.18", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "015",
    name: "Đèn thả trang trí nhà bếp phong cách tối giản DC04505",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/9507den-tha-den-san-trang-tri-noi-that-phong-cach-my-dt02993-06.jpg",
    price: "2200000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "016",
    name: "Đèn thả phong cách đương đại DC04506",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/1990den-tha-trang-tri-noi-that-phong-cach-tan-co-dien-dt02961-05.jpg",
    price: "2700000", // Giá linh hoạt
    discountPercent: "0.1", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "017",
    name: "Đèn thả trang trí phòng khách phong cách hiện đại DC04507",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/3100den-tha-trang-tri-noi-that-phong-cach-chau-au-sang-trong-dt02962-01.jpg",
    price: "2600000", // Giá linh hoạt
    discountPercent: "0.14", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "018",
    name: "Đèn thả trang trí phòng ngủ phong cách cổ điển DC04508",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/6391den-tha-thiet-ke-trang-tri-noi-that-phong-cach-hien-dai-dt02958-01.jpg",
    price: "2900000", // Giá linh hoạt
    discountPercent: "0.25", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "019",
    name: "Đèn thả phòng bếp phong cách cổ điển DC04509",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/1534den-tha-pha-le-trang-tri-noi-that-phong-cach-hien-dai-dt02959-01.jpg",
    price: "2400000", // Giá linh hoạt
    discountPercent: "0.22", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "020",
    name: "Đèn thả trang trí phòng khách sang trọng DC04510",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/2834den-tha-dia-bay-trang-tri-noi-that-phong-cach-hien-dai-dt02957-03.jpg",
    price: "3500000", // Giá linh hoạt
    discountPercent: "0.3", // Phần trăm giảm linh hoạt
    idCate: "DM02",
    nameCate: "Đèn thả",
    dateCreate: "30-10-2023",
  },
  {
    id: "021",
    name: "Đèn bàn trang trí phòng làm việc phong cách hiện đại DB04511",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/5258den-ban-trang-tri-noi-that-phong-cach-my-db02101-03.jpg",
    price: "1200000", // Giá linh hoạt
    discountPercent: "0.15", // Phần trăm giảm linh hoạt
    idCate: "DM03",
    nameCate: "Đèn bàn",
    dateCreate: "30-10-2023",
  },
  {
    id: "022",
    name: "Đèn bàn trang trí phòng ngủ phong cách cổ điển DB04512",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/5107den-ban-trang-tri-noi-that-phong-cach-my-db02102-01.jpg",
    price: "1600000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM03",
    nameCate: "Đèn bàn",
    dateCreate: "30-10-2023",
  },
  {
    id: "023",
    name: "Đèn bàn trang trí phòng khách phong cách Scandinavian DB04513",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/4992den-ban-trang-tri-noi-that-phong-cach-my-db02099-04.jpg",
    price: "1400000", // Giá linh hoạt
    discountPercent: "0.1", // Phần trăm giảm linh hoạt
    idCate: "DM03",
    nameCate: "Đèn bàn",
    dateCreate: "30-10-2023",
  },
  {
    id: "024",
    name: "Đèn bàn trang trí nội thất phong cách đương đại DB04514",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/842den-ban-doc-sach-trang-tri-noi-that-phong-cach-my-retro-db01999-03.jpg",
    price: "1800000", // Giá linh hoạt
    discountPercent: "0.18", // Phần trăm giảm linh hoạt
    idCate: "DM03",
    nameCate: "Đèn bàn",
    dateCreate: "30-10-2023",
  },
  {
    id: "025",
    name: "Đèn bàn trang trí văn phòng phong cách tối giản DB04515",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/8088den-ban-trang-tri-phong-be-gai-phong-cach-tan-co-dien-db02001-03.jpg",
    price: "2000000", // Giá linh hoạt
    discountPercent: "0.25", // Phần trăm giảm linh hoạt
    idCate: "DM03",
    nameCate: "Đèn bàn",
    dateCreate: "30-10-2023",
  },
  {
    id: "026",
    name: "Đèn ốp trần phòng khách phong cách hiện đại OT04516",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/138den-op-tran-trang-tri-noi-that-phong-cach-nhat-do01559-05.jpg",
    price: "2500000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM04",
    nameCate: "Đèn ốp trần",
    dateCreate: "30-10-2023",
  },
  {
    id: "027",
    name: "Đèn ốp trần phòng ngủ phong cách sang trọng OT04517",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/3414den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01558-01.jpg",
    price: "3000000", // Giá linh hoạt
    discountPercent: "0.15", // Phần trăm giảm linh hoạt
    idCate: "DM04",
    nameCate: "Đèn ốp trần",
    dateCreate: "30-10-2023",
  },
  {
    id: "028",
    name: "Đèn ốp trần văn phòng phong cách tối giản OT04518",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/3510den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01552-02.jpg",
    price: "2200000", // Giá linh hoạt
    discountPercent: "0.25", // Phần trăm giảm linh hoạt
    idCate: "DM04",
    nameCate: "Đèn ốp trần",
    dateCreate: "30-10-2023",
  },
  {
    id: "029",
    name: "Đèn ốp trần phòng khách phong cách cổ điển OT04519",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/9139den-op-tran-trang-tri-dai-sanh-phong-cach-hien-dai-do01554-04.jpg",
    price: "2800000", // Giá linh hoạt
    discountPercent: "0.18", // Phần trăm giảm linh hoạt
    idCate: "DM04",
    nameCate: "Đèn ốp trần",
    dateCreate: "30-10-2023",
  },
  {
    id: "030",
    name: "Đèn ốp trần trang trí nội thất phong cách đương đại OT04520",
    urlImage:
      "https://denhoamy.vn/upload/attachment/thumb/8607den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01551-02.jpg",
    price: "3500000", // Giá linh hoạt
    discountPercent: "0.3", // Phần trăm giảm linh hoạt
    idCate: "DM04",
    nameCate: "Đèn ốp trần",
    dateCreate: "30-10-2023",
  },
  {
    id: "031",
    name: "Đèn quạt trần trang trí phòng khách phong cách hiện đại QV04521",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/4813den-quat-sai-canh-trang-tri-noi-that-phong-cach-hien-dai-dq00906-01.jpg",
    price: "4200000", // Giá linh hoạt
    discountPercent: "0.15", // Phần trăm giảm linh hoạt
    idCate: "DM05",
    nameCate: "Đèn quạt",
    dateCreate: "30-10-2023",
  },
  {
    id: "032",
    name: "Đèn quạt trần phòng ngủ sang trọng QV04522",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/1464den-quat-5-canh-la-co-trang-tri-noi-that-phong-cach-indochine-dq00909-02.jpg",
    price: "4500000", // Giá linh hoạt
    discountPercent: "0.18", // Phần trăm giảm linh hoạt
    idCate: "DM05",
    nameCate: "Đèn quạt",
    dateCreate: "30-10-2023",
  },
  {
    id: "033",
    name: "Đèn quạt trần phòng bếp QV04523",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/8155den-quat-trang-tri-noi-that-phong-cach-hien-dai-dq00907-01.jpg",
    price: "3800000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM05",
    nameCate: "Đèn quạt",
    dateCreate: "30-10-2023",
  },
  {
    id: "034",
    name: "Đèn quạt trần phòng khách phong cách vintage QV04524",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/8728den-quat-giau-canh-trang-tri-phong-cach-hien-dai-dq00904-01.jpg",
    price: "4000000", // Giá linh hoạt
    discountPercent: "0.12", // Phần trăm giảm linh hoạt
    idCate: "DM05",
    nameCate: "Đèn quạt",
    dateCreate: "30-10-2023",
  },
  {
    id: "035",
    name: "Đèn quạt trần hiện đại cho không gian mở QV04525",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/7674den-quat-giau-canh-trang-tri-noi-that-phong-cach-hien-dai-dq00902-01.jpg",
    price: "5000000", // Giá linh hoạt
    discountPercent: "0.25", // Phần trăm giảm linh hoạt
    idCate: "DM05",
    nameCate: "Đèn quạt",
    dateCreate: "30-10-2023",
  },

  {
    id: "036",
    name: "Đèn LED trang trí phòng ngủ phong cách đơn giản DK04526",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/3461den-cot-trang-tri-cong-vien-via-he-phong-cach-trung-hoa-dn00733-04.jpg",
    price: "1200000", // Giá linh hoạt
    discountPercent: "0.1", // Phần trăm giảm linh hoạt
    idCate: "DM06",
    nameCate: "Đèn khác",
    dateCreate: "30-10-2023",
  },
  {
    id: "037",
    name: "Đèn LED chiếu sáng nội thất sang trọng DK04527",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/4798den-cam-co-nang-luong-mat-troi-dn00731-01.jpg",
    price: "1500000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM06",
    nameCate: "Đèn khác",
    dateCreate: "30-10-2023",
  },
  {
    id: "038",
    name: "Đèn bàn LED phong cách cổ điển DK04528",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/1174den-ngoai-troi-soi-thuy-tinh-trang-tri-san-vuon-bai-co-phong-cach-trung-hoa-dn00718-03.jpg",
    price: "900000", // Giá linh hoạt
    discountPercent: "0.15", // Phần trăm giảm linh hoạt
    idCate: "DM06",
    nameCate: "Đèn khác",
    dateCreate: "30-10-2023",
  },
  {
    id: "039",
    name: "Đèn bàn trang trí phong cách nghệ thuật DK04529",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/7366den-tuong-ngoai-troi-chong-tham-nuoc-dn00719-06.jpg",
    price: "1800000", // Giá linh hoạt
    discountPercent: "0.12", // Phần trăm giảm linh hoạt
    idCate: "DM06",
    nameCate: "Đèn khác",
    dateCreate: "30-10-2023",
  },
  {
    id: "040",
    name: "Đèn ngủ LED phong cách hiện đại DK04530",
    urlImage: "https://denhoamy.vn/upload/attachment/thumb/7226den-led-am-tran-cob-sieu-sang-trang-tri-noi-that-phong-cach-hien-dai-da00088-04.jpg",
    price: "1300000", // Giá linh hoạt
    discountPercent: "0.2", // Phần trăm giảm linh hoạt
    idCate: "DM06",
    nameCate: "Đèn khác",
    dateCreate: "30-10-2023",
  },
];

export const customerData = [
  {
    id: "C001",
    name: "Nguyễn An",
    email: "nguyenan@example.com",
    phone: "0123456789",
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    registeredDate: "2023-10-15",
    orderHistory: [
      {
        orderId: "O001",
        productName: "Đèn chùm tiffany trang trí nội thất DC03596",
        price: 3000000,
        quantity: 2,
        date: "2023-10-16",
      },
      {
        orderId: "O002",
        productName: "Đèn thả trang trí nghệ thuật",
        price: 2200000,
        quantity: 1,
        date: "2023-10-20",
      },
    ],
  },
  {
    id: "C002",
    name: "Trần Bình",
    email: "tranbinh@example.com",
    phone: "0987654321",
    address: "456 Đường Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
    registeredDate: "2023-11-01",
    orderHistory: [
      {
        orderId: "O003",
        productName: "Đèn chùm hiện đại trang trí phòng khách",
        price: 4500000,
        quantity: 1,
        date: "2023-11-02",
      },
    ],
  },
  {
    id: "C003",
    name: "Lê Quân",
    email: "lequan@example.com",
    phone: "0981234567",
    address: "789 Đường Hoàng Sa, Quận 5, TP.HCM",
    registeredDate: "2023-09-12",
    orderHistory: [
      {
        orderId: "O004",
        productName: "Đèn bàn học LED",
        price: 1500000,
        quantity: 3,
        date: "2023-09-13",
      },
    ],
  },
  {
    id: "C004",
    name: "Vũ Mai",
    email: "vumai@example.com",
    phone: "0912345678",
    address: "321 Đường Võ Thị Sáu, Quận 4, TP.HCM",
    registeredDate: "2023-08-25",
    orderHistory: [
      {
        orderId: "O005",
        productName: "Đèn ốp trần LED",
        price: 2500000,
        quantity: 2,
        date: "2023-08-26",
      },
    ],
  },
  {
    id: "C005",
    name: "Phan Tuấn",
    email: "phantuann@example.com",
    phone: "0934567890",
    address: "555 Đường Nguyễn Du, Quận 1, TP.HCM",
    registeredDate: "2023-07-30",
    orderHistory: [
      {
        orderId: "O006",
        productName: "Đèn quạt trần",
        price: 1800000,
        quantity: 1,
        date: "2023-08-01",
      },
      {
        orderId: "O007",
        productName: "Đèn quạt điều khiển từ xa",
        price: 2000000,
        quantity: 1,
        date: "2023-08-02",
      },
    ],
  },
  {
    id: "C001",
    name: "Nguyễn An",
    email: "nguyenan@example.com",
    phone: "0123456789",
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    registeredDate: "2023-10-15",
    orderHistory: [
      {
        orderId: "O001",
        productName: "Đèn chùm tiffany trang trí nội thất DC03596",
        price: 3000000,
        quantity: 2,
        date: "2023-10-16",
      },
      {
        orderId: "O002",
        productName: "Đèn thả trang trí nghệ thuật",
        price: 2200000,
        quantity: 1,
        date: "2023-10-20",
      },
    ],
  },
  {
    id: "C002",
    name: "Trần Bình",
    email: "tranbinh@example.com",
    phone: "0987654321",
    address: "456 Đường Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
    registeredDate: "2023-11-01",
    orderHistory: [
      {
        orderId: "O003",
        productName: "Đèn chùm hiện đại trang trí phòng khách",
        price: 4500000,
        quantity: 1,
        date: "2023-11-02",
      },
    ],
  },
  {
    id: "C003",
    name: "Lê Quân",
    email: "lequan@example.com",
    phone: "0981234567",
    address: "789 Đường Hoàng Sa, Quận 5, TP.HCM",
    registeredDate: "2023-09-12",
    orderHistory: [
      {
        orderId: "O004",
        productName: "Đèn bàn học LED",
        price: 1500000,
        quantity: 3,
        date: "2023-09-13",
      },
    ],
  },
  {
    id: "C004",
    name: "Vũ Mai",
    email: "vumai@example.com",
    phone: "0912345678",
    address: "321 Đường Võ Thị Sáu, Quận 4, TP.HCM",
    registeredDate: "2023-08-25",
    orderHistory: [
      {
        orderId: "O005",
        productName: "Đèn ốp trần LED",
        price: 2500000,
        quantity: 2,
        date: "2023-08-26",
      },
    ],
  },
  {
    id: "C005",
    name: "Phan Tuấn",
    email: "phantuann@example.com",
    phone: "0934567890",
    address: "555 Đường Nguyễn Du, Quận 1, TP.HCM",
    registeredDate: "2023-07-30",
    orderHistory: [
      {
        orderId: "O006",
        productName: "Đèn quạt trần",
        price: 1800000,
        quantity: 1,
        date: "2023-08-01",
      },
      {
        orderId: "O007",
        productName: "Đèn quạt điều khiển từ xa",
        price: 2000000,
        quantity: 1,
        date: "2023-08-02",
      },
    ],
  },
  {
    id: "C001",
    name: "Nguyễn An",
    email: "nguyenan@example.com",
    phone: "0123456789",
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    registeredDate: "2023-10-15",
    orderHistory: [
      {
        orderId: "O001",
        productName: "Đèn chùm tiffany trang trí nội thất DC03596",
        price: 3000000,
        quantity: 2,
        date: "2023-10-16",
      },
      {
        orderId: "O002",
        productName: "Đèn thả trang trí nghệ thuật",
        price: 2200000,
        quantity: 1,
        date: "2023-10-20",
      },
    ],
  },
  {
    id: "C002",
    name: "Trần Bình",
    email: "tranbinh@example.com",
    phone: "0987654321",
    address: "456 Đường Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
    registeredDate: "2023-11-01",
    orderHistory: [
      {
        orderId: "O003",
        productName: "Đèn chùm hiện đại trang trí phòng khách",
        price: 4500000,
        quantity: 1,
        date: "2023-11-02",
      },
    ],
  },
  {
    id: "C003",
    name: "Lê Quân",
    email: "lequan@example.com",
    phone: "0981234567",
    address: "789 Đường Hoàng Sa, Quận 5, TP.HCM",
    registeredDate: "2023-09-12",
    orderHistory: [
      {
        orderId: "O004",
        productName: "Đèn bàn học LED",
        price: 1500000,
        quantity: 3,
        date: "2023-09-13",
      },
    ],
  },
  {
    id: "C004",
    name: "Vũ Mai",
    email: "vumai@example.com",
    phone: "0912345678",
    address: "321 Đường Võ Thị Sáu, Quận 4, TP.HCM",
    registeredDate: "2023-08-25",
    orderHistory: [
      {
        orderId: "O005",
        productName: "Đèn ốp trần LED",
        price: 2500000,
        quantity: 2,
        date: "2023-08-26",
      },
    ],
  },
  {
    id: "C005",
    name: "Phan Tuấn",
    email: "phantuann@example.com",
    phone: "0934567890",
    address: "555 Đường Nguyễn Du, Quận 1, TP.HCM",
    registeredDate: "2023-07-30",
    orderHistory: [
      {
        orderId: "O006",
        productName: "Đèn quạt trần",
        price: 1800000,
        quantity: 1,
        date: "2023-08-01",
      },
      {
        orderId: "O007",
        productName: "Đèn quạt điều khiển từ xa",
        price: 2000000,
        quantity: 1,
        date: "2023-08-02",
      },
    ],
  },
];

export const orderData = [
  {
    id: "001",
    customerName: "Phan Van Phát",
    orderDate: "20-1-2023",
    expectedDeliveryDate: "25-1-2023",
    address: "475 Man Thiện, Thủ Đức",
    status: "Đang giao hàng",
    paymentMethod: "Thanh toán khi nhận hàng",
    orderTime: "20-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "002",
    customerName: "Nguyễn Thị Mai",
    orderDate: "21-1-2023",
    expectedDeliveryDate: "26-1-2023",
    address: "123 Nguyễn Huệ, Quận 1",
    status: "Đã giao",
    paymentMethod: "Thanh toán qua thẻ tín dụng",
    orderTime: "21-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "003",
    customerName: "Lê Hoàng Nam",
    orderDate: "22-1-2023",
    expectedDeliveryDate: "27-1-2023",
    address: "68 Trần Hưng Đạo, Quận 5",
    status: "Đang giao hàng",
    paymentMethod: "Thanh toán qua ví điện tử",
    orderTime: "22-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "004",
    customerName: "Trần Quang Duy",
    orderDate: "23-1-2023",
    expectedDeliveryDate: "28-1-2023",
    address: "123 Nguyễn Thị Minh Khai, Quận 3",
    status: "Chờ xử lý",
    paymentMethod: "Thanh toán khi nhận hàng",
    orderTime: "23-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "005",
    customerName: "Phạm Minh Tuấn",
    orderDate: "24-1-2023",
    expectedDeliveryDate: "29-1-2023",
    address: "567 Lý Thái Tổ, Quận 10",
    status: "Đã giao",
    paymentMethod: "Thanh toán qua thẻ tín dụng",
    orderTime: "24-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "003",
    customerName: "Lê Hoàng Nam",
    orderDate: "22-1-2023",
    expectedDeliveryDate: "27-1-2023",
    address: "68 Trần Hưng Đạo, Quận 5",
    status: "Đang giao hàng",
    paymentMethod: "Thanh toán qua ví điện tử",
    orderTime: "22-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "004",
    customerName: "Trần Quang Duy",
    orderDate: "23-1-2023",
    expectedDeliveryDate: "28-1-2023",
    address: "123 Nguyễn Thị Minh Khai, Quận 3",
    status: "Chờ xử lý",
    paymentMethod: "Thanh toán khi nhận hàng",
    orderTime: "23-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
  {
    id: "005",
    customerName: "Phạm Minh Tuấn",
    orderDate: "24-1-2023",
    expectedDeliveryDate: "29-1-2023",
    address: "567 Lý Thái Tổ, Quận 10",
    status: "Đã giao",
    paymentMethod: "Thanh toán qua thẻ tín dụng",
    orderTime: "24-1-2023",
    invoice: '<button class="view-details">Xem chi tiết</button>',
  },
];

