const dropdown_menu=document.querySelector('.dropdown');
const news_dropdown_menu=document.querySelector('.news-dropdown');
const news_dropdown_button=document.querySelector('.news-dropdown-btn');
const dropdown_button=document.querySelector('.dropdown-btn');
const up_arrow=document.querySelector('.up');
const down_arrow=document.querySelector('.down');

dropdown_button.addEventListener('click',()=>{
    if (dropdown_menu.style.display =="none"){
        dropdown_menu.style.display="block";

        if(news_dropdown_menu.style.display=="block"){
            news_dropdown_menu.style.display =="none"
        }
        
       
    }
    else{
        dropdown_menu.style.display='none';
      
    }


});


news_dropdown_button.addEventListener('click',()=>{
        if(news_dropdown_menu.style.display=="none"){
            news_dropdown_menu.style.display="block";
            news_dropdown_menu.style.zIndex="2";

            if (dropdown_menu.style.display=="block"){
                news_dropdown_menu.style.display=="none";
            }
        }
        else{
            news_dropdown_menu.style.display="none";
        }
});
