use QuanLyHocVien_IT19A1A
	Go
--Module 1. PHẦN 4------BÀI THỰC HÀNH SỐ 1-------------------------------------------------------------

--1. Tạo thủ tục thêm, sửa, xóa cho bảng CBGV
	-- Thêm
				create procedure spInsertCBGV
				(	
						@IdCBGV			varchar(3), --tham số---
						@HoLot		    nvarchar(50),
						@Ten			nvarchar(20),
						@NgaySinh			datetime,
						@DienThoai		varchar(15),
						@Email				varchar(50)
				)
				as
				Begin
					insert into CBGV values(@IdCBGV, @HoLot, @Ten,	@NgaySinh, @DienThoai, @Email)
				End
	-- Truyền giá trị cho thủ tục spInsertCBGV
	execute spInsertCBGV     @IdCBGV='006',
												@HoLot=N'Nguyễn Văn',
												@Ten      = 'Anh',
												@NgaySinh ='1990/09/20',
												@DienThoai='0905123333',
												@Email='anh@gmail.com'
												
	
	
	
	Go
	-- Sửa
	-- drop procedure spUpdateCBGV
		create procedure spUpdateCBGV
				(	
						@IdCBGV			varchar(3),
						@HoLot			nvarchar(50),
						@Ten			nvarchar(20),
						@NgaySinh		datetime,
						@DienThoai		varchar(15),
						@Email			varchar(50)
				)
				as
				Begin
					update CBGV set HoLot=@HoLot,
									Ten= @Ten,
									NgaySinh=@NgaySinh,
									DienThoai=@DienThoai,
									Email=@Email
							where IdCBGV=@IdCBGV		
				End
	go
		execute spUpdateCBGV     @IdCBGV='006',
													@HoLot=N'Nguyễn Văn',
													@Ten      = 'Anh',
													@NgaySinh ='1990/09/20',
													@DienThoai='0905123333',
													@Email='anh@gmail.com'
	Go
	go
	select * from CBGV
	go
	-- Xóa
				create procedure spDeleteCBGV
				(
					@IdCBGV varchar(3)
				)
				as
				Begin
					delete from CBGV where IdCBGV =@IdCBGV
				End
	go
--2. Tạo thủ tục thêm, sửa, xóa cho bảng DangNhap
	-- Thêm
				create procedure spInsertDangNhap
				(
					@IdDangNhap varchar(3),
					@MatKhau	varchar(255)
				)
				as
				Begin
					insert into DangNhap values(@IdDangNhap,@MatKhau)
				End
	-- Sửa
	go
				create procedure spUpdateDangNhap
				(
					@IdDangNhap varchar(3),
					@MatKhau	varchar(255)
				)
				as
				Begin
					update DangNhap set MatKhau= @MatKhau where IdDangNhap=@IdDangNhap
				End
				go
	-- Xóa
				create procedure spDeleteDangNhap
				(
					@IdDangNhap varchar(3)					
				)
				as
				Begin
					delete from DangNhap where IdDangNhap =@IdDangNhap
				End

				go
-- 3. Tạo thủ tục thêm, sửa, xóa cho bảng TrinhDo
	-- Thêm
				create procedure spInsertTrinhDo
				(
					@IdTrinhDo	varchar(5),
					@TenTrinhDo	nvarchar(50)
				)
				as
				Begin
					insert into TrinhDo values(@IdTrinhDo, @TenTrinhDo)
				End
	   Go
	-- Sửa
				create procedure spUpdateTrinhDo
				(
					@IdTrinhDo	varchar(5),
					@TenTrinhDo	nvarchar(50)
				)
				as
				Begin
					update TrinhDo set TenTrinhDo=@TenTrinhDo where IdTrinhDo =@IdTrinhDo
				End
	  Go
	-- Xóa
				create procedure spDeleteTrinhDo
				(
					@IdTrinhDo		varchar(5)
				)
				as
				Begin
					delete from TrinhDo where IdTrinhDo=@IdTrinhDo
				End
	 Go
	--4.Tạo thủ tục thêm, sửa, xóa cho bảng TDCBGV (TDCBGV: Trình độ cán bộ giảng viên)
	-- Thêm
				create procedure spInsertTDCVGV
				(
					@IdCBGV			varchar(3),
					@IdTrinhDo		varchar(5),
					@Ngay			datetime,
					@TrangThai		bit
				)
				as
				Begin
					insert into TDCBGV values(@IdCBGV, @IdTrinhDo, @Ngay, @TrangThai)
				End
	Go
	-- Sửa
				create procedure spUpdateTDCVGV
				(
					@IdTDCVGV		int,
					@IdCBGV			varchar(3),
					@IdTrinhDo		varchar(5),
					@Ngay			datetime,
					@TrangThai		bit
				)
				as
				Begin
					update  TDCBGV set IdCBGV=@IdCBGV, IdTrinhDo=@IdTrinhDo, Ngay=@Ngay, TrangThai=@TrangThai
					where IdTDCBGV=@IdTDCVGV
				End
		Go
	-- Xóa
				create procedure spDeleteTDCVGV
				(
					@IdTDCVGV		int			
				)
				as
				Begin
					delete from TDCBGV where IdTDCBGV=@IdTDCVGV
				End
		Go
