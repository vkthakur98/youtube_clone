//Javascript youtube clone//

console.log("Javascript executed Succesfully");

const short_videos = 
[
    {
        sno:0,
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765125512/JavaScript__THIS__keyword_in_1_Minute_shorts_stw4ec.mp4",
    }
    ,
    {
        sno:1,
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765125495/How_to_do_barbell_curls_a8osld.mp4",
    }
    ,
    {
        sno:2,
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765121864/This_Advanced_Flexbox_Trick_Is_Amazing_cibvdu.mp4",
    }
]

const videos = 
[
    {
        sno:"0",
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765215312/video_za5xs3.mp4",
        thumbnail:"./video-images/coding.webp",
        video_title:"Coding video with typing|Javascript|Web Developer code",
        sdesc:"Vivek Codes .934K views . 2 days ago"
    },
    {
        sno:"1",
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765215236/588729407_mhjwd0.mp4",
        thumbnail:"./video-images/yoga.jpg",
        video_title:"Girl doing yoga for better health code",
        sdesc:"Yoga se hoga . 1.3M views . 1 month ago"

    },
    {
        sno:"2",
        video_src:"./videos/Video.mp4",
        thumbnail:"./video-images/coding.webp",
        video_title:"Coding video with autmated scrolling code" ,
        sdesc:"Vivek Codes .934K views . 2 days ago"
    },
    {
        sno:"3",
        video_src:"./videos/How to use GitHub _ What is GitHub _ Git and GitHub Tutorial _ DevOps Training _ Edureka.mp4",
        thumbnail:"./video-images/Edureka.jpg",
        video_title:"How to use GitHub _ What is GitHub _ Git and GitHub Tutorial code",
        sdesc:"Edureka .934K views . 2 days ago" 
    },
    {
        sno:"4",
        video_src:"https://res.cloudinary.com/dewqecuha/video/upload/v1765048828/55._CURRENT_TIMESTAMP_IN_SQL_-_Difference_between_CURRENT_TIMESTAMP_GETDATE_FUNCTION_m999mf.mp4",
        thumbnail:"./video-images/sql.jpg",
        video_title:"CURRENT TIMESTAMP IN SQL - Difference between CURRENT_TIMESTAMP & GETDATE () FUNCTION",
        sdesc:"YourYoutubeGuru .934K views . 2 days ago" 
    }
]


let video_div ;
let video_parent = document.getElementById("videos-sub-id");
let video_parent_S = document.getElementById("videos-sub-id_S");
for(let i =0;i<videos.length;i++)
{
    let video_div = document.createElement("div");
    let img = document.createElement("img");
    let div_cpdc = document.createElement("div");
    let div_cp = document.createElement("div");
    let img_cp  = document.createElement("img");
    img_cp.setAttribute("height",35);
    img_cp.setAttribute("width",35);
    let div_desc = document.createElement("div");
    let spanm = document.createElement("span");
    let spans = document.createElement("span");
    video_div.setAttribute("vname",videos[i].video_title);
    video_div.setAttribute("sno",i);
    // video_div.setAttribute("cname",videos[i]);
    img.setAttribute("src",videos[i].thumbnail);
    img.setAttribute("height","200px");
    img.setAttribute("width","100%");
    spanm.innerHTML=videos[i].video_title;
    spans.innerHTML = videos[i].sdesc;
    spanm.classList.add("main-desc");
    spans.classList.add("sub-desc");
    let br  = document.createElement("BR");
    div_desc.appendChild(spanm);
    div_desc.appendChild(br);
    div_desc.appendChild(spans); 
    img_cp.setAttribute("src",videos[i].thumbnail);
    div_cp.appendChild(img_cp);
    div_cpdc.appendChild(div_cp);
    div_cpdc.appendChild(div_desc);
    div_cpdc.classList.add("channel-pic-desc-container");
    div_cp.classList.add("channel-profile-pic");
    video_div.appendChild(img);
    video_div.appendChild(div_cpdc);  
    video_div.classList.add("video");
    video_div.setAttribute("src",videos[i].video_src);
    video_parent.appendChild(video_div);
}

