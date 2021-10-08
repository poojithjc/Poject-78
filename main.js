var images=[
    "https://i.pinimg.com/474x/87/b8/3b/87b83ba77a10a1d3313ed7872918524d--father-kind.jpg",
    "https://lh3.googleusercontent.com/proxy/yijSdwmVBks_FTsxKhYAO7FOrjSpYOT0sdA_sd7ZqaeJEQjAQ2zvGQLvT6LrXD0B3P_I9VF17T9lofdbXyc943Td" ,
    "https://cdn3.vectorstock.com/i/1000x1000/70/62/happy-cute-cartoon-little-girl-with-pigtails-vector-29277062.jpgsa" ,
];
var i = 0;
function nextslide() {

    if(i == 3)
{

    i=0
}
document.getElementById("album").src=images[i];i++
}