-- 5. Tạo thủ tục thêm, sửa, xóa cho bảng ChucVu
	-- Thêm
				create procedure spInsertChucVu
				(
					@IdChucVu	varchar(5),
					@TenChucVu	nvarchar(50)
				)
				as
				Begin
					insert into ChucVu values(@IdChucVu, @TenChucVu)
				End
	   Go
	-- Sửa
				create procedure spUpdateChucVu
				(
					@IdChucVu	varchar(5),
					@TenChucVu	nvarchar(50)
				)
				as
				Begin
					update ChucVu set TenChucVu=@TenChucVu where IdChucVu=@IdChucVu
				End
	  Go
	-- Xóa
				create procedure spDeleteChucVu
				(
					@IdChucVu		varchar(5)
				)
				as
				Begin
					delete from ChucVu where IdChucVu=@IdChucVu
				End
      Go
--6. Tạo thủ tục thêm, sửa, xóa cho bảng CVCBGV
	-- Thêm
				create procedure spInsertCVCBGV
				(
					@IdCBGV			varchar(3),
					@IdChucVu		varchar(5),
					@Ngay			datetime,
					@TrangThai		bit
				)
				as
				Begin
					insert into CVCBGV values(@IdCBGV, @IdChucVu, @Ngay, @TrangThai)
				End
	Go
	-- Sửa
				create procedure spUpdateCVCBGV
				(
					@IdCVCBGV		int,
					@IdCBGV			varchar(3),
					@IdChucVu		varchar(5),
					@Ngay			datetime,
					@TrangThai		bit
				)
				as
				Begin
					update  CVCBGV  set IdCBGV=@IdCBGV, IdChucVu =@IdChucVu, Ngay=@Ngay, TrangThai=@TrangThai
					where IdCVCBGV =@IdCVCBGV
				End
		Go
	-- Xóa
				create procedure spDeleteCVCBGV
				(
					@IdCVCVGV		int			
				)
				as
				Begin
					delete from CVCBGV where IdCVCBGV=@IdCVCVGV
				End
		Go

-- 7. Tạo thủ tục để hiển thị thông tin của bảng Chức vụ
		create procedure spgetChucVu
		as
			Begin
				select * from Chucvu
			End
		Go
--8. Tạo thủ tục để hiển thị thông tin của bảng Trình Độ.
		create procedure spgetTrinhDo
		as
			Begin
				select * from TrinhDo
			End
		Go
--9. Tạo thủ tục để hiển thị thông tin cán bộ giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại, Email, Tên chức vụ
		create procedure spgetThongTinChucVuCanBoGiaoVien
		as
		Begin
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email, cv.TenChucVu 
			from ChucVu cv, CVCBGV cvgv, CBGV gv
			where cv.IdChucVu= cvgv.IdChucVu
			and    cvgv.IdCBGV= gv.IdCBGV
		End
	go
--10.Tạo thủ tục để hiển thị thông tin các giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại,Email.
	create procedure spgetThongTinGiaoVien
	as
	Begin
		select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email
			from CBGV gv,  CVCBGV cvgv, ChucVu cv
			where cv.TenChucVu=N'Giáo viên'
			and  gv.IdCBGV = cvgv.IdCBGV
			and cvgv.IdChucVu= cv.IdChucVu	
	End