for(let i =0;i<videos.length;i++)
{
    let video_div = document.createElement("div");
    video_div.setAttribute("sno",i);
    let img = document.createElement("img");
    let div_cpdc = document.createElement("div");
    let div_cp = document.createElement("div");
    let img_cp  = document.createElement("img");
    img_cp.setAttribute("height",35);
    img_cp.setAttribute("width",35);
    let div_desc = document.createElement("div");
    let spanm = document.createElement("span");
    let spans = document.createElement("span");
    img.setAttribute("src",videos[i].thumbnail);
    img.setAttribute("height","200px");
    img.setAttribute("width","100%");
    spanm.innerHTML=videos[i].video_title;
    spans.innerHTML = videos[i].sdesc;
    spanm.classList.add("main-desc");
    spans.classList.add("sub-desc");
    let br  = document.createElement("BR");
    div_desc.appendChild(spanm);
    div_desc.appendChild(br);
    div_desc.appendChild(spans); 
    img_cp.setAttribute("src",videos[i].thumbnail);
    div_cp.appendChild(img_cp);
    div_cpdc.appendChild(div_cp);
    div_cpdc.appendChild(div_desc);
    div_cpdc.classList.add("channel-pic-desc-container");
    div_cp.classList.add("channel-profile-pic");
    video_div.appendChild(img);
    video_div.appendChild(div_cpdc);  
    video_div.classList.add("video");  
    video_div.setAttribute("src",videos[i].video_src);
    video_parent_S.appendChild(video_div);
}


let iconsclasses = ["fa fa-thumbs-up","fa fa-thumbs-down","fa fa-comment","fa fa-share","fa fa-repeat"];
for(let i =0;i<short_videos.length;i++)
{
    let shortsongimg = document.createElement("img");
    let backicon = document.createElement("i");
    backicon.setAttribute("class","fa fa-arrow-left backicon"); 
    shortsongimg.setAttribute("class","short-song-img");
    shortsongimg.setAttribute("src","./shorts-image/Screenshot_2023-08-06-20-22-44-71_40deb401b9ffe8e1df2f1cc5ba480b12.jpg");
    let icons = [];
    for(let i = 0;i<=5;i++)
    {
        icons[i] = document.createElement("i");
        icons[i].setAttribute("class",iconsclasses[i]);
    }
    let overlay_short_div_right = document.createElement("div");
    icons.forEach((elem)=>{
        overlay_short_div_right.appendChild(elem);
    })
    overlay_short_div_right.appendChild(shortsongimg);
    overlay_short_div_right.setAttribute("class","overlay-short-div-right");
    let overlay_short_div_wrap  = document.createElement("div");
    overlay_short_div_wrap.setAttribute("class","overlay-short-div-wrap");
    let channelname = document.createElement("span");
    let channelimg = document.createElement("img");
    let short_title = document.createElement("p");
    short_title.innerHTML = "Use of this keyword in javascript #this #javascript";
    channelname.innerHTML = "@vivekcodes";
    channelimg.setAttribute("height",30);
    channelimg.setAttribute("width",30);
    channelimg.setAttribute("src","./shorts-image/Screenshot_2023-08-06-20-22-44-71_40deb401b9ffe8e1df2f1cc5ba480b12.jpg");
    let overlay_short_div = document.createElement("div");
    let subscribe_btn = document.createElement("button");
    subscribe_btn.innerHTML = "Subscribe";
    overlay_short_div.appendChild(channelimg);
    overlay_short_div.appendChild(channelname);
    overlay_short_div.appendChild(subscribe_btn);
    overlay_short_div.setAttribute("class","overlay-short-div");
    let video_div = document.createElement("div");
    let video = document.createElement("video");
    video_div.appendChild(backicon);
    video.setAttribute("src",short_videos[i].video_src);
    video.setAttribute("id","shortv"+[i]);
    video.setAttribute("class","shortvid")
    video.setAttribute("type","video/mp4");
    video.muted = false;
    video.loop = true;
    video.setAttribute("vindex",[i]);
    video_div.setAttribute("class","shortvideo");
    overlay_short_div_wrap.appendChild(overlay_short_div);
    overlay_short_div_wrap.appendChild(short_title);
    video_div.appendChild(overlay_short_div_wrap);
    video_div.appendChild(overlay_short_div_right);
    video_div.appendChild(video);
    document.querySelector(".short-video-player").appendChild(video_div);    
}

