use QuanLyHocVien_IT19A1A
Go
--1.  Tạo mã tự động cho trường IdMonHoc
-- Cách 1
-- drop function fcgetIdMonHoc

create function fcgetIdMonHoc()
returns varchar(3)
as
Begin
			declare @IdMonHoc varchar(3)
			declare @Max int

		

			if exists(select * from MonHoc)   
				select @Max= Convert(int, right(MAX(IdMonHoc),2)) + 1  from MonHoc				 			
			else
				set @Max= 1


			if (@Max <10)
				set @IdMonHoc= 'M0' + CONVERT(varchar(1), @Max)
			else
				set @IdMonHoc= 'M' + CONVERT(varchar(2), @Max)
			return @IdMonHoc
End
Go
-- Gọi lại
 select IdMonHoc= dbo.fcgetIdMonHoc()

 select * from MonHoc

go
-- drop function fcgetIdMonHoc2

-- Cách 2
create function fcgetIdMonHoc2()
returns varchar(3)
as
Begin
		declare @value varchar(3);
		select @value= right(isnull(MAX(IdMonHoc),0),2)+ 1 from MonHoc;		
		set @value= 'M' + Replicate('0',2-LEN(@value))+@value;
		RETURN @value;
End
Go
-- Gọi lại
      select IdMonHoc= dbo.fcgetIdMonHoc2()


	Go
	-- Gọi lại fcgetIdMonHoc()
	--   	select IdMonHoc= dbo.fcgetIdMonHoc()
	-- Xóa function fcgetIdMonHoc
	--     DROP function fcgetIdMonHoc
--2. Tạo mã tự động cho IdLop
create function fcgetIdLopDaoTao()
returns varchar(5)
as
Begin
	declare @IdLopDaoTao varchar(5)
	declare @Max int
	if exists(select * from LopDaoTao)   
		select @Max= Convert(int, substring(MAX(IdLopDaoTao),2,4)) + 1 from LopDaoTao
	else
		 set @Max= 1
	if (@Max <10)
			set @IdLopDaoTao= 'L000' + CONVERT(varchar(1), @Max)
	else
		if (@Max <100)
			set @IdLopDaoTao= 'L00' + CONVERT(varchar(2), @Max)
		else
			if (@Max <1000)
				set @IdLopDaoTao= 'L0' + CONVERT(varchar(3), @Max)
			else
				set @IdLopDaoTao= 'L' + CONVERT(varchar(4), @Max)
		return @IdLopDaoTao
	End
	
	Go
	-- Gọi lại fcgetIdLopDaoTao()
	--   	select IdLop= dbo.fcgetIdLopDaoTao()
	
	--3. Tạo mã tự động cho IdGiaoVien
	create function fcgetIdCBGV()
	returns varchar(3)
	as
	Begin
			declare @IdCBGV varchar(3)
			declare @Max int
			if exists(select * from CBGV)    
				select @Max= Convert(int, MAX(IdCBGV)) + 1 from CBGV
			else
				 set @Max= 1
			if (@Max <10)
					set @IdCBGV= '00' + CONVERT(varchar(1), @Max)
			else
				if (@Max <100)
					set @IdCBGV= '0' + CONVERT(varchar(2), @Max)
				else
					set @IdCBGV= CONVERT(varchar(3), @Max)					
				return @IdCBGV
	End
	
	Go
	-- Gọi lại fcgetIdCBGV()
	--   	select IdGiaoVien= dbo.fcgetIdCBGV()
	-- Xóa function fcgetIdCBGV()
	-- drop function fcgetIdCBGV()
	