--Bai2--\
--drop database QuanLyVatTu
use master
create database QuanLyVatTu
Go
use QuanLyVatTu
create table t_VatTu
(
  Mavt varchar(5) primary key,
  tenvt nvarchar(50),
  dvt nvarchar(10),
  soluong int,
  dongia float,
)
Go
insert into t_VatTu values
     ('001',N'Xi Măng',N'bao',20,10000),
     ('002',N'Gạch',N'viên',500,50000),
     ('003',N'Sạn',N'xe',20,300000),
     ('004',N'cát',N'xe',20,100000);
Select * from t_VatTu
go
--delete from t_khachhang

create table t_khachhang
(
     Makh       varchar(5) primary key,
     holot      nvarchar(30),
     ten        nvarchar(10),
     ngaysinh   datetime,
     gioitinh   bit,
     diachi     nvarchar(50)
)
insert into t_khachhang values
       ('001',N'Thanh',N'Trường','2001/06/19',1,N'Khuê Trung'),
       ('002',N'Viết',N'Thành','2001/04/14',0,N'Quảng Nô'),
       ('003',N'Văn',N'Sơn','2001/01/12',1,N'Quảng Ngãi'),
       ('004',N'Tường',N'Quan','2001/12/10',1,N'C.Lệ'),
       ('005',N'Anh',N'Vũ','2001/02/10',1,N'K.Tom'),
       ('006',N'Đức',N'Thắng','2001/06/11',1,N'B.Định');


select * from t_khachhang



create table t_banhang
(
  sophieu varchar(5) primary key,
  ngayban datetime,
  soluong int,
  mavt varchar(5),
  makh nvarchar(5)
)
insert into t_banhang values
       ('001','2020/01/05','10','001','005'),
	   ('002','2020/10/05','10','002','004'),
	   ('003','2020/06/05','10','003','002'),
	   ('004','2020/04/05','10','004','001'),
	   ('005','2020/01/05','10','005','003');
    
select * from t_banhang
delete from t_banhang