-- 11.	Tạo thủ tục để hiển thị thông tin cán bộ giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại, Email, Tên trình độ.
	go
	create procedure spgetThongTinTrinhDoCanBoGiaoVien
	as
	Begin
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email, td.TenTrinhDo
			from CBGV gv, TDCBGV tdgv, TrinhDo td
			where gv.IdCBGV= tdgv.IdCBGV
			and   tdgv.IdTrinhDo= td.IdTrinhDo
	End
	Go
-- 12.Tạo thủ tục để tìm kiếm thông tin các giáo viên bao gồm: Họ tên, Ngày Sinh, Điện thoại, Email mà có Trình độ nhập vào từ bàn phím.
	create procedure spgetThongTinCanBoGiaoVienByTenTrinhDo
	(
		@TenTrinhDo	nvarchar(50)
	)
	as
	Begin
			select gv.HoLot + ' ' + gv.Ten as [Họ và tên], gv.NgaySinh, gv.DienThoai, gv.Email
			from CBGV gv, TDCBGV tdgv, TrinhDo td, CVCBGV cvgv, ChucVu cv
			where cv.TenChucVu=N'Giáo viên'
			and  td.TenTrinhDo=@TenTrinhDo
			and gv.IdCBGV= tdgv.IdCBGV
			and   tdgv.IdTrinhDo= td.IdTrinhDo
			and  gv.IdCBGV= cvgv.IdCBGV
			and  cvgv.IdChucVu= cv.IdChucVu
	End
GO
  execute  spgetThongTinCanBoGiaoVienByTenTrinhDo   
		@TenTrinhDo=N'Thạc sĩ'
Go

--Module 2. PHẦN 4------BÀI THỰC HÀNH SỐ 2-------------------------------------------------------------

 
 --1. Tạo thủ tục Thêm, sửa, xóa cho bảng KhoaNganHan
	-- Thêm
	create procedure spInsertKhoaNganHan
	(
			@IdKhoaNganHan 		varchar(3),
			@TenKhoaNganHan		nvarchar(100),
			@ThoiGian						int,
			@SoLuongToiThieu		int,
			@SoLuongToiDa			int,
			@DonGia						float
	)
	as
	Begin
		insert into KhoaNganHan values(@IdKhoaNganHan, @TenKhoaNganHan, @ThoiGian, @SoLuongToiThieu,@SoLuongToiDa, @DonGia)
	End
	Go
	-- Sửa
	create procedure spUpdateKhoaNganHan
	(
			@IdKhoaNganHan 		varchar(3),
			@TenKhoaNganHan		nvarchar(100),
			@ThoiGian			int,
			@SoLuongToiThieu	int,
			@SoLuongToiDa		int
		
	)
	as
	Begin
		update KhoaNganHan set TenKhoaNganHan  =@TenKhoaNganHan, 
								ThoiGian	   =@ThoiGian, 
								SoLuongToiThieu=@SoLuongToiThieu,
								SoLuongToiDa   =@SoLuongToiDa
		where IdKhoaNganHan=@IdKhoaNganHan
	End
	Go
	-- Xóa
	create procedure spDeleteKhoaNganHan
	(
			@IdKhoaNganHan 		varchar(3)	
	)
	as
	Begin
		delete from KhoaNganHan WHERE IdKhoaNganHan=@IdKhoaNganHan
	End
	Go
-- 2. Tạo thủ tục thêm, sửa, xóa bảng MonHoc:
	create procedure spInsertMonHoc
		(
					@IdMonHoc		varchar(3),
					@TenMonHoc		nvarchar(100),
					@TinChi			int,
					@GiaiDoan		int,
					@LaDoAn			bit				
		)
		as
		Begin
				insert into MonHoc values(@IdMonHoc,@TenMonHoc,@TinChi, @GiaiDoan,@LaDoAn)
		End
			create procedure spInsertMonHoc1
		(
					@TenMonHoc		nvarchar(100),
					@TinChi			int,
					@GiaiDoan		int,
					@LaDoAn			bit				
		)
		as
		Begin
				insert into MonHoc values(dbo.fcgetIdMonHoc(),@TenMonHoc,@TinChi, @GiaiDoan,@LaDoAn)
		End
		Go
 
    
	-- Sửa
	create procedure spUpdateMonHoc
		(
					@IdMonHoc		varchar(3),
					@TenMonHoc		nvarchar(100),
					@TinChi			int,
					@GiaiDoan		int,
					@LaDoAn			bit				
		)
		as
		Begin
				update MonHoc set TenMonHoc=@TenMonHoc,
									TinChi=@TinChi,
									GiaiDoan=@GiaiDoan,
									LaDoAn= @LaDoAn
				where IdMonHoc=@IdMonHoc
		End
	Go
	-- Xóa
	 create procedure spDeleteMonHoc
		(
					@IdMonHoc		varchar(3)						
		)
		as
		Begin
				delete from MonHoc where IdMonHoc=@IdMonHoc
		End
		Go
