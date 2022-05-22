use QuanLyHocVien_IT19A1B

Go
--Module 1. PHẦN 3------BÀI THỰC HÀNH SỐ 1-------------------------------------------------------------
--1. Tạo view vThongTinCanBoGiaoVien để hiển thị thông tin cán bộ giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại,  Email, Tên Chức vụ.
		create view vThongTinCanBoGiaoVien
		as
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh,
			 gv.DienThoai, gv.Email, cv.TenChucVu 
			from ChucVu cv, CVCBGV cvgv, CBGV gv
			where cv.IdChucVu= cvgv.IdChucVu
			and    cvgv.IdCBGV= gv.IdCBGV
			
GO
			-- Xem lại
			select * from vThongTinCanBoGiaoVien
			
Go
--2. Tạo view vThongTinGiaoVien để hiển thị thông tin các giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại,  Email.
		create view vThongTinGiaoVien
		as
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email
			from CBGV gv,  CVCBGV cvgv, ChucVu cv
			where cv.TenChucVu=N'Giáo viên'
			and  gv.IdCBGV = cvgv.IdCBGV
			and cvgv.IdChucVu= cv.IdChucVu
Go		
--3. Tạo view vThongTinTrinhDoCanBoGiaoVien để hiển thị thông tin cán bộ giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại, Email, Tên trình độ.
		create view vThongTinTrinhDoCanBoGiaoVien
		as
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email, td.TenTrinhDo
			from CBGV gv, TDCBGV tdgv, TrinhDo td
			where gv.IdCBGV= tdgv.IdCBGV
			and   tdgv.IdTrinhDo= td.IdTrinhDo
go
--4. Tạo view vThongTinTrinhDoGiaoVien để hiển thị thông tin các giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại, Email, Tên trình độ.
		create view vThongTinTrinhDoGiaoVien
		as
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email, td.TenTrinhDo
			from CBGV gv, TDCBGV tdgv, TrinhDo td, CVCBGV cvgv, ChucVu cv
			where cv.TenChucVu=N'Giáo viên'
			and gv.IdCBGV= tdgv.IdCBGV
			and   tdgv.IdTrinhDo= td.IdTrinhDo
			and  gv.IdCBGV= cvgv.IdCBGV
			and  cvgv.IdChucVu= cv.IdChucVu
Go

--Module 2. PHẦN 3------BÀI THỰC HÀNH SỐ 2-------------------------------------------------------------

--1. Tạo view vThongTinMonHoc để hiển thị thông tin của môn học bao gồm: Tên môn học, Tín chỉ, Giai đoạn, Là đồ án, Đơn giá. 
		create view vThongTinMonHoc
		as
		select	mh.TenMonHoc, mh.TinChi, mh.GiaiDoan, mh.LaDoAn, dgmh.DonGia
		from	MonHoc mh, DonGiaMonHoc dgmh
		where   dgmh.ApDung=1
		and		mh.IdMonHoc= dgmh.IdMonHoc
		Go
--2. Tạo view vThongKeSoMonHocTongTien để thống kê Khóa ngắn hạn đó học bao nhiều môn,tổng tiền là bao nhiêu? 
--   Lưu ý Tổng tiền phải được tính dựa vào đơn giá của các môn học.
		create view vThongKeSoMonHocTongTien
		as
		select TenKhoaNganHan, count(mh.IdMonHoc) as [Số môn học], sum(dgmh.DonGia) as [Tổng tiền]
		from KhoaNganHan knh, CTDT ct, MonHoc mh, DonGiaMonHoc dgmh
		where  knh.IdKhoaNganHan = ct.IdKhoaNganHan
		and    ct.IdMonHoc		= mh.IdMonHoc
		and    mh.IdMonHoc      = dgmh.IdMonHoc
		and    ApDung			=1
		group by TenKhoaNganHan
		Go

--3. Tạo view vThongTinLopDaoTao để hiển thị thông tin của các Lớp đào tạo bao gồm thông tin: Tên khóa ngắn hạn, Tên lớp đào tạo. 
		create view vThongTinLopDaoTao
		as
		select	knh.TenKhoaNganHan, ldt.TenLopDaoTao
		from	KhoaNganHan knh,  LichDaoTao lichdt, LopDaoTao ldt
		where	knh.IdKhoaNganHan	= lichdt.IdKhoaNganHan
		and		lichdt.IdLichDaoTao	= ldt.IdLichDaoTao
		Go