let overlay_status = false;
let video_overlay = document.getElementsByClassName("overlay-video")[0];
let video_controls = document.getElementsByClassName("video-controls")[0];
let timer;
window.addEventListener("click",(e)=>{
   if(e.target===video_overlay || e.target===video_controls)
   {
        if(e.detail===1)
        {
            timer = setTimeout(()=>{
                if(!overlay_status)
                {
                     video_overlay.style.opacity="1";
                     overlay_status=true;
                     setTimeout(()=>{video_overlay.style.opacity="0";overlay_status=false;},2500)
                }
                
                else{
                 video_overlay.style.opacity="0";
                 overlay_status=false;
                } 
            },
            200
        )      
   }
    }

    if(e.target===side_menu_wrap)
    {
        side_menu_wrap.style.display="none";
    }

    if(e.target===document.querySelector(".settings-main"))
    {
        document.querySelector(".settings-main").style.display="none";
    }

    if(e.target === document.querySelector(".playback-speed-main"))
    {
        document.querySelector(".settings-main").style.display="none";
        document.querySelector(".playback-speed-main").style.display="none";
    }
})




window.addEventListener("dblclick",(e)=>{
    if(e.target===video_overlay || e.target===video_controls)
    {
        clearInterval(timer);
    if(e.pageX>180)
    {
        let ctime = document.querySelector("#video-player-src").currentTime;
        ctime=ctime+10;
        document.querySelector("#video-player-src").currentTime=ctime;
        document.getElementsByClassName("foreward")[0].style.display="flex";
        setTimeout(() => {
        document.getElementsByClassName("foreward")[0].style.display="none";
        }, 5000);
    }
    else{
        let ctime = document.querySelector("#video-player-src").currentTime;
        ctime=ctime-10;
        document.querySelector("#video-player-src").currentTime=ctime;
        document.getElementsByClassName("backward")[0].style.display="flex";
        setTimeout(() => {
        document.getElementsByClassName("backward")[0].style.display="none";
        }, 200);
    }

}
    
})
let playing = false;
let play_pause_btn = document.querySelector("#video-play-pause-btn");
play_pause_btn.addEventListener("click",()=>{
    if(!playing)
    {
    document.querySelector("#video-player-src").play();
    play_pause_btn.classList.add("fa-pause");
    play_pause_btn.classList.remove("fa-play");
    play_pause_btn.classList.remove("fa-rotate-right");
    video_overlay.style.opacity="0";
    playing=true;
    }

    else{
    document.querySelector("#video-player-src").pause();
    play_pause_btn.classList.add("fa-play");
    play_pause_btn.classList.remove("fa-pause");
    playing=false;
    }
})

let videoELement = document.querySelector("#video-player-src");
seekbar = document.getElementsByClassName("progress-bar")[0];
seekbarcircle = document.getElementsByClassName("progress-bar-seeker")[0];
videoELement.addEventListener("timeupdate",()=>{
    let videoplayed = parseInt((videoELement.currentTime/videoELement.duration*100));
            seekbar.style.width = videoplayed+"vw";
            seekbarcircle.style.left = videoplayed+"vw";
    if(videoELement.currentTime===videoELement.duration)
    {
        video_overlay.style.opacity="1";
        play_pause_btn.classList.add("fa-rotate-right");
        play_pause_btn.classList.remove("fa-pause");    
        playing=false;    
    }
});

let player_close = document.getElementById("close-player");
player_close.addEventListener("click",()=>{
    let vid_src = document.getElementById("video-player-src").getAttribute("src");
    let vid_title = document.querySelector(".video-title").innerHTML;
    let channel_name = document.querySelector(".channel-name").innerHTML;
    document.querySelector("#mini-channel-name").innerHTML = channel_name;
    document.querySelector("#mini-video-title").innerHTML = vid_title;
    document.getElementById("mini-player-video").setAttribute("src",vid_src);
    document.getElementsByClassName("player-suggestion")[0].style.display="none";
    document.getElementsByClassName("fixed-footer")[0].style.display="block";
    let mctime = document.getElementById("video-player-src").currentTime;
    document.getElementById("mini-player-video").currentTime = mctime;
    if(playing)
    {
    document.getElementById("mini-player-video").play();
    }
    else{
    document.getElementById("mini-player-video").pause(); 
    }     
    document.getElementById("video-player-src").pause();
    document.querySelector(".mini-player").style.display="flex";  
})

