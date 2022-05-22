     use QuanLyHocVien_IT19A1B
     Go
    create procedure spNguyenCBGV
(    @IdCBGV			varchar(3), --tham số---
						@HoLot		    nvarchar(50),
						@Ten			nvarchar(20),
						@NgaySinh		datetime,
						@DienThoai		varchar(15),
						@Email			varchar(50)
)
as
  Begin
     insert into CBGV values(@IdCBGV, @HoLot, @Ten,	@NgaySinh, @DienThoai, @Email)
  End

  execute spNguyenCBGV @IdCBGV='007' ,
                                    @HoLot=N'Nguyễn Thanh',
												@Ten      = 'Trường',
												@NgaySinh ='2001/06/19',
												@DienThoai='0707241906',
												@Email='thanhtruong@gmail.com'
   Go
     create procedure spThanhCBGV
(                       @IdCBGV			varchar(3),
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
     execute spThanhCBGV     @IdCBGV='006',
													@HoLot=N'Nguyễn Thanh',
													@Ten      = 'Truong',
													@NgaySinh ='2001/06/19',
													@DienThoai='0905123333',
													@Email='anh@gmail.com'
 Go
 go
 select * from CBGV
 go
      create procedure spDeleteCBGV
				(
					@IdCBGV varchar(3)
				)
				as
				Begin
					delete from CBGV where IdCBGV =@IdCBGV
				End
go

     create procedure spInsertDangNhap
				(
					@IdDangNhap varchar(3),
					@MatKhau	varchar(255)
				)
				as
				Begin
					insert into DangNhap values(@IdDangNhap,@MatKhau)
				End
go