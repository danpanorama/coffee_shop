import '../../../css/home.css'
import '../../../css/media.css'

import images from '../../../tablealma.jpg'
import salad from '../../../imgsalad.jpg'
import img1 from '../../../IMG_0275.jpg'

import img2 from '../../../IMG_6639.JPG'







import {useDispatch,useSelector} from "react-redux";



function Homesection() {

  const user =  useSelector((state)=>state.user);


  return (
  <div className="sec d_flex_col cool">

      <div className="wid_webwid d_flex_col">


            <div className="w_100  d_flex_col hold_image">
            <div className="imeg_div">
                <img className="image" src={images} alt=""/>
            </div>
            </div>

            <div className="section_options d_flex_col">

                <div className="hold_sec flex_row_to_col">
                    <div className="imag pad_left_right displaynon">

                        <img className="image " src={salad} alt=""/>

                    </div>
                    <div className="discript">
                                <div className="w_70">
                                <h1 className="primery_header">
                                        a long time ago 
                                    </h1>
                                    <p className="paregraph">
                                        the time we start till the time we end
                                        we never change and we never regret.
                                    </p>
                                </div>

                                <div className="four_grid">
                                    <div className="squar border_r">
                                        <div className="icon">
                                        &#8525;
                                        </div>
                                        <button className="btn_efect">send</button>
                                    </div>
                                    <div className="squar ">
                                    <div className="icon">
                                        &#8525;
                                        </div>
                                        <button className="btn_efect">send</button>
                                    </div>
                                    <div className="squar border_r border_top">
                                    <div className="icon">
                                        &#8525;
                                        </div>
                                        <button className="btn_efect">send</button>
                                    </div>
                                    <div className="squar border_top">
                                    <div className="icon">
                                        &#8525;
                                        </div>
                                        <button className="btn_efect">send</button>
                                    </div>
                                </div>



                      

                    </div>

                </div>
            </div>

 <div className="center_sec d_flex_col">
 <div className="section_photos flex_row_to_col">

<div className="squerside alinself flex_row_to_col">
    <div className="imageside">

            <img src={img2} className="image" alt=""/>
    </div>
    <div className="wordside">
    <h1>bla bla bla</h1>
        <button className='btn_efect'>send</button>
    </div>
</div>


<div className="squerside alinselfstart flex_row_to_col">
    <div className="imageside">

            <img src={img1} className="image" alt=""/>
    </div>
    <div className="wordside">
        <h1>bla bla bla</h1>
        <button className='btn_efect'>send</button>

    </div>
</div>


</div>
 </div>

      </div>


   
  </div>
  );
}

export default Homesection;
