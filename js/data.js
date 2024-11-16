export const cateData = [
    {
        id: "DM01",  
        name: "Đèn chùm"
    },
    {
        id: "DM02", 
        name: "Đèn thả"
    },
    {
        id: "DM03",  
        name: "Đèn bàn"
    },
    {
        id: "DM04",  
        name: "Đèn ốp trần"
    },
    {
        id: "DM05", 
        name: "Đèn quạt"
    },
    {
        id: "DM06",  
        name: "Đèn khác"
    }
];


export const subcateData = [
    // Chi tiết danh mục đèn chùm
    {
        id: "CTDM01",
        name: "Đèn chùm hiện đại",
        idCate: "DM01"  
    },
    {
        id: "CTDM02",
        name: "Đèn chùm cổ điển",
        idCate: "DM01"  
    },
    {
        id: "CTDM03",
        name: "Đèn chùm pha lê",
        idCate: "DM01"  
    },
    {
        id: "CTDM04",
        name: "Đèn chùm nến",
        idCate: "DM01"  
    },
    {
        id: "CTDM05",
        name: "Đèn chùm thông tầng",
        idCate: "DM01"  
    },
    {
        id: "CTDM05",
        name: "Đèn chùm đồng",
        idCate: "DM01"  
    },

    // Chi tiết danh mục của đèn thả
    {
        id: "CTDM06",
        name: "Đèn thả nghệ thuật",
        idCate: "DM02" 
    },

    {
        id: "CTDM07",
        name: "Đèn thả cổ điển",
        idCate: "DM02" 
    },

    {
        id: "CTDM08",
        name: "Đèn thả hiện đại",
        idCate: "DM02" 
    },

    {
        id: "CTDM09",
        name: "Đèn thả pha lê",
        idCate: "DM02" 
    },

    {
        id: "CTDM010",
        name: "Đèn thả thông tầng",
        idCate: "DM02" 
    },

    // Chi tiết danh mục đèn bàn
    {
        id: "CTDM11",
        name: "Đèn bàn phòng ngủ",
        idCate: "DM03"  
    },

    {
        id: "CTDM12",
        name: "Đèn bàn phòng khách",
        idCate: "DM03"  
    },

    {
        id: "CTDM13",
        name: "Đèn bàn cổ điển",
        idCate: "DM03"  
    },

    {
        id: "CTDM14",
        name: "Đèn bàn hiện đại",
        idCate: "DM03"  
    },

    // Chi tiết danh mục đèn ốp trần
    {
        id: "CTDM15",
        name: "Đèn ốp trần cổ điển",
        idCate: "DM04"  
    },

    {
        id: "CTDM16",
        name: "Đèn ốp trần hiện đại",
        idCate: "DM04"  
    },

    {
        id: "CTDM17",
        name: "Đèn ốp trần gỗ",
        idCate: "DM04"  
    },

    {
        id: "CTDM18",
        name: "Đèn ốp trần trung hoa",
        idCate: "DM04"  
    },
   

    // Chi tiết danh mục đèn quạt trần
    {
        id: "CTDM19",
        name: "Đèn quạt giấu cánh",
        idCate: "DM05"  // Cập nhật idCate thành "DM05"
    },
    {
        id: "CTDM20",
        name: "Đèn quạt sải cánh",
        idCate: "DM05"  // Cập nhật idCate thành "DM05"
    },

    {
        id: "CTDM21",
        name: "Đèn quạt cổ điển",
        idCate: "DM05"  // Cập nhật idCate thành "DM05"
    },

    {
        id: "CTDM21",
        name: "Đèn quạt hiện đại",
        idCate: "DM05"  // Cập nhật idCate thành "DM05"
    },

    // Đèn khác
    {
        id: "CTDM22",
        name: "Đèn ngoài trời",
        idCate: "DM06" 
    },

    {
        id: "CTDM23",
        name: "Đèn tranh",
        idCate: "DM06" 
    },

    {
        id: "CTDM24",
        name: "Đèn âm trần",
        idCate: "DM06" 
    }
];

