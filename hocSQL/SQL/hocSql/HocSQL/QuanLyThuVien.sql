use master
create database QuanLyThuVien
Go
use QuanLyThuVien
create table t_docgia
(
   madg nvarchar(5) primary key,
   holot nvarchar(30),
   ten  nvarchar(10),
   gioitinh bit,
   ngaysinh datetime,
)
Go
insert into t_docgia values
      ('001',N'Thanh',N'Truong',1,'2001/01/03'),
	  ('002',N'Nguyen Van ',N'Son',0,'2001/01/03'),
	  ('003',N'Lieu',N'Vu',0,'2001/01/03'),
	  ('004',N'Bui',N'thang',1,'2001/01/03'),
	  ('005',N'Nguyen',N'Quang',1,'2001/01/03');
SELECT * From t_docgia
Go
create table t_sach
(
   masach nvarchar(5) primary key,
   tensach nvarchar(40),
   tentg nvarchar(50),
   soluong int,
)
Go
insert into t_sach values
            ('001',N'Gioi Tinh','Son',10),
			('002',N'Do hoa','Thang',7),
			('003',N'Lap Trinh','Quang',5),
			('004',N'Bay Lac','Truong',9),
			('005',N'Truyen Ma','Vu',0);
select *
from t_sach