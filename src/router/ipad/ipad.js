import React from 'react'
import "./ipad.css"
function Ipad() {

let user = [
  {
    id:"p-1",
    img: "https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
    new:"New",
    pro:"iPad Pro",
    new1:"The ultimate iPad exprience with the most advanced technology.",
    pro1:"From $799",
    btn:"Buy",
    btn1:"Learn more",
    vivo:`12.9" or 11"`,
    by:"Liquid Retina XDR display or Liquid Retina display",
    by1:"ProMotion technology",
    by2:"P3 wide color",
    by3:"Antireflective coating"

  },
  {
    id:"p-2",
    img:"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
    new:"New",
    pro:"iPad Air",
    new1:"Serious performance in a thin and light design.",
    pro1:"From $599",
    btn:"Buy",
    btn1:"Learn more",
    vivo:`10.9"`,
    by:"Liquid Retina  display",
    by1:"-",
    by2:"P3 wide color",
    by3:"Antireflective coating"

  },
  {
    id:"p-3",
    img:"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png",
    new:"New",
    pro:"iPad",
    new1:"The all-new colorful iPad for the things you do every day. ",
    pro1:"From $499",
    btn:"Buy",
    btn1:"Learn more",
    vivo:`10.9"`,
    by:"Liquid Retina display",
    by1:"-",
    by2:"sRGB color",
    by3:"-"

  },
  {
    id:"p-4",
    img:"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
    new:"New",
    pro:"iPad",
    new1:"All the essentials inthe most affordable iPad.",
    pro1:"From $329",
    btn:"Buy",
    btn1:"Learn more",
    vivo:`110.2"`,
    by:"Retina display",
    by1:"-",
    by2:"sRGB color",
    by3:"-"

  },
  {
    id:"p-5",
    img:"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_mini__czcsk9ukpeie_small_2x.png",
    new:"New",
    pro:"iPad mini",
    new1:"The full iPad expresience designed to fit in one hand.",
    pro1:"From $499",
    btn:"Buy",
    btn1:"Learn more",
    vivo:`8.3"`,
    by:"Liquid Retina display",
    by1:"-",
    by2:"P3 wide color",
    by3:"Antireflective coating"

  },
]

let con = [
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/476x267.jpg"
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/476x267.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/gift_card/apple_gift_card_tile__cytpkh5opjqu_small.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/icloud__czqjzr040qc2_small.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/ipados16__9t47xpd66wiq_small.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/why_ipad__fyckwbl8w5u2_large.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/ipad_for_education__rvh8drp6mfma_small.jpg"
   
  },
  {
    pro:"pro-1",
    name:"Fitness+",
    get:"Get 3 months free",
    get1:"when you buy an iPad.",
    buy:"Learn more",
    buy1:"Shop iPad",
    photo:"https://www.apple.com/v/ipad/home/cd/images/overview/ipad_for_business__dg81h7gvgbyq_small.jpg"
   
  },
]










  return (
    <div>
      <div className="ipad__banner">

      </div>


      <div className="ipad__banner1">
        <h1>iPadOS 16 </h1>
        <b>Icredibly capble. Unmistakably iPad. </b>
        <br />
        <button className='ipad__btn'>Learn more</button>
      </div>
<div className="ipad__div">
<br />
      <div className="ipad__banner2">
        <br />
        <h1 className='ipad__which'>Which iPad is right for you? </h1>
        <br />
        <button className='ipad__btn1'>Compare all iPad models</button>
        <button className='ipad__btn'>Shop iPad</button>

       <div className="ipad__good">
{
  user?.map((d, inx) =>   <div key={inx} className="ipad__card">
  <div className="ipad__img"><img src={d.img} alt="" /></div>
  <h6 className='ipad__new'>{d.new}</h6>
  <h1 className='ipad__pro'>{d.pro}</h1>
  <p className='ipad__new1'>{d.new1}</p>
  <p className='ipad__pro1'>{d.pro1}</p>
  <button className='ipad__pro2'>{d.btn}</button>
  <br />
  <button className='ipad__pro3'>{d.btn1}</button>
  <hr />
  <h2 className='card__vivo'>{d.vivo}</h2>
  <p className='ipad__by'>{d.by}</p>
  <p className='ipad__by'>{d.by1}</p>
  <p className='ipad__by'>{d.by2}</p>
  <p className='ipad__by'>{d.by3}</p>
</div>)
}

     
       
       </div>

      </div>

   
<div className="ipad__mountain"> 
<br />
<h1>Accessories</h1>
<p>Explore cases , covers, keyboards,</p>
<p> Apple Pencil, AirPods, and more.</p>
<button className='ipad__btn0'>Shop iPaid Accessories</button>
<br />

<img src="https://www.apple.com/v/ipad/home/cd/images/overview/accessories__gdpezee1naai_large.jpg" alt="" />
</div>

<div className="ipad__carry">

{
  con?.map((del, look) =>  <div key={look} className="ipad__map">
  <h1>{del.name}</h1>
  <p>{del.get}</p>
  <p>{del.get1}</p>
  <button className='ipad__btn'>{del.buy}</button>
  <button className='ipad__btn'>{del.buy1}</button>
  <img className='ipad__photo' src={del.photo} alt="" />
</div>)
}


 
</div>


</div>
    </div>
  )
}

export default Ipad