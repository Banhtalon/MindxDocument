// Khai báo mảng đúng format như đề bài
const students = [
  {
    name: "An",
    scores: {
      Toan: { score: 7.4, evaluation: "Đ" },
      NguVan: { score: 8.9, evaluation: "Đ" },
      NgoaiNgu: { score: 8.5, evaluation: "Đ" },
      VatLy: { score: 9.0, evaluation: "Đ" },
      HoaHoc: { score: 3.9, evaluation: "KĐ" },
      SinhHoc: { score: 5.0, evaluation: "Đ" },
      LichSu: { score: 8.3, evaluation: "Đ" },
      DiaLy: { score: 9.4, evaluation: "Đ" },
      GDCD: { score: 6.6, evaluation: "Đ" },
    },
  },
  {
    name: "Binh",
    scores: {
      Toan: { score: 3.4, evaluation: "KĐ" },
      NguVan: { score: 5.9, evaluation: "Đ" },
      NgoaiNgu: { score: 5.4, evaluation: "Đ" },
      VatLy: { score: 7.4, evaluation: "Đ" },
      HoaHoc: { score: 9.3, evaluation: "Đ" },
      SinhHoc: { score: 8.6, evaluation: "Đ" },
      LichSu: { score: 5.2, evaluation: "Đ" },
      DiaLy: { score: 7.1, evaluation: "Đ" },
      GDCD: { score: 6.7, evaluation: "Đ" },
    },
  },
  // Thêm 8 bạn nữa cho đủ 10 (để code ngắn gọn, mình giữ nguyên cấu trúc này)
  {
    name: "Cường",
    scores: {
      Toan: { score: 8 },
      NguVan: { score: 7 },
      NgoaiNgu: { score: 8 },
      VatLy: { score: 8 },
      HoaHoc: { score: 8 },
      SinhHoc: { score: 8 },
      LichSu: { score: 8 },
      DiaLy: { score: 8 },
      GDCD: { score: 8 },
    },
  },
  {
    name: "Dung",
    scores: {
      Toan: { score: 5 },
      NguVan: { score: 5 },
      NgoaiNgu: { score: 6 },
      VatLy: { score: 5 },
      HoaHoc: { score: 5 },
      SinhHoc: { score: 5 },
      LichSu: { score: 5 },
      DiaLy: { score: 5 },
      GDCD: { score: 5 },
    },
  },
  {
    name: "Em",
    scores: {
      Toan: { score: 9 },
      NguVan: { score: 9 },
      NgoaiNgu: { score: 9 },
      VatLy: { score: 9 },
      HoaHoc: { score: 9 },
      SinhHoc: { score: 9 },
      LichSu: { score: 9 },
      DiaLy: { score: 9 },
      GDCD: { score: 9 },
    },
  },
  {
    name: "Phong",
    scores: {
      Toan: { score: 6 },
      NguVan: { score: 6 },
      NgoaiNgu: { score: 7 },
      VatLy: { score: 6 },
      HoaHoc: { score: 6 },
      SinhHoc: { score: 6 },
      LichSu: { score: 6 },
      DiaLy: { score: 6 },
      GDCD: { score: 6 },
    },
  },
  {
    name: "Giang",
    scores: {
      Toan: { score: 4 },
      NguVan: { score: 5 },
      NgoaiNgu: { score: 4 },
      VatLy: { score: 4 },
      HoaHoc: { score: 4 },
      SinhHoc: { score: 4 },
      LichSu: { score: 4 },
      DiaLy: { score: 4 },
      GDCD: { score: 4 },
    },
  },
  {
    name: "Hoa",
    scores: {
      Toan: { score: 8.5 },
      NguVan: { score: 8 },
      NgoaiNgu: { score: 8.5 },
      VatLy: { score: 8 },
      HoaHoc: { score: 8 },
      SinhHoc: { score: 8 },
      LichSu: { score: 8 },
      DiaLy: { score: 8 },
      GDCD: { score: 8 },
    },
  },
  {
    name: "Linh",
    scores: {
      Toan: { score: 7 },
      NguVan: { score: 7 },
      NgoaiNgu: { score: 7.5 },
      VatLy: { score: 7 },
      HoaHoc: { score: 7 },
      SinhHoc: { score: 7 },
      LichSu: { score: 7 },
      DiaLy: { score: 7 },
      GDCD: { score: 7 },
    },
  },
  {
    name: "Mai",
    scores: {
      Toan: { score: 9.5 },
      NguVan: { score: 8.5 },
      NgoaiNgu: { score: 9 },
      VatLy: { score: 9 },
      HoaHoc: { score: 9 },
      SinhHoc: { score: 9 },
      LichSu: { score: 9 },
      DiaLy: { score: 9 },
      GDCD: { score: 9 },
    },
  },
];