document.getElementById("video-player-src").onloadeddata=()=>{
    document.querySelector(".overlay-video-loading").style.display="none";
}

var videosno;
let allvideos  = Array.from(document.getElementsByClassName("video"));
allvideos.forEach((element)=>{
    element.addEventListener("click",()=>{
        let src = element.getAttribute("src");
        let sno = element.getAttribute("sno");            
        document.getElementsByClassName("player-suggestion")[0].style.display="block";
        document.getElementsByClassName("fixed-footer")[0].style.display="none";
        document.getElementById("video-player-src").setAttribute("src",src);
        document.getElementById("video-player-src").setAttribute("sno",sno);
        document.getElementById("video-player-src").play();
        playing=true;
        videosno = document.getElementById("video-player-src").getAttribute("sno");
        console.log(videosno);
        document.querySelector("#video-play-pause-btn").classList.add("fa-pause");
        document.querySelector("#video-play-pause-btn").classList.remove("fa-play");
        document.getElementById("mini-player-video").pause();
        document.querySelector(".mini-player").style.display="none";
        document.getElementsByClassName("overlay-video-loading")[0].style.display="block"
        document.querySelector(".video-title").innerHTML = element.getAttribute("vname");
        document.querySelector(".channel-name").innerHTML = "Vivek Codes";
        document.getElementById("video-play-pause-btn").classList.remove("fa-rotate-right");
    })
})

let rightarraows = document.getElementsByClassName("r-foreward");
    let i=0;
    function changeBackground()
    {
        let prev;
        // console.log(i);
        if(i<=2)
        {
        rightarraows[i].style.color="white";
        }
        else
        {
            i=0;
            rightarraows[2].style.color="rgba(255,255,255,.3)";
            rightarraows[i].style.color="white";
        }
        if(i>0)
        {
            prev=i-1;
            rightarraows[prev].style.color="rgba(255,255,255,.3)";
        }
        i=i+1;
    }

    let close_mini_player = document.querySelector(".fa-times");
    let pause_mini_player = document.querySelector(".fa-pause");
    setInterval(changeBackground,500);    
    document.querySelector(".mini-player").addEventListener("click",function(e){ 
         if(e.target === close_mini_player)
         {
            document.getElementById("mini-player-video").pause();
            document.querySelector(".mini-player").style.display="none";
         }
        else if(e.target === pause_mini_player)
         {
            if(!playing)
    {
    document.querySelector("#mini-player-video").play();
    pause_mini_player.classList.add("fa-pause")
    pause_mini_player.classList.remove("fa-play")
    playing=true;
    }

    else{
    document.querySelector("#mini-player-video").pause();
    pause_mini_player.classList.add("fa-play");
    pause_mini_player.classList.remove("fa-pause");
    playing=false;
    }
         }
         else{
        document.querySelector(".player-suggestion").style.display="block";
        let mini_ctime =  document.getElementById("mini-player-video").currentTime;
        document.getElementById("video-player-src").currentTime=mini_ctime;
        this.style.display="none";
      if(playing)
      {
      document.getElementById("video-player-src").play();
      document.getElementById("video-play-pause-btn").classList.add("fa-pause");
      document.getElementById("video-play-pause-btn").classList.remove("fa-play");
      }
      else{
        document.getElementById("video-play-pause-btn").classList.add("fa-play");
        document.getElementById("video-play-pause-btn").classList.remove("fa-pause");
        }
      document.getElementById("mini-player-video").pause();
    }
     })

     let side_menu_wrap  = document.querySelector(".side-menu-wrap");

     document.querySelector("#explorer-btn").addEventListener("click",()=>{
        side_menu_wrap.style.display="block";        
     })

var settings_main = document.querySelector(".settings-btn");
settings_main.addEventListener("click",()=>{
    document.querySelector(".settings-main").style.display="flex";
})


let subscribe_btn = document.querySelector(".subscribe-btn");
subscribe_btn.addEventListener("click",()=>{
   document.querySelector(".subscribe-btn").style.display="none";
   document.querySelector(".after-subscribe-btn").style.display="block";
   document.querySelector(".notification-wrap").style.display="flex"; 
   setTimeout(()=>{
   document.querySelector(".notification-wrap").style.display="none"; 
   },3500);
})

