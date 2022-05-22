import CardBody1 from "../Card1Body/CardBody1";



const List1Blog = [
    {
        "id": 1,
        "text": "Even ",
        "img": "https://tse3.mm.bing.net/th?id=OIP.s5zIckc53My5uXD5EH-TAQHaFj&pid=Api&P=0&w=235&h=176",
        "cmt": "Far far away,.",
    },

    {
        "id": 2,
        "text": "Even  texts",
        "img": "https://tse4.mm.bing.net/th?id=OIP.nQVVzePVbc6SMNjI8hsuRAHaE6&pid=Api&P=0&w=278&h=185",
        "cmt": "Far far away there live the blind texts.",
    },

    {
        "id": 3,
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "text": "Even texts",
        "cmt": " there live the blind texts.",


    },
    {
        "id": 4 ,
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "text": "Even texts",
        "cmt": " there live the blind texts.",


    },


]



export default function CardBody2B() {

    return (
        <div className="">
            <div className="TitleCardBody2B">
                <div><h4>Recent Blog</h4></div>
            </div>


            <div>
                <div className="Box2bBody">
                    <div className="col">
                        {List1Blog.map(List1Blog => (
                            <CardBody1
                                key={List1Blog.id}
                                text={List1Blog.text}
                                img={List1Blog.img}
                                cmt={List1Blog.cmt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>






    );
}