document.addEventListener("DOMContentLoaded", async function () {
  const tabHistory = [];
  let canChangeTab = false;


  //Lay ds tinh huyen xa
  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const provinces = await fetchData("https://provinces.open-api.vn/api/p/");
  const provinceSelect = document.getElementById("province");
  provinces.forEach((province) => {
    const option = new Option(province.name, province.code);
    provinceSelect.appendChild(option);
  });

  provinceSelect.addEventListener("change", async function () {
    const provinceCode = this.value;
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    districtSelect.innerHTML = '<option value="">Chọn Quận, Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    if (provinceCode) {
      const province = await fetchData(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
      province.districts.forEach((district) => {
        const option = new Option(district.name, district.code);
        districtSelect.appendChild(option);
      });
    }
  });

  document.getElementById("district").addEventListener("change", async function () {
    const districtCode = this.value;
    const wardSelect = document.getElementById("ward");
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    if (districtCode) {
      const district = await fetchData(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
      district.wards.forEach((ward) => {
        const option = new Option(ward.name, ward.code);
        wardSelect.appendChild(option);
      });
    }
  });

  // Hàm kiểm tra input có hợp lệ hay không
  const validateInput = (input) => {
    if (!input.validity.valid || !input.value) {
      input.classList.add("invalid");
      input.classList.remove("valid");
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
    }
  };

  document.querySelectorAll("input[required], select[required]").forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
    input.addEventListener("change", () => validateInput(input));
  });

  const navList = document.querySelectorAll(".nav-item");

  //showTab khi có thay đổi
  function showTab(tabName) {
    document.querySelectorAll(".tab-content, .nav-item").forEach((el) => el.classList.remove("active", "highlight"));
    document.getElementById(tabName)?.classList.add("active");
    document.querySelector(`.nav-item[data-tab="${tabName}"]`)?.classList.add("active");

    const tabIndex = tabHistory.indexOf(tabName);
    if (tabIndex === -1) {
      tabHistory.push(tabName);
    } else {
      tabHistory.splice(tabIndex + 1);
    }

    navList.forEach((item) => {
      if (tabHistory.includes(item.getAttribute("data-tab"))) {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }

  navList.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (canChangeTab) {
        showTab(item.getAttribute("data-tab"));
      } else {
        event.preventDefault();
      }
    });
  });

  showTab("cart");

  const buyBtn = document.querySelectorAll(".buy-btn");

  buyBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const currentTab = document.querySelector(".tab-content.active");
      const nextTab = currentTab?.nextElementSibling;

      if (currentTab?.id === "order-info") {
        const inputs = currentTab.querySelectorAll("input[required], select[required]");
        let isAllValid = true;
        const provinceSelect = document.getElementById("province");
        const districtSelect = document.getElementById("district");
        const wardSelect = document.getElementById("ward");

        const province =
          provinceSelect.options[provinceSelect.selectedIndex]?.text || "";
        const district =
          districtSelect.options[districtSelect.selectedIndex]?.text || "";
        const ward = wardSelect.options[wardSelect.selectedIndex]?.text || "";

        const fullAddress = `${
          document.getElementById("number-address").value
        }, ${ward}, ${district}, ${province}`;

        document.querySelector(".customer-name").textContent =
          document.getElementById("cus-name").value;
        document.querySelector(".customer-phone").textContent =
          document.getElementById("cus-tele").value;
        document.querySelector(".customer-address").textContent = fullAddress;

        inputs.forEach((input) => {
          validateInput(input);
          if (!input.classList.contains("valid")) {
            isAllValid = false;
          }
        });

        if (isAllValid && nextTab) {
          canChangeTab = true;
          showTab(nextTab.id);
        } else {
          alert("Vui lòng điền đầy đủ và hợp lệ thông tin!");
        }
      } else if (nextTab) {
        canChangeTab = true;
        showTab(nextTab.id);
      }
    });
  });
});