document.querySelector(".playback-speed").addEventListener("click",()=>{
   document.querySelector(".playback-speed-main").style.display="flex";
})

let playback_speeds = Array.from(document.querySelectorAll(".playback-speed-item"));
playback_speeds.forEach((element)=>{
    element.addEventListener("click",()=>{
       document.getElementById("video-player-src").playbackRate = element.getAttribute("pspeed");
      let icon =  document.getElementById(element.getAttribute("pspeed")+"icon");
    let picon = Array.from(document.getElementsByClassName("picon"));
        for(let i = 0;i<picon.length;i++)
        {
            picon[i].classList.remove("fa-check");
        }
        icon.classList.add("fa-check");
        document.querySelector(".settings-main").style.display="none";
        document.querySelector(".playback-speed-main").style.display="none";
        document.querySelector("#current-p-speed").innerHTML = element.getAttribute("pspeed")+"x";
        if(element.getAttribute("pspeed")==1)
        {
        document.querySelector("#current-p-speed").innerHTML = "Normal"        }
    })
})

// let s = 0;
// let y = 100;
// if(ev.type == "press")
//     {
//         document.getElementsByClassName("shortvideo")[s].style.transform="translateY(-"+y+"%)";
//         document.getElementsByClassName("shortvideo")[s+1].style.transform="translateY(-"+y+"%)";
//         s = s+1;
//         y = y+100;
//     } 

let s = 0;
let y = 100;
let startY,endY;
    window.addEventListener("touchstart",(e)=>{
    startY = e.touches[0].clientY;
    })

    let shorts = Array.from(document.getElementsByClassName("shortvideo"));
    let tvalue = -100,shortindex=1;
   
    let backicon = document.getElementsByClassName("backicon");

    document.querySelector(".short-video-player").addEventListener("touchstart",(e)=>{
        if(e.target === backicon[0]||backicon[1]||backicon[2])
        {

        }
        else{
        e.preventDefault();
        }
  
    })

    document.querySelector(".short-video-player").addEventListener("touchend",(e)=>{
        if(e.target === backicon[0]||backicon[1]||backicon[2])
        {

        }
        else{
        e.preventDefault();
        }
  
    })
    
    shorts.forEach((elem)=>{
        elem.addEventListener("touchend",(e)=>{
        if(e.target === backicon[0]||backicon[1]||backicon[2])
        {

        }
        else{
        e.preventDefault();
        }
           
            endY = e.changedTouches[0].clientY;
            let scrolledDiff = startY-endY;
            if(scrolledDiff>0)
            {
                if(shortindex===1)
                {
                    document.getElementsByClassName("shortvideo")[0].style.transform="translateY(-100%)";
                    document.getElementsByClassName("shortvideo")[1].style.transform="translateY(-100%)";
                    document.getElementsByClassName("shortvideo")[2].style.transform="translateY(-100%)";
                }
                if(shortindex===2)
                {
                    document.getElementsByClassName("shortvideo")[0].style.transform="translateY(-200%)";
                    document.getElementsByClassName("shortvideo")[1].style.transform="translateY(-200%)";
                    document.getElementsByClassName("shortvideo")[2].style.transform="translateY(-200%)";
                }
                
                document.getElementById(`shortv${shortindex}`).play();
                    document.getElementById(`shortv${shortindex-1}`).pause();
                    document.getElementById(`shortv${shortindex-1}`).currentTime=0;
            shortindex = shortindex +1;
            }  
              
            else if(scrolledDiff == 0)
            {
               
               //nothing to do
            }
   
            else
            {
                console.log(shortindex);
                if(shortindex===1)
                {
                    //nothing to do//
                }
                if(shortindex===2)
                {
                    document.getElementsByClassName("shortvideo")[0].style.transform="translateY(0%)";
                    document.getElementsByClassName("shortvideo")[1].style.transform="translateY(0%)";
                    document.getElementsByClassName("shortvideo")[2].style.transform="translateY(0%)";
                }
                if(shortindex===3)
                {
                    document.getElementsByClassName("shortvideo")[0].style.transform="translateY(-100%)";
                    document.getElementsByClassName("shortvideo")[1].style.transform="translateY(-100%)";
                    document.getElementsByClassName("shortvideo")[2].style.transform="translateY(-100%)";
                }
                document.getElementById(`shortv${shortindex-1}`).pause();
                document.getElementById(`shortv${shortindex-1}`).currentTime=0;
                document.getElementById(`shortv${shortindex-2}`).play();
                shortindex = shortindex-1;            
            }
           })
    })
     
 let shorttobeplayed = Array.from(document.getElementsByClassName("short"));
 shorttobeplayed.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        document.getElementsByClassName("short-video-player")[0].style.display="block";
        let vidsrc = elem.getAttribute("vidsrc");
        document.querySelector("#shortv0").setAttribute("src","./videos/"+vidsrc);
        document.querySelector("#shortv0").play();
        document.getElementsByClassName("fixed-footer")[0].style.backgroundColor="#262626";
        document.getElementsByClassName("fixed-footer-sub")[0].style.color="white";
        let ficon = document.getElementsByClassName("ficon");
        for(let i =0;i<ficon.length;i++)
        {
            ficon[i].style.color="white";
        }
    })
 })