--4. Tạo view vKhoaNganHangThietKeDoHoa hãy cho biết Khóa ngắn hạn Thiết kế đồ họa đang dự kiến mở bao nhiêu lớp?
		create view vKhoaNganHangThietKeDoHoa
		as
		select knh.TenKhoaNganHan, count(ldt.IdLichDaoTao) as [Số lớp dự kiến mở]
		from KhoaNganHan knh, LichDaoTao lichdt, LopDaoTao ldt
		where knh.TenKhoaNganHan=N'Thiết kế đồ họa'
		and   knh.IdKhoaNganHan= lichdt.IdKhoaNganHan
		and   lichdt.IdLichDaoTao= ldt.IdLichDaoTao
		group by knh.TenKhoaNganHan
		Go
-- 5. Tạo view vMonHocKhongNamTrongCTDT để hiển thị thông tin các môn học không nằm trong chương trình ngắn hạn nào?
		create view vMonHocKhongNamTrongCTDT
		as
		select *	from MonHoc where IdMonHoc not in (select IdMonHoc from CTDT)

		Go
--Module 3. PHẦN 3------BÀI THỰC HÀNH SỐ 3-------------------------------------------------------------

-- 1. Tạo view vDiemThi gồm các trường sau: IdLopDaTao, TenLopDaoTao, IdHocVien, Họ tên, Ngày sinh, 
--    Tên môn học, Là đồ án, Điểm chuyên cần, Điểm giữa kỳ, Điểm thi lần 1, Điểm thi lần 2, Điểm thi. Trong đó: 
--    Nếu Điểm thi lần 2  là Null thì Điểm thi: là Điểm thi lần 1 Ngược lại, Điểm thi là Điểm thi lần 2
	  create view vDiemThi
	  as
		  select ldt.IdLopDaoTao, ldt.TenLopDaoTao ,hv.IdHocVien,  holot + ' ' + ten as [HoTen],
		  CONVERT(varchar(10), ngaysinh, 103) as [NgaySinh],
		  mh.IdMonHoc,  TenMonHoc, LaDoAn,  DiemChuyenCan,  DiemGiuaKy,  DiemThiLan1, DiemThiLan2,
		  case when DiemThiLan2 is null then DiemThiLan1
										else DiemThiLan2
		  end as DiemThi
	  from  HocVien hv, DiemThi dt,  MonHoc mh, DangKyLopDaoTao dkldt, LopDaoTao ldt
	  where hv.IdHocVien   = dt.IdHocVien
	  and  dt.IdMonHoc     = mh.IdMonHoc
	  and  hv.IdHocVien    = dkldt.IdHocVien
	  and dkldt.IdLopDaoTao= ldt.IdLopDaoTao
	--  drop view vDiemThi
	-- Gọi lại vDiemThi
	--  select * from vDiemThi
	Go

-- 2.Tạo view vDiemTrungBinh gồm các trường sau: IdLopDaTao, TenLopDaoTao, IdHocVien, Họ tên, NgaySinh, 
--   Tên môn học, Là đồ án, Điểm chuyên cần, Điểm giữa kỳ, Điểm thi lần 1, Điểm thi lần 2, Điểm thi, DTB (Điểm trung bình). 
--   Trong đó: Nếu môn học không phải là đồ án thì DTB = (Điểm chuyên cần * 10 + Điểm giữa kỳ * 30 + Điểm thi * 60)/100, 
--   ngược lại: DTB= Điểm thi

	create view vDiemTrungBinh
	as
	 select v.*, case when LaDoAn = 0 then (DiemChuyenCan* 10 + DiemGiuaKy *30 +	DiemThi *60)/100
									 else DiemThi
						end as DTB
	 from vDiemThi v
	 go
-- 3. Tạo view vXepLoai gồm các trường sau: IdLopDaTao, TenLopDaoTao, IdHocVien, Họ tên, NgaySinh, 
--   Tên môn học, Là đồ án, Điểm chuyên cần, Điểm giữa kỳ, Điểm thi lần 1, Điểm thi lần 2, Điểm thi, DTB, Xếp loại. 
--   Trong đó: Nếu DTB >=8 thì Xếp loại: Giỏi, ngược lại nếu DTB>=7 thì Xếp loại: Khá, ngược lại nếu DTB>=5 thì xếp loại: Trung Bình, 
--             ngược lại xếp lại: Yếu
	create view vXepLoai
	as
	 select tb.*, Case when DTB>= 8 then N'Giỏi'
					   when DTB>=7 then N'Khá'
					   when DTB>=5 then N'Trung bình'
					   else  N'Yếu'
				  end as XepLoai
	 from vDiemTrungBinh tb

	 Go























