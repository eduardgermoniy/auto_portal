$('#thanks').click(function() {
        $.get('test.php', function(){
            alert('Спасибо за обращение!');
        })
        .fail(function(){
            alert('Произошла ошибка при выполнении запроса. Попытайтесь еще раз!');
        })
});
var flag = true;
$('#hide').click(function(){
    
    if(flag==true){
        $('.table').show();
        $('#hide').html('Скрыть');
        flag=!flag;
    }
    else{
        $('.table').hide();
        $('#hide').html('Показать');
        flag=!flag;
    }
    
    $.getJSON('data.json', function(data){
        $.each(data, function(key, value){
            var table_row = '<tr>' + 
            '<td>' + value.brend + '</td>' +
            '<td>' + value.vendor_code  + '</td>' +
            '<td>' + value.description + '</td>' +
            '<td>' + value.price + '</td>' +
            '<td>' + value.count + '</td>' +
          '</tr>';
            $('#table_content tbody').append(table_row);
        });
        
    });
});