backicon = Array.from(document.getElementsByClassName("backicon"));
backicon.forEach((elem,i)=>{
    elem.addEventListener("click",()=>{
        document.querySelector(".short-video-player").style.display="none";
        document.getElementsByClassName("fixed-footer")[0].style.backgroundColor="white";
        document.getElementsByClassName("fixed-footer-sub")[0].style.color="black";
        let ficon = document.getElementsByClassName("ficon");
        for(let i =0;i<ficon.length;i++)
        {
            ficon[i].style.color="black";
        }

        for(let i=0;Array.from(document.getElementsByClassName("shortvid")).length;i++)
        {
            document.getElementsByClassName("shortvid")[i].pause();
        }

        
    })
})

document.querySelector(".ad-btn").addEventListener("click",()=>{
    window.location.href="https://vivek-s-portfolio-three.vercel.app/";
})

let previousSong = document.querySelector(".previoussong");
previousSong.addEventListener("click",()=>{

    document.querySelector(".overlay-video-loading").style.display="block";    
    prevsrc = videos[videosno-1].video_src;
    document.querySelector("#video-player-src").setAttribute("src",prevsrc);
    document.querySelector("#video-player-src").play();
    videosno = videosno-1;
    document.getElementById("video-player-src").onloadeddata=()=>{
        document.querySelector(".overlay-video-loading").style.display="none";
    }
});

let nextSong = document.querySelector(".nextsong");
nextSong.addEventListener("click",()=>{
    document.querySelector(".overlay-video-loading").style.display="block";    
    nextsrc = videos[++videosno].video_src;
    document.querySelector("#video-player-src").setAttribute("src",nextsrc);
    document.querySelector("#video-player-src").play();
    videosno = videosno++;
    document.getElementById("video-player-src").onloadeddata=()=>{
        document.querySelector(".overlay-video-loading").style.display="none";
    }
});

document.querySelector("#searchkey").addEventListener("keyup",(e)=>{
    
    if(e.target.value=="")
    {
        document.querySelector(".search-suggestion").innerHTML="";
    }
    else
    {
    videos.filter((vid)=>{
        if(vid.video_title.match(e.target.value))
        {
            let icon = document.createElement("i");
            let icon2 = document.createElement("i");
            icon.setAttribute("class","fa fa-search");
            icon2.setAttribute("class","fa fa-external-link");
            let s_suggest_wrap = document.createElement("div");
            s_suggest_wrap.setAttribute("class","suggestion-div-wrap");
            let s_suggest = document.createElement("p");
            s_suggest.innerHTML = vid.video_title;
            s_suggest_wrap.appendChild(icon);
            s_suggest_wrap.appendChild(s_suggest);
            s_suggest_wrap.appendChild(icon2);
            document.querySelector(".search-suggestion").appendChild(s_suggest_wrap);
        }
    });
    }
})

document.querySelector(".backicon-search").addEventListener("click",()=>{
    document.querySelector(".search-div").style.display="none";
})

document.querySelector(".search-btn").addEventListener("click",()=>{
    document.querySelector(".search-div").style.display="block";
})