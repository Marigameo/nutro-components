import React, { useState } from 'react'
import styles from './style.module.css'
import {AiOutlineStar } from 'react-icons/ai'
import one from './Images/gold.jpg'
import two from './Images/multi.jpg'
import three from './Images/purple.jpg'
import four from './Images/red.jpg'
import five from './Images/white.jpg'
import six from './Images/gold.jpg'

function Gallery() {

    const [menu,setMenu] = useState("best")

    const [bestseller,setbestseller] = useState(
        [
            {
                img:one,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
            {
                img:two,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
            {
                img:three,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
            {
                img:four,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
            {
                img:five,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
            {
                img:six,
                brand:"Saravana",
                title:"SaravanaBhavan",
                oldprice:"$44000",
                price:"$4000"
            },
        ]
    )
    const [toprate,settoprate] = useState(
        [
            {
                img:four,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
            {
                img:six,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
            {
                img:five,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
            {
                img:two,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
            {
                img:three,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
            {
                img:one,
                brand:"Mariyapan",
                title:"Mari Gameo",
                oldprice:"$74000",
                price:"$4000"
            },
        ]
    )

    const [topsales,settopsales] = useState(
        [
            {
                img:six,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
            {
                img:five,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
            {
                img:four,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
            {
                img:three,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
            {
                img:two,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
            {
                img:one,
                brand:"Karthick",
                title:"SaravanaKarthick",
                oldprice:"$48000",
                price:"$4000"
            },
        ]
    )


    const handlemenu = (val) =>
    {
        setMenu(val)
    }

    return (
          <>
          <div>
              <ul className = {styles.conbtn}>
                  <li className = {menu =="best"?`${styles.active}`:null} onClick = {()=>handlemenu("best")}>BEST SELLER</li>
                  <li className = {menu =="toprate"?`${styles.active}`:null} onClick = {()=>handlemenu("toprate")}>TOP RATE</li>
                  <li className = {menu =="topsales"?`${styles.active}`:null} onClick = {()=>handlemenu("topsales")}>TOP SALES</li>
              </ul>
              <div className = {styles.detailcontainer}>
                {menu == "best"?  
                <>
              { bestseller.map((x, index) => {
                return (
                <div className = {styles.container}>
                  <div >
                    <img src = {x.img} alt = "img" className = {styles.cardimg}/>
                  </div>
                  <div className = {styles.details}>
                    <p className = {styles.brand}>BRAND : {x.brand}</p>
                    <div className = {styles.rating}>
                      <AiOutlineStar color="#ffc107" />
                      <AiOutlineStar color="#ffc107" />
                      <AiOutlineStar color="#ffc107" />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                    <h2 className = {styles.brandname}>{x.title}</h2>
                    <div className = {styles.rate}>
                    <h6 className = {styles.old}>{x.oldprice}</h6>
                    <h3 className = {styles.price}>{x.price}</h3>
                    </div>
                  </div>

              </div>
                )
            })}
            </>
            :menu == "toprate"?
            <>
            { toprate.map((x, index) => {
              return (
            <div className = {styles.container}>
                <div >
                  <img src = {x.img} alt = "img" className = {styles.cardimg}/>
                </div>
                <div className = {styles.details}>
                  <p className = {styles.brand}>BRAND : {x.brand}</p>
                  <div className = {styles.rating}>
                    <AiOutlineStar color="#ffc107" />
                    <AiOutlineStar color="#ffc107" />
                    <AiOutlineStar color="#ffc107" />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                  <h2 className = {styles.brandname}>{x.title}</h2>
                  <div className = {styles.rate}>
                  <h6 className = {styles.old}>{x.oldprice}</h6>
                  <h3 className = {styles.price}>{x.price}</h3>
                  </div>
                </div>

            </div>
              )
          })}
          </>
          :
          <>
          { topsales.map((x, index) => {
            return (
            <div className = {styles.container}>
              <div >
                <img src = {x.img} alt = "img" className = {styles.cardimg}/>
              </div>
              <div className = {styles.details}>
                <p className = {styles.brand}>BRAND : {x.brand}</p>
                <div className = {styles.rating}>
                  <AiOutlineStar color="#ffc107" />
                  <AiOutlineStar color="#ffc107" />
                  <AiOutlineStar color="#ffc107" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h2 className = {styles.brandname}>{x.title}</h2>
                <div className = {styles.rate}>
                <h6 className = {styles.old}>{x.oldprice}</h6>
                <h3 className = {styles.price}>{x.price}</h3>
                </div>
              </div>
            </div>
            )
          })}
        </>
        }
              
              </div>
              
             
          </div>
          </>
    )
}

export default Gallery
