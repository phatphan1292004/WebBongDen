export const cateData = [
    {
        id: "01",
        name: "Đèn chùm"
    },
    {
        id: "02",
        name: "Đèn thả"
    },
    {
        id: "03",
        name: "Đèn bàn"
    },
    {
        id: "04",
        name: "Đèn ốp trần"
    },
    {
        id: "05",
        name: "Đèn quạt"
    },
    {
        id: "06",
        name: "Đèn khác"
    }
];

export const subcateData = [
    {
        id: "01",
        name: "Đèn chùm hiện đại",
        idCate: "01" 
    },
    {
        id: "02",
        name: "Đèn chùm cổ điển",
        idCate: "01" 
    },
    {
        id: "03",
        name: "Đèn thả trang trí",
        idCate: "02" 
    },
    {
        id: "04",
        name: "Đèn thả nghệ thuật",
        idCate: "02" 
    },
    {
        id: "05",
        name: "Đèn bàn học",
        idCate: "03" 
    },
    {
        id: "06",
        name: "Đèn bàn trang trí",
        idCate: "03" 
    },
    {
        id: "07",
        name: "Đèn ốp trần LED",
        idCate: "04"
    },
    {
        id: "08",
        name: "Đèn ốp trần cổ điển",
        idCate: "04"
    },
    {
        id: "09",
        name: "Đèn quạt trần",
        idCate: "05" 
    },
    {
        id: "10",
        name: "Đèn quạt điều khiển từ xa",
        idCate: "05" 
    },
    {
        id: "11",
        name: "Đèn trang trí khác",
        idCate: "06" 
    }
];   

export const productData = [
    {
        id: "001",
        name: "Đèn chùm tiffany trang trí nội thất DC03596",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7239den-chum-tiffany-trang-tri-noi-that-dc03596-05.jpg",
        price: "3000000",
        discountPercent: "0.1",
        desc: `Đèn chùm trang trí nội thất phong cách Mỹ hiện đại DC01\n
                Không gian lắp đặt: trang trí phòng khách, phòng ngủ, phòng ăn, nhà hàng, quán cafe, văn phòng, khách sạn, ...\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + chao vải\n
                Mã sản phẩm: DC01`,
        idCate: "01",
        nameCate: "Đèn chùm",
        dateCreate: "12-9-2023"
    },
    {
        id: "002",
        name: "Đèn chùm hiện đại trang trí phòng khách",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/3433den-chum-trang-tri-noi-that-phong-cach-my-dc03780-01.jpg",
        price: "4500000",
        discountPercent: "0.15",
        desc: `Đèn chùm hiện đại với thiết kế tinh tế phù hợp với không gian phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Thép không gỉ + chao thủy tinh.\n
                Mã sản phẩm: DC02`,
        idCate: "01",
        nameCate: "Đèn chùm",
        dateCreate: "15-10-2023"
    },
    {
        id: "003",
        name: "Đèn thả trang trí nghệ thuật",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/8334den-chum-may-trang-tri-noi-that-phong-cach-bomehian-dc03783-06.jpg",
        price: "2200000",
        discountPercent: "0.05",
        desc: `Đèn thả trang trí nghệ thuật phù hợp với không gian phòng ăn và nhà hàng.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + kính màu.\n
                Mã sản phẩm: DT01`,
        idCate: "02",
        nameCate: "Đèn thả",
        dateCreate: "20-10-2023"
    },
    {
        id: "004",
        name: "Đèn thả nghệ thuật trang trí quán cafe",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/6391den-tha-thiet-ke-trang-tri-noi-that-phong-cach-hien-dai-dt02958-01.jpg",
        price: "3500000",
        discountPercent: "0.2",
        desc: `Đèn thả nghệ thuật với thiết kế hiện đại dành cho không gian quán cafe và nhà hàng.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Thép không gỉ + chao thủy tinh.\n
                Mã sản phẩm: DT02`,
        idCate: "02",
        nameCate: "Đèn thả",
        dateCreate: "22-10-2023"
    },
    {
        id: "005",
        name: "Đèn bàn học LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/3414den-op-tran-pha-le-trang-tri-noi-that-phong-cach-hien-dai-do01558-01.jpg",
        price: "1500000",
        discountPercent: "0.05",
        desc: `Đèn bàn học LED với ánh sáng dịu nhẹ, bảo vệ mắt cho học sinh và sinh viên.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Nhựa cao cấp.\n
                Mã sản phẩm: DB01`,
        idCate: "03",
        nameCate: "Đèn bàn",
        dateCreate: "25-10-2023"
    },
    {
        id: "006",
        name: "Đèn bàn trang trí phòng ngủ",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/8155den-quat-trang-tri-noi-that-phong-cach-hien-dai-dq00907-01.jpg",
        price: "1800000",
        discountPercent: "0.1",
        desc: `Đèn bàn trang trí phòng ngủ với thiết kế sang trọng, tạo không gian ấm cúng.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Gỗ + thủy tinh.\n
                Mã sản phẩm: DB02`,
        idCate: "03",
        nameCate: "Đèn bàn",
        dateCreate: "30-10-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    },
    {
        id: "007",
        name: "Đèn ốp trần LED",
        urlImage: "https://denhoamy.vn/upload/attachment/thumb/7449den-tuong-trang-tri-ngoai-that-phong-cach-tan-co-dien-dv01836-04.jpg",
        price: "2500000",
        discountPercent: "0.05",
        desc: `Đèn ốp trần LED siêu sáng phù hợp cho các không gian văn phòng và phòng khách.\n
                Tình trạng: Mới 100%, Full box\n
                Bóng Led ánh sáng: vàng/ trung tính/ trắng. Tuổi thọ bóng trung bình: 50000H. Điện áp: 220V.\n
                Chất liệu: Hợp kim + nhựa cao cấp.\n
                Mã sản phẩm: DO01`,
        idCate: "04",
        nameCate: "Đèn ốp trần",
        dateCreate: "5-11-2023"
    }
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
  
  

