import CardKHCBHome from "./CardKHCBHome";
import CardKHNCHome from "./CardKHNCHome";
import SearchKHCBHome from "./SearchKHCBHome";

const ListKHCB = [
    {
        "id": 1,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://i0.wp.com/muachungtool.com/wp-content/uploads/2021/04/reactjs-content.jpg?resize=1020%2C574&ssl=1",

    },

    {
        "id": 2,
        "khoahocCB": "Flluter",
        "status": "Miễn phí",
        "imgs": "https://codefresher.vn/wp-content/uploads/2021/01/flutter.jpg",

    },

    {
        "id": 3,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://funix.edu.vn/wp-content/uploads/2021/11/s%E1%BB%AD-d%E1%BB%A5ng-ng%C3%B4n-ng%E1%BB%AF-l%E1%BA%ADp-tr%C3%ACnh-JavaScript-1-870x490.jpeg"
    },

    {
        "id": 4,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://techtalk.vn/wp-content/uploads/2018/08/61b54964-ae6b-46a0-8ff8-b2eba54672ac-696x436.jpg"
    },

/*     {
        "id": 5,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://tuhocict.com/wp-content/uploads/2020/06/Python-programming-language-feature-image-1024x576.jpg"
    },

    {
        "id": 6,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://lh6.googleusercontent.com/3pZat0DiRqwxjOFC7ARmDn3T9SbXtFhK2ddCPY-8_1XwqQA7FOi6zHbohcigMeXywW-fOmD1gztl_OwM9lBmssn4uA3xFKLthpS62OLMUsUxRhDpMOcz-AUmS7QM7gHYQSCu3HqM"
    },

    {
        "id": 7,
        "khoahocCB": "ReactJS",
        "status": "Miễn phí",
        "imgs": "https://blog.itnavi.com.vn/uploads/2020/07/Vuejs-l%C3%A0-g%C3%AC-1.jpg"
    },

    {
        "id": 8,
        "khoahocCB": "HTML/CSS",
        "status": "Miễn phí",
        "imgs": "https://codefresher.vn/wp-content/uploads/2019/12/539660_27d6_7-750x422.jpg"
    }, */


]


const ListKHNC = [
    {
        "id": 1,
        "khoahocNC": "React Nâng Cao",
        "status": "Tốn phí",
        "imgs": "https://i0.wp.com/muachungtool.com/wp-content/uploads/2021/04/reactjs-content.jpg?resize=1020%2C574&ssl=1",
        "price": "1.000.000VNĐ",
    },

    {
        "id": 2,
        "khoahocNC": "Flluter Nâng Cao",
        "status": "Tốn phí",
        "imgs": "https://codefresher.vn/wp-content/uploads/2021/01/flutter.jpg",
        "price": "1.500.000VNĐ",

    },

    {
        "id": 3,
        "khoahocNC": "JavarScript Nâng Cao",
        "status": "Tốn phí",
        "imgs": "https://funix.edu.vn/wp-content/uploads/2021/11/s%E1%BB%AD-d%E1%BB%A5ng-ng%C3%B4n-ng%E1%BB%AF-l%E1%BA%ADp-tr%C3%ACnh-JavaScript-1-870x490.jpeg" ,
        "price": "1.200.000VNĐ",
    },

    {
        "id": 4,
        "khoahocNC": "NodeJS",
        "status": "Tốn phí",
        "imgs": "https://techtalk.vn/wp-content/uploads/2018/08/61b54964-ae6b-46a0-8ff8-b2eba54672ac-696x436.jpg",
        "price": "1.600.000VNĐ",
    },

/*     {
        "id": 5,
        "khoahocNC": "Python",
        "status": "Tốn phí",
        "imgs": "https://tuhocict.com/wp-content/uploads/2020/06/Python-programming-language-feature-image-1024x576.jpg",
        "price": "1.300.000VNĐ",
    },

    {
        "id": 6,
        "khoahocNC": "Java",
        "status": "Tốn phí",
        "imgs": "https://lh6.googleusercontent.com/3pZat0DiRqwxjOFC7ARmDn3T9SbXtFhK2ddCPY-8_1XwqQA7FOi6zHbohcigMeXywW-fOmD1gztl_OwM9lBmssn4uA3xFKLthpS62OLMUsUxRhDpMOcz-AUmS7QM7gHYQSCu3HqM",
        "price": "2.000.000VNĐ",
    },

    {
        "id": 7,
        "khoahocNC": "Vue",
        "status": "Tốn phí",
        "imgs": "https://blog.itnavi.com.vn/uploads/2020/07/Vuejs-l%C3%A0-g%C3%AC-1.jpg",
        "price": "950.000VNĐ",
    },

    {
        "id": 8,
        "khoahocNC": "ReactJS",
        "status": "Tốn phí",
        "imgs": "https://codefresher.vn/wp-content/uploads/2019/12/539660_27d6_7-750x422.jpg",
        "price": "700.000VNĐ",
    },
 */

]

export default function BodyHome() {

    return (
        <div className="bodyHome"><h1 className="title-bodyhome">Các Khóa Học Cơ Bản</h1>
            <div className="col">
                <SearchKHCBHome />
            </div>
            <div className="bodyHomeA">
                <div className="row ">
                    {
                        ListKHCB.map(ListKHCB => (
                            <CardKHCBHome
                                key={ListKHCB.id}
                                khoahocCB={ListKHCB.khoahocCB}
                                status={ListKHCB.status}
                                imgs={ListKHCB.imgs}

                            />
                        ))
                    }
                </div>
            </div>
          
            <div className="bodyHomeB">
            <h1 className="title-bodyhome">Các Khóa Học Nâng Cao</h1>
                <div className="row ">
                    {
                        ListKHNC.map(ListKHNC => (
                            <CardKHNCHome
                                key={ListKHNC.id}
                                khoahocNC={ListKHNC.khoahocNC}
                                status={ListKHNC.status}
                                imgs={ListKHNC.imgs}
                                prices={ListKHNC.price}

                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}