// 4. リクエストが成功した場合、結果を受け取って、画面に表示する

$(function(){

//  検索ボタンがクリックされたら
    $('#search-btn').on('click', function(){

// 入力された郵便番号を取得する  値は.val()

    let searchWord = $('#search-word').val();

    // console.log(searchWord);データが取れているか確認


// ajaxを使って、郵便番号APIにリクエストを送信する
    $.ajax({
// データを通信するところ Endpointという
	url:'http://zipcloud.ibsnet.co.jp/api/search',
	type: 'GET',
	dataType: 'jsonp',
	data: {
        zipcode: searchWord,
        // 必須パラメータこれを入れないと動かない
	}


}).done ( (data) => {
// 通信成功したとき、データが取得できているか確認 JSONPの配列が取れる
    console.log(data);
    // for( item of data.results){

    //     let prefecture = item.address1;

    //     let city = item.address2;

    //     let address = item.address3}

    let prefecture = data.results[0].address1
    let city = data.results[0].address2
    let address = data.results[0].address3

    $('#prefecture').text(prefecture);
    $('#city').text(city);
    $('#address').text(address);



}).fail((error) => {
// 通信失敗したとき



})

});




 




    




});

