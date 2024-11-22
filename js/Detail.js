

document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra xem có phần tử .category-item > a trong DOM không
  const categoryLinks = document.querySelectorAll(".category-item > a");
  
  if (categoryLinks.length === 0) {
    console.log("Không tìm thấy các phần tử .category-item > a");
  } else {
    categoryLinks.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        // Đóng tất cả các sub-menu
        document.querySelectorAll(".category-item").forEach(function (el) {
          el.classList.remove("active");
        });
        
        const parent = this.parentElement;
        parent.classList.toggle("active");
      });
    });
  }
});


// Dữ liệu sản phẩm
document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc02.jpg",
      oldPrice: "5.000.000 VND",
      newPrice: "4.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc03.jpg",
      oldPrice: "6.000.000 VND",
      newPrice: "5.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc05.jpg",
      oldPrice: "33.000.000 VND",
      newPrice: "23.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc06.jpg",
      oldPrice: "32.000.000 VND",
      newPrice: "22.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc07.jpg",
      oldPrice: "32.000.000 VND",
      newPrice: "21.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc08.jpg",
      oldPrice: "32.000.000 VND",
      newPrice: "25.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "22.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc10.jpg",
      oldPrice: "30.000.000 VND",
      newPrice: "33.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc11.jpg",
      oldPrice: "30.000.000 VND",
      newPrice: "23.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc12.jpg",
      oldPrice: "30.000.000 VND",
      newPrice: "26.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc13.jpg",
      oldPrice: "30.000.000 VND",
      newPrice: "27.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc14.jpg",
      oldPrice: "30.000.000 VND",
      newPrice: "29.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc18.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    }, {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dc20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt02.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt03.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt05.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt06.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt07.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt08.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt10.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt11.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt12.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt13.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt14.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt18.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn chùm trang trí phong cách Trung Hoa DC03719",
      image1: "./img/dt20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk02.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk03.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk05.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk06.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk07.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk08.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk10.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk11.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk12.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk13.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk14.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk18.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk21.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk22.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk23.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk24.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn LED âm trần COB siêu sáng trang trí nội thất phong cách hiện đại DA00088",
      image1: "./img/dk25.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq02.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq03.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq05.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq06.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq07.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq08.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq10.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq11.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq12.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq13.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq14.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq18.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq21.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq22.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq23.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq24.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn quạt trang trí nội thất phong cách hiện đại",
      image1: "./img/dq25.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db02.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db03.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db05.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db06.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db07.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db08.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db10.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db11.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db12.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db13.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db14.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db21.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db22.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db23.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db24.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn bàn trang trí nội thất phong cách Mỹ DB02102",
      image1: "./img/db25.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot01.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot02.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot03.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot04.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot05.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot06.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot07.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot08.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot09.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot10.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot11.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot12.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot13.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot14.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot15.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot16.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot17.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot18.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot19.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot20.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },{
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot21.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot22.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot23.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot24.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    {
      name: "Đèn ốp trần trang trí nội thất phong cách Nhật",
      image1: "./img/ot25.jpg",
      oldPrice: "3.000.000 VND",
      newPrice: "2.000.000 VND",
      discount: "-33%"
    },
    
  ];

  const itemsPerPage = 20; // Hiển thị 20 sản phẩm mỗi trang
  let currentPage = 1; // Trang hiện tại

  // Hàm hiển thị sản phẩm theo trang
  function displayProducts(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    // Lấy container và làm mới nội dung
    let container = document.getElementById("product-container");
    container.innerHTML = "";

    // Hiển thị các sản phẩm trên trang
    productsToDisplay.forEach((product) => {
      container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 mb-4">
          <div class="single-product-wrapper">
            <div class="product-item">
              <div class="img">
                <img src="${product.image1}" alt="${product.name}" />
              </div>
              <div class="product-info">
                <div class="product-name">${product.name}</div>
                <p class="original-price">${product.oldPrice}</p>
                <div class="price-discount">
                  <p class="product-price">${product.newPrice}</p>
                  <p class="discount-percentage">${product.discount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Hiển thị trang đầu tiên khi tải trang
  displayProducts(currentPage);

  // Xử lý sự kiện nhấn vào các trang
  document.querySelectorAll(".page-link[data-page]").forEach(function (pageLink) {
    pageLink.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = parseInt(this.getAttribute("data-page"));
      displayProducts(currentPage);
    });
  });

  // Xử lý sự kiện nhấn vào nút "Previous"
  document.getElementById("prev-page").addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayProducts(currentPage);
    }
  });

  // Xử lý sự kiện nhấn vào nút "Next"
  document.getElementById("next-page").addEventListener("click", function (e) {
    e.preventDefault();
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(currentPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt
    });
      
    }
  });
});

// Lấy tất cả các liên kết trong phần phân trang
const pageLinks = document.querySelectorAll('.page-link');

// Thêm sự kiện click vào từng liên kết
pageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn hành động mặc định của liên kết
        const page = this.getAttribute('data-page'); // Lấy số trang từ data-page
        
        if (page) {
            // Gọi hàm cuộn lên đầu trang
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Cuộn mượt
            });

            // Xử lý logic để hiển thị nội dung trang tương ứng (tùy thuộc vào cách bạn phân trang)
            console.log(`Chuyển đến trang ${page}`); // Thay bằng logic phân trang thực tế
        }
    });
});
