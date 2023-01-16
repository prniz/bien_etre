$(document).ready(function(){
    let ouvrir_menu = $("#ouvrir-menu");
    let fermer_menu = $("#fermer-menu");
    let liste_menu = $('ul');

    ouvrir_menu.click(function(e){
        e.preventDefault();
        ouvrir_menu.css('display','none');
        fermer_menu.css({"display":"block","text-align":"right"});
        liste_menu.css({"display":"block","padding-top":"250px"});
        
    })

    
    fermer_menu.click(function(e){

        e.preventDefault();
        fermer_menu.css('display','none');
        liste_menu.css('display','none'); 
        ouvrir_menu.css('display','block');
    });
  
});