-- 3. Tạo thủ tục thêm, sửa, xóa bảng DonGiaMonHoc:
	-- Thêm
		create procedure spInsertDonGiaMonHoc
		(
			@IdMonHoc		varchar(3),
			@DonGia			float,
			@NgayApDung		datetime,
			@ApDung			bit
		)
		as
		Begin
			insert into DonGiaMonHoc values(@IdMonHoc, @DonGia, @NgayApDung, @ApDung)
		End
	Go
	-- Sửa
	create procedure spUpdateDonGiaMonHoc
		(
			@IdMonHoc		varchar(3),
			@DonGia			float,
			@NgayApDung		datetime,
			@ApDung			bit
		)
		as
		Begin
			update DonGiaMonHoc set DonGia=@DonGia, 
									NgayApDung=@NgayApDung,
									ApDung =@ApDung
			where IdMonHoc=@IdMonHoc
		End
	Go
	-- Xóa
	create procedure spDeleteDonGiaMonHoc
		(
			@IdMonHoc		varchar(3)			
		)
		as
		Begin
			delete from DonGiaMonHoc where IdMonHoc =@IdMonHoc
		End
		Go
-- 4. Tạo thủ tục thêm, sửa, xóa bảng CTDT
		create procedure spInsertCTDT
		(
				@IdKhoaNganHan			varchar(3),
				@IdMonHoc				varchar(3),
				@NgayApDung				datetime
		)
		as
		Begin
			insert into CTDT values(@IdKhoaNganHan, @IdMonHoc, @NgayApDung)
		End
		Go
		-- Sửa
		create procedure spUpdateCTDT
		(
				@IdCTDT					int,
				@IdKhoaNganHan			varchar(3),
				@IdMonHoc				varchar(3),
				@NgayApDung				datetime
		)
		as
		Begin
			update CTDT set IdKhoaNganHan=@IdKhoaNganHan,
							IdMonHoc=@IdMonHoc,
							NgayApDung=@NgayApDung
			where IdCTDT=@IdCTDT
		End
		Go
		-- Xóa
		create procedure spDeleteCTDT
		(
				@IdCTDT					int
		)
		as
		Begin
			delete from CTDT	where IdCTDT=@IdCTDT
		End
	Go
-- 5. Tạo thủ tục thêm, sửa, xóa bảng LichDaoTao
	create procedure spInsertLichDaoTao
	(
		@IdKhoaNganHan			varchar(3),
		@ThoiGianBatDau			datetime,
		@ThoiGianKetThuc		datetime,
		@TrangThai				bit
	)
	as
	Begin
		insert into LichDaoTao values(@IdKhoaNganHan, @ThoiGianBatDau, @ThoiGianKetThuc, @TrangThai)
	End
	-- Sửa
	Go
	create procedure spUpdateLichDaoTao
	(
		@IdLichDaoTao			int,
		@IdKhoaNganHan			varchar(3),
		@ThoiGianBatDau			datetime,
		@ThoiGianKetThuc		datetime,
		@TrangThai				bit
	)
	as
	Begin
		update LichDaoTao set IdKhoaNganHan=@IdKhoaNganHan,
							 ThoiGianBatDau=@ThoiGianBatDau,
							 ThoiGianKetThuc=@ThoiGianKetThuc,
							 TrangThai=@TrangThai
		where IdLichDaoTao=@IdLichDaoTao
	End
	Go
	-- Xóa
	create procedure spDeleteLichDaoTao
	(
		@IdLichDaoTao			int
		
	)
	as
	Begin
		delete from LichDaoTao where IdLichDaoTao=@IdLichDaoTao
	End
	gO
 --6.Tạo thủ tục thêm, sửa, xóa Lớp đào tạo:
	-- Thêm
	create procedure spInsertLopDaoTao
	(
			@IdLopDaoTao			varchar(5),
			@TenLopDaoTao		nvarchar(100),
			@IdLichDaoTao		int,
			@TrangThai				bit
	)
	as
	Begin
			insert into LichDaoTao values(@IdLopDaoTao, @TenLopDaoTao,@IdLichDaoTao,@TrangThai)
	End
	Go
	-- Sửa
	create procedure spUpdateLopDaoTao
	(
			@IdLopDaoTao			varchar(5),
			@TenLopDaoTao		nvarchar(100),
			@IdLichDaoTao		int,
			@TrangThai				bit
	)
	as
	Begin
			update LopDaoTao set TenLopDaoTao=@TenLopDaoTao, IdLichDaoTao=@IdLichDaoTao, TrangThai=@TrangThai
			where IdLopDaoTao=@IdLopDaoTao
	End
	Go
	-- Xóa
	create procedure spDeleteLopDaoTao
	(
			@IdLopDaoTao			varchar(5)			
	)
	as
	Begin
			delete from LopDaoTao WHERE	IdLopDaoTao=@IdLopDaoTao
	End
	Go

