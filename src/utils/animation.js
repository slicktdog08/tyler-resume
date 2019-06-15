import { wobble, fadeInUpBig,slideInRight, slideInDown, bounceInDown, bounceOutUp,
    bounceIn, zoomInDown, fadeInUp, fadeIn, rollIn, zoomInUp, bounceInLeft, bounceInRight } from 'react-animations'
import Radium from 'radium'

export var styles = {
  
   slide_in_right_slow: {
     animation: 'x 2s',
     animationName: Radium.keyframes(slideInRight, 'slideInRight')
   },
   slide_in_right: {
       animation: 'x 1s',
       animationName: Radium.keyframes(slideInRight, 'slideInRight'),
       width: '100%'
   },
   slide_in_down_slow:{
     animation: 'x 2s',
     animationName: Radium.keyframes(slideInDown, 'slideInDown')
   },
   bounce_in_down:{
     animation: 'x 1s',
     animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
   },
   bounce_out_up:{
     animation: 'x 1s',
     animationName: Radium.keyframes(bounceOutUp, 'bounceOutUp')
   },
   bounce_in:{
       animation:'x 2s',
       animationName: Radium.keyframes(bounceIn, 'bounceIn')
   },
   bounce_in_slow:{
       animation:'x 3s',
       animationName: Radium.keyframes(bounceIn, 'bounceIn')
   },
   bounce_in_left:{
       animation: 'x 1s',
       animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
   },
   bounce_in_right:{
       animation: 'x 1s',
       animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
   },
   zoom_in_slow:{
       animation: 'x 3s',
       animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
   },
   zoom_in:{
       animation: 'x 2s',
       animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
   },
   zoom_in_down:{
       animation: 'x 1s',
       animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
   },
   zoom_in_up:{
       animation: 'x 1s',
       animationName: Radium.keyframes(zoomInUp, 'zoomInUp')
   },
   fade_in_up:{
       animation: 'x 2s',
       animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
   },
   fade_in_up_slow:{
       animation: 'x 4s',
       animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
   },
   
   fade_in:{
       animation: 'x 3s',
       animationName: Radium.keyframes(fadeIn, 'fadeIn')
   },
   fade_in_slow:{
       animation: 'x 5s',
       animationName: Radium.keyframes(fadeIn, 'fadeIn')
   },
   roll_in:{
       animation: 'x 3s',
       animationName: Radium.keyframes(rollIn, 'rollIn')
   },
     slide_in_down:{
       animation: 'x 1s',
       animationName: Radium.keyframes(slideInDown, 'slideInDown')
     },
     fade_in_up_big:{
         animation: 'x 1s',
         animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
     },
     wobble:{
         animation:'x 3s',
         animationName: Radium.keyframes(wobble, 'wobble')
     }
   
     
 }