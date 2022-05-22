---Các kiểu dữ liệu hay dùng

-- int: Kiểu số nguyên, (tập hợp N). 
-- float: Kiểu số thực, tập hợp R .
-- char : Kiểu kí tự. (Độ nhớ cấp phát cứng) 

     -- Ví dụ : a, b, f. char(10) --> 10 ô nhớ này không ai được đụng vào
	     --Luôn dữ 10 ô nhớ , không viết tiếng việt được
-- varchar : Kiểu kí tự. (Bộ nhớ cấp phát động)

     -- Ví dụ : varchar(10) --> 10 ô nhớ chỉ được lấy khi có dữ liệu nằm bên trong 
	     --"Kteam" -> chỉ dùng 5 ô nhớ , không viết tiếng việt được

--nchar : kiểu kí tự, có thể lưu tiếng việt được.
--nvarchar: kiểu kí tự cấp phát động có thể lưu tiếng việt đc
-- date: Lưu trữ ngày, tháng, năm, giờ.
-- time: Lưu trữ giờ phút giây...
-- but: Lưu giá trị 0 và 1
-- text: Lưu văn bản lớn
-- ntext: Lưu văn bản lớn có tiếng việt


-- declare : khai bao bien
-- set : ->> gắn giá trị
--tinh tong phai co group by





--Bài1:
 -- Cho cơ sở dữ liệu QuanLyThuVien gồm các bảng dữ liệu sau:
 --t_docgia gồm các thuộc tính: madg varchar(5), holot nvarchar(30),
 --   ten nvarchar(10),  gioitinh bit, ngaysinh datetime.
 --   Trong đó: madg là khóa chính
 --tsach gồm các thuộc tính: masachh varchar(5), tensach nvarchar(40),
 --                          tentg nvarchar(50), soluong int,
 --   Trong đó: masach là khóa chính; soluong >==0.
 --t_muon gồm các thuộc tính: madg varchar(5), masach varchar(5),
 --  ngaymuon datetime, soluong int, ngayhentra datetime.
 --Trong đó:  + madg, masach là khóa chính
 --            + madg, masach là hai khóa ngoại đc tham chiếu đến hai
 --             bằng tương ứng t_docgia va t_sach

 --Yêu cầu :
 --1.Sử dụng Create table để tạo cấu trúc cho 3 bảng dữ liệu trên.
 --2 Tạo các thủ tục để thêm, sửa, xóa dữ liệu cho 3 bảng dữ liệu trên.
 ---Mỗi thủ tục phải có tham số tương ứng với các thuộc tính của bảng.
--Tạo trigger kiểm tra tích hợp lệ về việc thêm dữ liệu vào bảng t_muon.
--Tính hợp lệ được quy ước: ngày hẹn trả - ngày mượn <== 7