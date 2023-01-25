import React from 'react'
import "./_Florist.scss"
import img1 from "../../media/fl1.jpg"
import img2 from "../../media/fl2.jpg"
const Florist = () => {
  return (
    <div className='floritstSection'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 floristLeft">
                    <h1>Local Florist Just For You</h1>
                    <p>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.</p>
                    <span>Mary Byrd, owner</span>
                    <h3>Mary Byrd</h3>
                </div>
                <div className="col-6 floristRight">
                    <div className='img-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img-2'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Florist