import JMGHeaderBlog from "./JMGHeaderBlog";
import Input from "./BlogB/Imput";
import CardList from "../CardList";
import CardList2 from "../CardList2";
import Toggle from "./BlogB/ToggleBlog";
import { Container } from "react-bootstrap"
import './Blog.css'
import CardBlog from "./CardBlog";


const ListContentBlogA = [
    {
        "id": 1,
        "date": "Date: 20/06/2001",
        "titles": "Tự làm thức uống detox bằng trái cây tươi cực kỳ hiệu quả",
        "img": "http://fruitstt.vn/wp-content/uploads/2021/01/cong_thuc_detox_giam_can_chanh_mam_xoi.jpg",
        "contents": "Detox tự làm bằng những nguyên liệu đơn giản đang là xu hướng của khá nhiều người. Uống detox mỗi ngày giúp thanh lọc cơ thể, giảm cân, giải độc, làm đẹp da....",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 2,
        "date": "Date: 21/06/2001",
        "titles": "Xoài – Chứa nhiều chất chống oxy hóa để làm trẻ hóa làn da",
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/05d48f3a-trai-cay-giau-vitamin-e-5.jpg",
        "contents": "Xoài là loại quả thơm ngon, bổ dưỡng nên rất được nhiều người yêu thích. Bên cạnh đó, hàm lượng Vitamin E dồi dào ... ",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 3,
        "date": "22/06/2001",
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "titles": "Even the all-powerful Pointing has no control about the blind texts",
        "contents": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 4,
        "date": "23/06/2001",
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/71d6bae5-trai-cay-giau-vitamin-e.jpg",
        "titles": "Kiwi – Cải thiện làn da tươi sáng",
        "contents": "Mỗi quả kiwi cung cấp khoảng 1,1mg Vitamin E cho cơ thể. Bên cạnh đó, kiwi còn được biết đến là rất giàu Vitamin C, kali, chất xơ và nhiều loại calo khác nhau...",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "date": "Date: 24/06/2001",
        "id": 5,
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/140f3093-trai-cay-giau-vitamin-e-4.jpg",
        "titles": "Quả bơ – bí mật giảm cân thon gọn của chị em",
        "contents": "Quả bơ từ lâu đã được xếp vào danh sách các loại thực phẩm cung cấp nguồn Vitamin E dồi dào và lành mạnh...",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },


]


const ListContentBlogB = [
    {
        "id": 1,
        "date": "Date: 20/06/2001",
        "titles": "Even the...",
        "img": "https://tse3.mm.bing.net/th?id=OIP.s5zIckc53My5uXD5EH-TAQHaFj&pid=Api&P=0&w=235&h=176",
        "contents": "Far far away,...",
        "class": "card mb-3 Card2",

    },

    {
        "id": 2,
        "date": "Date: 21/06/2001",
        "titles": "Even the...",
        "img": "https://tse4.mm.bing.net/th?id=OIP.nQVVzePVbc6SMNjI8hsuRAHaE6&pid=Api&P=0&w=278&h=185",
        "contents": "Far far away,... ",
        "class": "card mb-3 Card2",
    },

    {
        "id": 3,
        "date": "22/06/2001",
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "titles": "Even the...",
        "contents": "Far far away ",
        "class": "card mb-3 Card2",
    },

]




export default function Blog() {

    return (
        <Container fluid>

            <JMGHeaderBlog />

            <div className="Blog">
                <div className="row">
                    <div className="col-md-8">
                        <div className="col">
                            {ListContentBlogA.map(ListContentBlogA => (
                                <CardBlog
                                    key={ListContentBlogA.id}
                                    class={ListContentBlogA.class}
                                    titles={ListContentBlogA.titles}
                                    date={ListContentBlogA.date}
                                    img={ListContentBlogA.img}
                                    contents={ListContentBlogA.contents}
                                    spaceCard={ListContentBlogA.spaceCard}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="container ">
                            <h4>Lời nói đầu:</h4>
                            <Toggle />
                            <Input />

                            <h4>Categories</h4>
                            <CardList />

                            <div className="CardBlogB">
                                <h4 className="TitleBoxB">Recent Blog</h4>
                                {ListContentBlogB.map(ListContentBlogB => (
                                    <CardBlog
                                        key={ListContentBlogB.id}
                                        class={ListContentBlogB.class}
                                        titles={ListContentBlogB.titles}
                                        date={ListContentBlogB.date}
                                        img={ListContentBlogB.img}
                                        contents={ListContentBlogB.contents}
                                    />
                                ))}
                            </div>

                            <h4 className="TitleBoxB">Tag Cloud</h4>
                            <CardList2 />
                            <h4 className="TitleBoxB">Paragraph</h4>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut,
                                sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>

                        </div>
                    </div>
                </div>

            </div>



        </Container>
    );
}