import '../../../css/home.css'
import video from '../../../video1.mp4'
import videonight from '../../../vn.mp4'
import images from '../../../IMG_6639.JPG'



function Opening(props) {
  return (
    <div className="header">
        <div className="opening_section d_flex_row">
          <div className="sideA d_flex_col">
            <div className="headers d_flex_col marg_left">
              <div className="big_header d_flex_col">
                    <h1 className="primery_geader">
                      Alma coffe style in style
                    </h1>
              </div>
         
              <div className="small_header">
                  <p className="peregraph marg_zero">
                    the place to find coffe and relax
                  </p>
              </div>
            </div>

          </div>
          
            <div className="imeg_div_big">
                <img className="image_big" src={images} alt=""/>
            </div>
            
          <div className="sideVideo">
            

<video src={props.weather? video : videonight} autoPlay muted loop className="video"></video>
<div className="bg">
              
            </div>
          </div>

        </div>
    </div>
  );
}

export default Opening;
