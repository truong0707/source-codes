

var DataListCardsAudio = 'http://localhost:3000/ListCardAudio'

fetch(DataListCardsAudio)
    .then(function (res) {
        return res.json();
    })
    .then(function (ListDSs) {
        //    console.log(ListDSs)

        var htmlsList = ListDSs.map(function (contents) {
            return `
            <div class="box-Card-List">
                <div class="card List-Cards-Audio"
                  style="width: 18rem; float: left; margin-top: 40px; margin-left: 30px; border-radius: 15px;">
                  <img src= ${contents.IMGAD} style ="height: 20rem" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h3 class="card-title">
                    <b>${contents.nameBookAudio}</b>
                    </h3>
                    <h4 class="card-text">
                    ${contents.CONTENT}
                    </h4>
                    <a href="#" class="btn btn-primary">Đọc Ngay</a>
                  </div>
                </div>
            `
        });

        var html1 = htmlsList.join('');

        document.getElementById('listCardAudio').innerHTML = html1
    })
    .catch(function (err) {
        console.log("err" + err)
    })
