--drop database QuanLyThuVien_IT19A1B_01
create database QuanLyThuVien_IT19A1B_01
go
use QuanLyThuVien_IT19A1B_01
go
create table t_docgia
(  madg varchar (5) primary key, 
   holot nvarchar(30),
   ten nvarchar(10),
   gioitinh bit , 
   ngaysinh datetime
)
 --nhap du lieu vao
 insert into t_docgia values
 ('001',N'Phan Tấn',N'Khai',1,'2001/09/17'),
 ('002',N'Nguyễn Hoạ',N'Mi',0,'2001/08/18'),
 ('003',N'Trần Văn',N'Khải',1,'2005/05/16'),
 ('004',N'Phan Chu',N'Trinh',0,'2001/03/15'),
 ('005',N'Bùi Thị Thanh',N'Ngân',1,'2001/07/01');
 select *
 from t_docgia
 
 --tao bang
 create table t_sach
 (masach varchar(5), 
  tensach nvarchar(40),
  tentg nvarchar(50), 
  soluong int
  )

  --nhap du lieu cho t_sach
  insert into t_sach values
  ('001',N'Không Làm Mà Đòi Có Ăn',N'Huấn Hoa Hồng',30),
  ('002',N'Chiêu Trò Kinh Doanh',N'Phan Thị Lan',20),
  ('003',N'Làm Giàu Không Khó',N'Lý Văn Lan',15),
  ('004',N'Ăn Không Ngồi Rồi',N'Phan Tấn Khai',40),
  ('005',N'Đạo Lý',N'Lí Thị Lan',30);

  select *
  from t_sach
 create table t_muon
 (
  madg varchar(5),
  masach varchar(5),
  ngaymuon datetime ,
  soluong int , 
 ngayhethan datetime
 )

 insert into t_muon values
 ('001','111','2020/09/12',20,'2020/11/10'),
  ('002','112','2020/09/12',10,'2020/11/10'),
   ('003','114','2020/09/12',15,'2020/11/09'),
    ('004','115','2020/09/12',30,'2020/11/08'),
	 ('005','116','2020/09/12',20,'2020/11/07');

	 select * from t_muon

	 select dg.madg, count(s.masach) as soluong
	 from t_docgia dg , t_muon m , t_sach s
	 where dg.madg = m.madg
	  and m.masach = s.masach
	  group by dg.madg , dg.holot , dg.ten


	  create trigger trigger delete
	  on t_muon
	  for delete
	  as
	  Begin
	  rollack tranation 
	  end