export const productData = [
    {
        id: "001",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03814",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/6257den-chum-trang-tri-noi-that-phong-cach-my-dc03814-01.jpg",
        price: "3000000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "12-9-2023"
    },
    {
        id: "002",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03815",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/8991den-chum-trang-tri-noi-that-phong-cach-my-dc03813-01.jpg",
        price: "4500000",
        discountPercent: "0.15",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "15-10-2023"
    },
    {
        id: "003",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03816",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/5647den-chum-trang-tri-noi-that-phong-cach-my-dc03812-01.jpg",
        price: "2200000",
        discountPercent: "0.05",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "20-10-2023"
    },
    {
        id: "004",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03817",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/837den-chum-trang-tri-noi-that-phong-cach-my-dc03811-07.jpg",
        price: "3500000",
        discountPercent: "0.2",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "22-10-2023"
    },
    {
        id: "005",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03818",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/3414den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01558-01.jpg",
        price: "1500000",
        discountPercent: "0.05",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "25-10-2023"
    },
    {
        id: "006",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/8155den-quat-trang-tri-noi-that-phong-cach-hien-dai-dq00907-01.jpg",
        price: "1800000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "30-10-2023"
    },

    {
        id: "007",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03219",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7022den-chum-trang-tri-noi-that-phong-cach-my-dc03809-06.jpg",
        price: "1800000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "30-10-2023"
    },

    {
        id: "008",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/1984den-chum-trang-tri-noi-that-phong-cach-my-dc03808-04.jpg",
        price: "1800000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "30-10-2023"
    },

    {
        id: "009",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/2051den-chum-trang-tri-noi-that-phong-cach-my-hien-dai-dc03782-02.jpg",
        price: "1800000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "30-10-2023"
    },

    {
        id: "010",
        name: "Đèn chùm trang trí nội thất phong cách Mỹ DC03819",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/3433den-chum-trang-tri-noi-that-phong-cach-my-dc03780-01.jpg",
        price: "1800000",
        discountPercent: "0.1",
        idCate: "DM01",
        nameCate: "Đèn chùm",
        dateCreate: "30-10-2023"
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
                date: "2023-10-16"
            },
            {
                orderId: "O002",
                productName: "Đèn thả trang trí nghệ thuật",
                price: 2200000,
                quantity: 1,
                date: "2023-10-20"
            }
        ]
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
                date: "2023-11-02"
            }
        ]
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
                date: "2023-09-13"
            }
        ]
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
                date: "2023-08-26"
            }
        ]
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
                date: "2023-08-01"
            },
            {
                orderId: "O007",
                productName: "Đèn quạt điều khiển từ xa",
                price: 2000000,
                quantity: 1,
                date: "2023-08-02"
            }
        ]
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
                date: "2023-10-16"
            },
            {
                orderId: "O002",
                productName: "Đèn thả trang trí nghệ thuật",
                price: 2200000,
                quantity: 1,
                date: "2023-10-20"
            }
        ]
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
                date: "2023-11-02"
            }
        ]
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
                date: "2023-09-13"
            }
        ]
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
                date: "2023-08-26"
            }
        ]
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
                date: "2023-08-01"
            },
            {
                orderId: "O007",
                productName: "Đèn quạt điều khiển từ xa",
                price: 2000000,
                quantity: 1,
                date: "2023-08-02"
            }
        ]
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
                date: "2023-10-16"
            },
            {
                orderId: "O002",
                productName: "Đèn thả trang trí nghệ thuật",
                price: 2200000,
                quantity: 1,
                date: "2023-10-20"
            }
        ]
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
                date: "2023-11-02"
            }
        ]
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
                date: "2023-09-13"
            }
        ]
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
                date: "2023-08-26"
            }
        ]
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
                date: "2023-08-01"
            },
            {
                orderId: "O007",
                productName: "Đèn quạt điều khiển từ xa",
                price: 2000000,
                quantity: 1,
                date: "2023-08-02"
            }
        ]
    }
];