--7. Tạo thủ tục để hiển thị thông tin của môn học bao gồm: Tên môn học, Tín chỉ, Giai đoạn, Là đồ án, Đơn giá. 
	create procedure spgetThongTinMonHoc
	as
	Begin
		select	mh.TenMonHoc, mh.TinChi, mh.GiaiDoan, mh.LaDoAn, dgmh.DonGia
		from	MonHoc mh, DonGiaMonHoc dgmh
		where   dgmh.ApDung=1
		and		mh.IdMonHoc= dgmh.IdMonHoc
	end
	Go
--8.Tạo thủ tục để thống kê Khóa ngắn hạn đó học bao nhiều môn,tổng tiền là bao nhiêu? 
--   Lưu ý Tổng tiền phải được tính dựa vào đơn giá của các môn học.
	create procedure spgetThongKeSoMonHocTongTien
	as
	Begin
		select TenKhoaNganHan, count(mh.IdMonHoc) as [Số môn học], sum(dgmh.DonGia) as [Tổng tiền]
		from KhoaNganHan knh, CTDT ct, MonHoc mh, DonGiaMonHoc dgmh
		where  knh.IdKhoaNganHan = ct.IdKhoaNganHan
		and    ct.IdMonHoc		= mh.IdMonHoc
		and    mh.IdMonHoc      = dgmh.IdMonHoc
		and    ApDung			=1
		group by TenKhoaNganHan
	end
	Go
--9. Tạo thủ tục để hiển thị thông tin của các Lớp đào tạo bao gồm thông tin: Tên khóa ngắn hạn, Tên lớp đào tạo.	
	create procedure spgetThongTinLopDaoTao
	as
	Begin
		select	knh.TenKhoaNganHan, ldt.TenLopDaoTao
		from	KhoaNganHan knh,  LichDaoTao lichdt, LopDaoTao ldt
		where	knh.IdKhoaNganHan	= lichdt.IdKhoaNganHan
		and		lichdt.IdLichDaoTao	= ldt.IdLichDaoTao
	End
	Go
--10. Tạo thủ tục để cho biết Khóa ngắn hạn Thiết kế đồ họa đang dự kiến mở bao nhiêu lớp?
	create procedure spgetKhoaNganHanThietKeDoHoa
	as
	Begin
		select knh.TenKhoaNganHan, count(ldt.IdLichDaoTao) as [Số lớp dự kiến mở]
		from KhoaNganHan knh, LichDaoTao lichdt, LopDaoTao ldt
		where knh.TenKhoaNganHan=N'Thiết kế đồ họa'
		and   knh.IdKhoaNganHan= lichdt.IdKhoaNganHan
		and   lichdt.IdLichDaoTao= ldt.IdLichDaoTao
		group by knh.TenKhoaNganHan
	End
	Go

