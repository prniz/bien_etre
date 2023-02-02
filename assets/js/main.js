
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
    var test = ["hello", "salut", "yambu", "hola", "jambo"];

    
    $('.cp').autocomplete({
        source: test
    })

    $.ajax({

        url: 'https://www.odwb.be/api/records/1.0/search/?dataset=code-postaux-belge&q=&rows=-1&sort=column_1&facet=column_1&facet=column_2',
        method:'GET',
        dataType: 'json',

        success : function(data){
       
            
            // let codes = data.facet_groups[0].facets;

            for(cle in data.records){

                // recuperation des codes codes postaux via API url ci-dessus

                let cp = data.records[cle].fields.column_1;
                let commune = data.records[cle].fields.column_2;

                console.log(cp+" - "+commune);
            }

        }

    })

  
});