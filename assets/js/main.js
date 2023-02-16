
$(function(){


    // Gestion de clic menu hamburger

    let ouvrir_menu = $("#ouvrir-menu");
    let fermer_menu = $("#fermer-menu");
    let liste_menu = $('.contenu-menu ul');

    ouvrir_menu.on('click',function(e){
        e.preventDefault();
        ouvrir_menu.css('display','none');
        fermer_menu.css({"display":"block"});
        liste_menu.css({"display": "flex", "flex-direction":"column", "justify-content":"center"});
        
    })

    
    fermer_menu.on('click',function(e){

        e.preventDefault();
        fermer_menu.css('display','none');
        liste_menu.css('display','none'); 
        ouvrir_menu.css('display','block');
    });

    // Appel de plus de categories au clic sur "plus"


    let plus = $("#plus-de-categories");
    let liste = $('.liste-categories');
    let categ_avant_clic = $("#cat a").length;

    let i = 0;


    plus.on('click', function(e){ 

        e.preventDefault(); 
        ajaxCategories();
        
    })

    function ajaxCategories(){
        $.ajax(
            {
                url:'/categ',
                method:'GET',
                dataType:'json',

                success: function(data){

                    liste.empty();

                    if(i==data.length){
                        for(i=0; i<data.length-categ_avant_clic; i++){

                            let li = $(`<li id="cat"><a href="#">${data[i].nom}</a></li>`);
                            liste.append(li);
                        } 
                    }else{
                        
                        for(i=categ_avant_clic; i<data.length; i++){

                            let li = $(`<li id="cat"><a href="#">${data[i].nom}</a></li>`);
                            liste.append(li);

                        }
                    }

                }
            }
        )
    }

    // Test JQuery UI

    $('.main-container p').draggable();
    // var test = ["hello", "salut", "yambu", "hola", "jambo"];

    
    $('.cp').autocomplete({
        source: function(request, response){
            $.ajax({
                
                url: 'https://www.odwb.be/api/records/1.0/search/?dataset=code-postaux-belge&q',
                method:'GET',
                dataType: 'json',

                data:{ 
                   
                    q: request.term,
                
                },

                success: function(data){

                    let subdata = [];
                    let result = "";
                    let obj = {push:function push(element){ [].push.call(this,element)}};

                    for(cle in data.records){

                        switch(true){
                            case parseInt(data.records[cle].fields.column_1) >= 1000 && parseInt(data.records[cle].fields.column_1) < 1300:
                                result = "Bruxelles";
                                break;
                            case parseInt(data.records[cle].fields.column_1) >= 1300 && parseInt(data.records[cle].fields.column_1) < 1500:
                                result = "Brabant wallon";
                                break;
                            case parseInt(data.records[cle].fields.column_1) >= 1500 && parseInt(data.records[cle].fields.column_1) < 2000:
                                result = "Brabant flamand";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 2000 && parseInt(data.records[cle].fields.column_1) < 3000:
                                result = "Anvers";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 3000 && parseInt(data.records[cle].fields.column_1) < 3500:
                                result = "Brabant flamand";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 3500 && parseInt(data.records[cle].fields.column_1) < 4000:
                                result = "Limbourg";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 4000 && parseInt(data.records[cle].fields.column_1) < 5000:
                                result = "Liège";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 5000 && parseInt(data.records[cle].fields.column_1) <= 5680:
                                result = "Namur";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 6000 && parseInt(data.records[cle].fields.column_1) < 6600:
                                result = "Hainaut";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 6600 && parseInt(data.records[cle].fields.column_1) < 7000:
                                result = "Luxembourg";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 7000 && parseInt(data.records[cle].fields.column_1) < 8000:
                                result = "Hainaut";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 8000 && parseInt(data.records[cle].fields.column_1) < 9000:
                                result = "Flandre occidentale";
                            break;
                            case parseInt(data.records[cle].fields.column_1) >= 9000 && parseInt(data.records[cle].fields.column_1) < 10000:
                                result = "Flandre orientale";
                            break;
                            default:
                                result = "c'est à côté de la Belgique";
                            break;
                        }
                       obj.push({codep: data.records[cle].fields.column_1+" "+data.records[cle].fields.column_2, commune: data.records[cle].fields.column_2, province: result});

                        
                    }

                    subdata.push(obj);
                    console.log(subdata);

                    response($.map(subdata[0], function(item){
                        return {
                            label: item.codep,
                            comm: item.commune,
                            prov: item.province
                        }
                    }));

                },
              
            })
        },
        select: function(event, ui){
            
            $('.commune').val(ui.item.comm);
            $('.localite').val(ui.item.prov);
            
        }
       
    })

 
})