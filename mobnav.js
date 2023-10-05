
 $subnav = $("#subnav")
 $menu = $("#menu")
 $closebtn = $("#close")

$menu.on("click", () => {
   $subnav.animate({
       "height": "40vh"
   }, 1000)
})

$closebtn.on("click", () => {
   $subnav.animate({
       "height": "0"
   }, 1000)
}) 
