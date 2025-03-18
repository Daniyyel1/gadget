import styled from "styled-components";

export const NavWrapper = styled.nav`



.navLinks a:hover{
   border-bottom: 2px solid #C06B3E ;
}

.searchInput{
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transform: translate3d(0, 20px, 0);
  -webkit-transform: translate3d(0, 20px, 0);
  visibility: hidden;
  opacity: 0;
  font-weight: 800;
  border-top: 2px solid orange;
}

.searchInput input{
  font-weight: 400;
  font-size: 13px;
}

.searchInput input::placeholder{
  font-weight: 550;
}

.searchInput.open{
  visibility: visible;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1;
  z-index:1;
}

@media screen and (max-width:960px){
  
}

`

export const BannerWrapper = styled.section`
.info{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding: 5px;
  transform: translate3d(0, 20px, 0);
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1;
  pointer-events: auto;
}

.info img{
  height: 50px;
  width: 50px;
  animation: zoom 4s infinite;
}

@keyframes zoom{
  0%{
      transform:scale(1);
  }

  50%{
      transform:scale(1.2);
  }

  100%{
      transform:scale(1);
  }

}

`

export const CarouselWrapper = styled.section`
  /* padding-block:50px;
    max-width:1000px;
    height: 650px;
    margin:auto; */
 
.carousel{

    opacity:1;
}

.slide{
   width:100%;
   height:450px;
   object-fit:contain;
   transition:.4s ease-out;
   
}
 
.animation{
  /* opacity:1 ; */
  /* transition: .3s ease-in-out */
}

 .slide-hidden{
  /* display:none; */
   position:absolute;
   opacity: 0;
 }

 .arrow{
    position:absolute;
    width:2rem;
    height:2rem;
    color:#fff;
    cursor: pointer;
}

.arrow:hover{
    background-color: lightgrey;
}

.arrow-right{
    right:1rem;
    color:#fff;
    font-size:32px;
    height:40px;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:gray;
    border-radius:50%; 
}

.arrow-right:active{
     transform:translateX(10px);
     transition:.1s ease-in;

}

.arrow-left{
    left:1rem;
    font-size:32px;
    height:40px;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background-color:gray;
    transition:prev .3s ease-in forwards;
}



.arrow-left:active{
    transform:translateX(-10px);
    transition:.1s ease-in;
}

@keyframes next1{
     from{
        left: 0%;
     }

      to{
        left: 100%;
      }
}

/* @keyframes next2{
    from{
        left: 100%;
    }

    to{
        left: 0%;
    }
} */

@keyframes prev{
    from{
        left: -100%;
    }

    to{
        left: 0%;
    }
}

.indicators{
    position:absolute;
    display:flex;
    bottom: 8px;
    gap:4px;
    cursor: pointer;
}
.indicator{
    height:15px;
    border-radius:7px;
    background-color:#372f28;
    transition: .5s ease-in;
    width: 40px;
}

.indicator-active{
    background-color:#fff;
    height:15px;
    width:15px;
    border-radius:50%;
}
`
export const DiscoverWrapper = styled.section`
`

export const FooterWrapper = styled.section`
.links{
  line-height:35px;
  color:#eae5dd;
}

.icon span{
  border:1px solid#ded7c4 ;
  height:30px;
  width:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
}
`