--Module 3. PHẦN 4------BÀI THỰC HÀNH SỐ 3-------------------------------------------------------------
--1. Tạo thủ tục thêm, sửa, xóa cho bảng HocVien
	-- Thêm
	create procedure spInsertHocVien
	(
			@HoLot				nvarchar(30),
			@Ten				nvarchar(15),
			@NgaySinh			datetime,
			@GioiTinh			bit,
			@DienThoai			varchar(15),
			@Email				varchar(50),
			@DiaChi				nvarchar(100),
			@TrangThai			bit
	)
	as
	Begin
			Insert into HocVien values(@HoLot, @Ten, @NgaySinh, @GioiTinh,@DienThoai, @Email, @DiaChi, @TrangThai)
	End
	Go
	-- Sửa
	create procedure spUpdateHocVien
	(
			@IdHocVien			int,
			@HoLot				nvarchar(30),
			@Ten				nvarchar(15),
			@NgaySinh			datetime,
			@GioiTinh			bit,
			@DienThoai			varchar(15),
			@Email				varchar(50),
			@DiaChi				nvarchar(100),
			@TrangThai			bit
	)
	as
	Begin
			update HocVien set 	HoLot=@HoLot,
								Ten= @Ten,
								NgaySinh=@NgaySinh,
								GioiTinh=@GioiTinh,
								DienThoai=@DienThoai,
								Email=@Email,
								DiaChi=@DiaChi,
								TrangThai=@TrangThai
			where IdHocVien=@IdHocVien
	End
	Go
	-- Xóa
	create procedure spDeleteHocVien
	(
			@IdHocVien			int			
	)
	as
	Begin
			delete from HocVien where IdHocVien=@IdHocVien
	End
	Go
--2. Tạo thủ tục thêm, sửa, xóa cho bảng HinhAnhHocVien
		-- Thêm
		create procedure spInsertHinhAnhHocVien
		(	
			@IdHocVien			int,
			@HinhAnh			image
		)
		as
		Begin
			insert into HinhAnhHocVien values(@IdHocVien, @HinhAnh)
		End
		Go
	-- Sửa
		create procedure spUpdateHinhAnhHocVien
		(	
			@IdHocVien			int,
			@HinhAnh			image
		)
		as
		Begin
			update HinhAnhHocVien set HinhAnh=@HinhAnh where IdHocVien=@IdHocVien
		End
		Go
	-- Xóa
		create procedure spDeleteHinhAnhHocVien
		(	
			@IdHocVien			int
			
		)
		as
		Begin
			delete from HinhAnhHocVien WHERE IdHocVien=@IdHocVien
		End
		Go
--3. Tạo thủ tục thêm, sửa, xóa cho bảng DangKyLopDaoTao
	-- Thêm
		create procedure spInsertDangKyLopDaoTao
		(
			
			@IdHocVien			int,
			@IdLopDaoTao		varchar(5),
			@NgayDangKy			datetime,
			@SoTienNop			float
		)
		as
		Begin
			insert into DangKyLopDaoTao values(@IdHocVien, @IdLopDaoTao, @NgayDangKy, @SoTienNop)
		End
		Go
		-- Sửa
		create procedure spUpdateDangKyLopDaoTao
		(
			
			@IdDangKyLopDaoTao	int,
			@IdHocVien			int,
			@IdLopDaoTao		varchar(5),
			@NgayDangKy			datetime,
			@SoTienNop			float
		)
		as
		Begin
			update DangKyLopDaoTao set IdHocVien =@IdHocVien,
										IdLopDaoTao=@IdLopDaoTao,
										NgayDangKy=@NgayDangKy,
										SoTienNop=@SoTienNop
			where IdDangKyLopDaoTao= @IdDangKyLopDaoTao
		End
		go
		-- Xóa
		create procedure spDeleteDangKyLopDaoTao
		(
			@IdDangKyLopDaoTao	int			
		)
		as
		Begin
			delete from DangKyLopDaoTao where IdDangKyLopDaoTao=@IdDangKyLopDaoTao
		End
		Go
--4. Tạo thủ tục thêm, sửa, xóa cho bảng LichDay
	-- Thêm
		create procedure spInsertLichDay
		(
			
			@IdLopDaoTao		varchar(5) ,
			@IdMonHoc			varchar(3),
			@IdCBGV				varchar(3),
			@ThoiGianBatDau		datetime,
			@ThoiGianKetThuc	datetime,
			@BuoiHoc			nvarchar(50)
		)
		as
		Begin
			insert into LichDay values(@IdLopDaoTao, @IdMonHoc, @IdCBGV, @ThoiGianBatDau, @ThoiGianKetThuc, @BuoiHoc)
		End
		Go
		create procedure spUpdateLichDay
		(
			
			@IdLichDay			int,	
			@IdLopDaoTao		varchar(5) ,
			@IdMonHoc			varchar(3),
			@IdCBGV				varchar(3),
			@ThoiGianBatDau		datetime,
			@ThoiGianKetThuc	datetime,
			@BuoiHoc			nvarchar(50)
		)
		as
		Begin
			update LichDay set IdLopDaoTao=@IdLopDaoTao,
								IdMonHoc=@IdMonHoc,
								IdCBGV=@IdCBGV,
								ThoiGianBatDau=@ThoiGianBatDau,
								ThoiGianKetThuc=@ThoiGianKetThuc
			where IdLichDay=@IdLichDay
		End
		--Xóa
		go
		create procedure spDeleteLichDay
		(			
			@IdLichDay			int				
		)
		as
		Begin
			delete from LichDay where IdLichDay= @IdLichDay
		End
		Go

