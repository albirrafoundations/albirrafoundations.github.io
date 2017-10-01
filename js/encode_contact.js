// Email.js version 5

function email(id,dom,ext){
    document.write('<a href="mailto:'+id+'@'+dom+'.'+ext+'"style="text-decoration:none;color:inherit;"><i class="fa fa-envelope-o"></i>'+' '+id+'@'+dom+'.'+ext+'</a>');
    }
function call(code,operator,num){
    document.write('<a href="tel:'+code+operator+num+'" style="text-decoration:none;color:inherit;"> <i class="fa fa-phone"></i>'+' '+code+' '+operator+' '+num+'</a>');
}
function whatsapp(code,operator,num,text){
    document.write('<a href="https://api.whatsapp.com/send?phone='
                    +code+operator+num+'&text='+text
                    +'" style="text-decoration:none;color:inherit;" target="_blank">'+
                    '<i class="fa fa-whatsapp"></i> </a>');
    }

