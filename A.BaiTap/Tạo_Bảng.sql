use master
if exists (select name from sys.databases	where name='QuanLyThuVien')
		drop database QuanLyThuVien     -- xóa database
Go
		create database QuanLyThuVien    -- tạo database
Go
		use QuanLyThuVien                -- chọn database QuanLyThuVien
Go
create table t_docgia
(
  madg varchar (5) primary key,
  holot nvarchar(30),
  ten nvarchar(10), 
  gioitinh bit , 
  ngaysinh datetime
)

create table t_sach
(
     masach varchar(5) primary key, 
     tensach nvarchar(40),
    tentg nvarchar(50),
    soluong int
)
create table t_muon
(
    madg varchar(5),
    masach varchar(5),
   ngaymuon datetime ,
    soluong int , 
   ngayhethan datetime
)
    insert into t_docgia values
	('001',N'Nguyễn',N' An',1,'2001/10/09'),
	('002',N'Lê',N' Thanh',1,'2001/10/09'),
	('003',N'Phan',N' Khai',1,'2001/10/09'),
	('004',N'Bùi',N' Ngân',0,'2001/10/09'),
	('005',N'Liêu',N' Vũ',1,'2001/10/09');
	select * from t_docgia

	insert into t_sach values
	('001',N'Lập Trình Web',N'Nguyễn Văn Lĩnh',20),
	('002',N'Mạng Máy Tính',N'Nguyễn Văn Luyện',20),
	('003',N'English',N'Nguyễn Thảo Nguyên',20),
	('004',N'CSDL',N'Nguyễn Văn Lợi',20),
	('005',N'Java',N'Lý Văn Lan',20);
	select *
	from t_sach

	insert into t_muon values
	('001','112','2020/10/19','3','2020/10/30'),
	('002','113','2020/10/19','2','2020/10/30'),
	('003','114','2020/10/19','4','2020/10/30'),
	('004','115','2020/10/19','1','2020/10/30'),
	('005','116','2020/10/19','5','2020/10/30');
	select *
	from t_muon


	

				