$(document).ready(function(){

    // Gestion de clic menu hamburger

    let ouvrir_menu = $("#ouvrir-menu");
    let fermer_menu = $("#fermer-menu");
    let liste_menu = $('.contenu-menu ul');

    ouvrir_menu.click(function(e){
        e.preventDefault();
        ouvrir_menu.css('display','none');
        fermer_menu.css({"display":"block"});
        liste_menu.css({"display": "flex", "flex-direction":"column", "justify-content":"center"});
        
    })

    
    fermer_menu.click(function(e){

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


    plus.click(function(e){ 

        e.preventDefault();

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
    })
  
});