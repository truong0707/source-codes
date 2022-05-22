	--drop database QuanLyVanTu_01
	create database QuanLyVanTu_01
	go
	use QuanLyVanTu_01
	go
	 create table t_vattu
	 (
	 Mavt varchar(5) primary key,
	 tenvt nvarchar (50),
	 dvt nvarchar (10),
	 soluong int,
	 dongia float
	 )
	 --nhap du lieu
	 insert into t_vattu values 
	 ('001',N'Xi Măng','Bao',10,20000),
	 ('002',N'Ống Nước','M',20,30000),
	 ('003',N'Ốc',N'Cái',30,10000),
	 ('004',N'Gạch',N'Viên',100,100),
	 ('005',N'Tấm Tôn',N'Miếng',10,20000);
	

	--select * from t_vattu
	--delete  from t_vattu

	 create table t_khachhang
	 (
	 Makh varchar (5) primary key,
	 holot nvarchar (30),
	 ten nvarchar (10),
	 ngaysinh datetime,
	 gioitinh bit ,
	 diachi nvarchar (50)
	 )
	  --nhap du lieu
	  insert into  t_khachhang values
	  ('112',N'Nguyễn Tường',N'Quang','2001/10/06',1,N'35 Hồ Nguyên Chánh'),
	   ('113',N'Liêu Anh',N'Vũ','2001/11/09',1,N'Ngũ Hành Sơn'),
	    ('114',N'Nguyễn Thanh',N'Trường','2001/06/19',1,N'37 Trường Chinh'),
		 ('115',N'Lê Hồng Minh',N'Tuấn','2001/12/12',1,N'Khu Công Nghiệp Hoà Cầm'),
		  ('116',N'Nguyễn Văn',N'Sơn','2001/10/18',1,N'06 Lê Sát');

		  --select * from t_khachhang
		 --delete from t_khachhang
		    
         create table t_banhang
		 (
		 Sophieu varchar(5) primary key,
		 ngayban datetime ,
		 soluong int,
		 mavt varchar (5),
		 makh nvarchar (5)
		 )

		 --nhap du lieu

		 insert into t_banhang values
		 ('01','2020/10/06',20,'001','112'),
		 ('02','2020/11/01',10,'002','113'),
		 ('03','2020/10/07',15,'003','114'),
		 ('04','2020/10/05',30,'004','115'),
		 ('05','2020/11/02',25,'005','116');

		 --select * from t_banhang
		 --delete from t_banhang