export const orderData = [
    {
      id: '001',
      customerName: 'Phan Van Phát',
      orderDate: '20-1-2023',
      expectedDeliveryDate: '25-1-2023',
      address: '475 Man Thiện, Thủ Đức',
      status: 'Đang giao hàng',
      paymentMethod: 'Thanh toán khi nhận hàng',
      orderTime: '20-1-2023',
      invoice: '<button class="view-details">Xem chi tiết</button>'
    },
    {
      id: '002',
      customerName: 'Nguyễn Thị Mai',
      orderDate: '21-1-2023',
      expectedDeliveryDate: '26-1-2023',
      address: '123 Nguyễn Huệ, Quận 1',
      status: 'Đã giao',
      paymentMethod: 'Thanh toán qua thẻ tín dụng',
      orderTime: '21-1-2023',
      invoice: '<button class="view-details">Xem chi tiết</button>'
    },
    {
      id: '003',
      customerName: 'Lê Hoàng Nam',
      orderDate: '22-1-2023',
      expectedDeliveryDate: '27-1-2023',
      address: '68 Trần Hưng Đạo, Quận 5',
      status: 'Đang giao hàng',
      paymentMethod: 'Thanh toán qua ví điện tử',
      orderTime: '22-1-2023',
      invoice: '<button class="view-details">Xem chi tiết</button>'
    },
    {
      id: '004',
      customerName: 'Trần Quang Duy',
      orderDate: '23-1-2023',
      expectedDeliveryDate: '28-1-2023',
      address: '123 Nguyễn Thị Minh Khai, Quận 3',
      status: 'Chờ xử lý',
      paymentMethod: 'Thanh toán khi nhận hàng',
      orderTime: '23-1-2023',
      invoice: '<button class="view-details">Xem chi tiết</button>'
    },
    {
      id: '005',
      customerName: 'Phạm Minh Tuấn',
      orderDate: '24-1-2023',
      expectedDeliveryDate: '29-1-2023',
      address: '567 Lý Thái Tổ, Quận 10',
      status: 'Đã giao',
      paymentMethod: 'Thanh toán qua thẻ tín dụng',
      orderTime: '24-1-2023',
      invoice: '<button class="view-details">Xem chi tiết</button>'
    },
    {
        id: '003',
        customerName: 'Lê Hoàng Nam',
        orderDate: '22-1-2023',
        expectedDeliveryDate: '27-1-2023',
        address: '68 Trần Hưng Đạo, Quận 5',
        status: 'Đang giao hàng',
        paymentMethod: 'Thanh toán qua ví điện tử',
        orderTime: '22-1-2023',
        invoice: '<button class="view-details">Xem chi tiết</button>'
      },
      {
        id: '004',
        customerName: 'Trần Quang Duy',
        orderDate: '23-1-2023',
        expectedDeliveryDate: '28-1-2023',
        address: '123 Nguyễn Thị Minh Khai, Quận 3',
        status: 'Chờ xử lý',
        paymentMethod: 'Thanh toán khi nhận hàng',
        orderTime: '23-1-2023',
        invoice: '<button class="view-details">Xem chi tiết</button>'
      },
      {
        id: '005',
        customerName: 'Phạm Minh Tuấn',
        orderDate: '24-1-2023',
        expectedDeliveryDate: '29-1-2023',
        address: '567 Lý Thái Tổ, Quận 10',
        status: 'Đã giao',
        paymentMethod: 'Thanh toán qua thẻ tín dụng',
        orderTime: '24-1-2023',
        invoice: '<button class="view-details">Xem chi tiết</button>'
      }
  ];
  
  