const ketQuaDiv = document.getElementById("hien-thi"); //

// --- BƯỚC CHUẨN BỊ (DÙNG MAP) ---
// Thay vì tính điểm trung bình (ĐTB) lặp đi lặp lại, ta dùng .map()
// để tạo ra 1 mảng mới chỉ chứa "Tên" và "Điểm TB" cho dễ xử lý
const danhSachDtb = students.map((hocSinh) => {
  // Lấy ra tất cả các môn học của học sinh đó
  const cacMonHoc = Object.values(hocSinh.scores);

  // Cộng tổng điểm
  let tongDiem = 0;
  for (let mon of cacMonHoc) {
    tongDiem += mon.score;
  }

  // Tính trung bình
  let dtb = tongDiem / cacMonHoc.length;

  // Trả về object mới
  return {
    name: hocSinh.name,
    diemTrungBinh: Number(dtb.toFixed(2)), // Làm tròn 2 chữ số
  };
});

// --- XỬ LÝ CÁC YÊU CẦU ---

// 1. Top 3 học sinh cao nhất
const renderResult = (title, contentHtml) => {
  ketQuaDiv.innerHTML = `<h4>${title}</h4>${contentHtml}`;
};

const bai1 = () => {
  const top3 = [...danhSachDtb]
    .sort((a, b) => b.diemTrungBinh - a.diemTrungBinh)
    .slice(0, 3);

  const items = top3
    .map((hs, i) => {
      const rank = i + 1;
      const cls = i === 0 ? "gold" : i === 1 ? "silver" : "bronze";
      return `
        <li class="top-item ${cls}">
          <div class="rank">${rank}</div>
          <div class="info"><span class="name">${hs.name}</span><span class="score">${hs.diemTrungBinh}</span></div>
        </li>`;
    })
    .join("");

  const html = `<ul class="top-list">${items}</ul>`;
  renderResult("Top 3 điểm cao nhất", html);
};

// 2. Tìm học sinh điểm thấp nhất (DÙNG FIND)
const bai2 = () => {
  const minScore = Math.min(...danhSachDtb.map((hs) => hs.diemTrungBinh));
  const s = danhSachDtb.find((hs) => hs.diemTrungBinh === minScore);
  const html = `
    <div class="top-item" style="align-items:center">
      <div class="rank" style="background:linear-gradient(45deg,#ef4444,#f97316)">!</div>
      <div class="info"><span class="name">${s.name}</span><span class="score">${s.diemTrungBinh}</span></div>
    </div>`;
  renderResult("Người điểm thấp nhất", html);
};

// 3. Tính điểm TBHK của cả lớp
const bai3 = () => {
  const tong = danhSachDtb.reduce((acc, h) => acc + h.diemTrungBinh, 0);
  const avg = (tong / danhSachDtb.length).toFixed(2);
  const html = `<div class="muted">Điểm trung bình toàn lớp</div><div style="margin-top:8px;font-weight:800;font-size:1.6rem">${avg}</div>`;
  renderResult("Điểm TB của toàn bộ lớp", html);
};

// 4. In ra danh hiệu (Giỏi, Khá, TB)
const bai4 = () => {
  const rows = danhSachDtb
    .map((hs) => {
      let cls = "tb";
      let label = "Trung Bình";
      if (hs.diemTrungBinh >= 8.0) {
        cls = "gioi";
        label = "Giỏi";
      } else if (hs.diemTrungBinh >= 6.5) {
        cls = "kha";
        label = "Khá";
      } else if (hs.diemTrungBinh < 5.0) {
        cls = "yeu";
        label = "Yếu";
      }

      return `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><span>${hs.name} <small class=\"muted\">(${hs.diemTrungBinh})</small></span><span class=\"badge ${cls}\">${label}</span></div>`;
    })
    .join("");

  renderResult("Danh hiệu học lực", rows);
};

// 5. Lọc danh sách học sinh có ĐTB >= 7 (DÙNG FILTER VÀ MAP)
const bai5 = () => {
  const list = danhSachDtb
    .filter((h) => h.diemTrungBinh >= 7)
    .map(
      (h) =>
        `<li class="top-item"><div class="rank" style="background:linear-gradient(45deg,#60a5fa,#3b82f6)">✓</div><div class="info"><span class="name">${h.name}</span><span class="score">${h.diemTrungBinh}</span></div></li>`,
    )
    .join("");
  renderResult("Học sinh đạt >= 7 điểm", `<ul class="top-list">${list}</ul>`);
};