-- 5. Tạo thủ tục hiển thị thông tin học viên đăng ký lớp đào tạo gồm các thông tin sau: Id Học viên, Họ tên, Ngày sinh, Tên lớp đào tạo, Ngày Đăng ký, Số tiền nộp

		create procedure spgetThongTinHocVienDangKyLopDaoTao
		as
		Begin
			select hv.IdHocVien, hv.HoLot+ '  ' + hv.Ten as [Họ và tên], NgaySinh, ldt.TenLopDaoTao, dkldt.NgayDangKy, dkldt.SoTienNop
			from   HocVien hv, DangKyLopDaoTao dkldt, LopDaoTao ldt
			where  hv.IdHocVien		= dkldt.IdHocVien
			and   dkldt.IdLopDaoTao = ldt.IdLopDaoTao			
		end
	Go

-- 6. Tạo thủ tục thêm mới dữ liệu cho bảng Điểm thi tại 2 trường: IdHocVien, IdMonHoc theo tham số là IdLopDaoTao và IdMonHoc
	Go
	create procedure spInsertDiemThiByIdLopDaoTaoIdMonHoc
	(
		@IdLopDaoTao	varchar(5),
		@IdMonHoc		varchar(3) 
	)
	as
	 Begin
			Insert InTo DiemThi(IdHocVien, IdMonHoc)	
			Select hv.IdHocVien, @IdMonHoc from   HocVien hv, DangKyLopDaoTao dkldt
			Where  hv.IdHocVien= dkldt.IdHocVien
			and    dkldt.IdLopDaoTao=@IdLopDaoTao			
	 End
	 /*
		execute spInsertDiemThiByIdLopDaoTaoIdMonHoc @IdLopDaoTao= 'L0001',
													 @IdMonHoc		='M01'
	
	 */

-- 7. Tạo thủ tục xem lịch học theo IdLopDaoTao, gồm các thông tin cần xem: Tên lớp đào tạo, Tên môn học, Họ tên giáo viên, Thời gian bắt đầu, Thời gian kết thúc, Buổi học
	Go
	create procedure spgetXemLichHocByIdLopDaoTao
	(	
		@IdLopDaoTao varchar(5)
	)
	as
	Begin
			select  ldt.TenLopDaoTao, TenMonHoc, HoLot + ' ' + Ten as HoTen, ld.ThoiGianBatDau, ld.ThoiGianKetThuc, ld.BuoiHoc
			from LopDaoTao ldt, LichDay ld, CBGV gv,  MonHoc mh
			where ldt.IdLopDaoTao= ld.IdLopDaoTao
			and   ld.IdCBGV= gv.IdCBGV
			and  ld.IdMonHoc= mh.IdMonHoc
			and  ld.IdLopDaoTao=@IdLopDaoTao		
	End
	Go
	-- drop procedure spgetXemLichHocByIdLopDaoTao

-- 8.Tạo thủ tục dùng để hiển thị các thông tin sau: IdLopDaTao, TenLopDaoTao, IdHocVien, Họ tên, NgaySinh, Tên môn học, 
-- Là đồ án, Điểm chuyên cần, Điểm giữa kỳ, Điểm thi lần 1, Điểm thi lần 2, Điểm thi, DTB, Xếp loại, 
-- mà có Tên lớp đào tạo và tên môn học được nhập từ bàn phím. Lưu ý thông tin này lấy từ view vXepLoai.
	create procedure spgetXepLoai
	(
		@TenLopDaoTao	nvarchar(100),
		@TenMonHoc		nvarchar(100)
	)
	as
	Begin
		select * from vXepLoai where TenLopDaoTao=@TenLopDaoTao and TenMonHoc=@TenMonHoc
	End

	/*
	 execute spgetXepLoai       @TenLopDaoTao=N'Thiết kế đồ họa 1',
								@TenMonHoc= N'Photoshop'

	*/



