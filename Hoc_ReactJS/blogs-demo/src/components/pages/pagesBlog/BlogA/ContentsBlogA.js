import JMGHeaderBlog from "../JMGHeaderBlog";




const contentsBloga = {
    img1: 'http://fruitstt.vn/wp-content/uploads/2021/01/unnamed.png',
    img2: 'http://fruitstt.vn/wp-content/uploads/2021/01/detox-2.jpg',
    img3: 'http://fruitstt.vn/wp-content/uploads/2021/01/detox-chanh-dua-leo-la-bac-ha-1.jpg',
    img4: 'http://fruitstt.vn/wp-content/uploads/2021/01/89eeb7f549b3a0edf9a2.jpg',
}
export default function ContentsBlogA() {

    return (
        <div>
            <JMGHeaderBlog />

            <div className="container contentsBlogA">
                        <h2>Tự làm thức uống detox bằng trái cây tươi cực kỳ hiệu quả</h2>
                        <p>Detox tự làm bằng những nguyên liệu đơn giản đang là xu hướng của khá nhiều người.
                            Uống detox mỗi ngày giúp thanh lọc cơ thể, giảm cân, giải độc, làm đẹp da. Có rất 
                            nhiều công thức detox
                            với những công dụng khác nhau.
                            Cùng Fruits điểm qua những công thức detox dễ làm này nhé..</p>
                        <img className="sizeIMGContentBlogA" src={contentsBloga.img1}></img>


                        <h4>1. Detox chanh và dứa</h4>
                        <p>Dứa và chanh 2 loại trái cây giàu vitamin C,
                            hỗ trợ tăng trao đổi chất làm săn chắc da và giảm thiểu chất béo hiệu quả. Do đo,
                            detox dứa và chanh tươi đem lại khả năng giảm cân vô cùng tốt.</p>
                        <img className="sizeIMGContentBlogA"src={contentsBloga.img2}>
                        </img>
                        <p>Nguyên liệu để làm món detox này khá đơn giản với dứa thái lát và chanh tươi thái mỏng,
                            ngâm khoảng 1 – 2 tiếng trong nước lọc có ngay thức uống giảm cân thần thánh rồi.
                        </p>


                        <h4>2. Detox từ dưa chuột</h4>
                        <p>Detox từ dưa chuột là công thức truyền thống được phổ biến rộng rãi ở những trung tâm 
                            làm đẹp.
                            Dưa chuột là nguyên liệu được sử dụng với vô vàn biến tấu theo ý muốn.
                        </p>
                        <img
                            className="sizeIMGContentBlogA"
                            src={contentsBloga.img3}>
                        </img>
                        <p>
                            Dưa chuột là rau củ giàu vitamin, hợp chất chống viêm, flavonoid,
                            những chất bảo vệ sức khỏe của não. Cách làm detox dưa chuột vô cùng đơn giản. Bạn chỉ cần thái lát dưa chuột tươi,
                            đổ nước và để ngăn mát trong vòng 1-2h. Kết hợp vài lá bạc hà, thêm hương vị nữa nha.
                        </p>


                        <h4>3. Detox chanh, bưởi, bạc hà và dưa chuột</h4>
                        <p>Công thức mang lại hiệu quả giảm cân tốt nhất phải kể đến bưởi, chanh, dưa chuột và lá bạc hà.
                            Đây được đánh giá là món uống thơm ngon và mang lại hiệu quả giảm cân vô cùng hiệu quả.
                        </p>
                        <img
                            className="sizeIMGContentBlogA"
                            src={contentsBloga.img4}>
                        </img>
                        <p>
                            Bưởi giúp đốt cháy mỡ thừa, tiêu hao chất béo nhanh chóng.
                            Trong chanh và dưa chuột có chứa chất chống oxi hóa giúp làm đẹp da, đẹp dáng, cải thiện hệ tiêu hóa.
                            Chỉ với 1 quả chanh, ½ quả bưởi đã bóc vỏ, 1 quả dưa chuột thái mỏng. Đổ lượng nước
                            lọc vừa đủ và thêm vài lá bạc hà để tăng hương vị là xong xuôi một phần nước detox ngon lành rồi.
                        </p>


                    </div>
                    <div className="col-4">
                   
                    </div>
                </div>
    );
}