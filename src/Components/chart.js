import React from 'react'
import convert from '../../src/convert.png'
import '../index.css'
import Group from '../../src/Group.png'
import transparent from '../../src/transparent.png'
import ytransparent from '../../src/ytransparent.png'
import Stransparent from '../../src/Stransparent.png'
import Ron from '../../src/Ron.png'
import Anushka from '../../src/Anushka.png'
import David from '../../src/David.png'
import image from '../../src/image.png'

function chart() {
  return (
    <div>
        
         <div className="d-flex align-items-center justify-content-between px-5 sa-image">
                                       <img src={convert} alt='convert'
                                       height={60} >
                                       </img>
                                        <a
                                           href='login'
                                            className="font-weight-bold text-white sa-login"
                                        >
                                           Login
                                        </a>
                                    </div> 
                                    <div>
                                        <img src={Group} alt="Group" className='banner_imgg'
                                      
                                        />
                                        <div className='centered text-white text-center'>
                                        <h1>Dreadnought</h1>
                                        <h3 className='mt-3'>School for Deep Tech founders</h3>
                                        <button className='btn btn-primary mt-3 col-6 sa-img_btn '
                                        
             
            >
              Sign Up
            </button>
                                        </div>
                                    </div>

                                    <section className='sa_text'>
                        <div className='text-center sa-text_Align mt-5'>
                            <h4 >We believe <strong>humanity's survival</strong> depends on us being a <strong>spacefaring civilisation</strong> and future deep tech founders will lead the way.</h4>
                            <p><br/></p>
                           
                            <h4>
                                <strong>Get paid to learn</strong> the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.</h4>
                            <p><br/></p>
                        </div>
                    </section> 

                    <div>
                    <section className='sa_overall_clr'>
                        <div className='text-center' >
                            <h3 className='sa_heading pt-5'><strong>Social Initiative By</strong></h3>
                            <p><br/></p>
                        </div>
                   
                    <div>
                    <div className="row px-4">
                        <div className='col-4 px-5'>
                    <figure class="figure"> 
                    <img src={transparent} alt="transparent"
                        height={250} width={250}/>
                         <figcaption class="figure-caption" ><h5 className='sa_img_text'>AI for Good <br/>Foundation</h5> </figcaption>
                         </figure>
                         </div>
                         <div className='col-4 px-5'>
                         <figure class="figure"> 
                    <img src={ytransparent} alt="transparent"
                        height={250} width={250}/>
                         <figcaption class="figure-caption">  <h5 className='sa_img_text'>Y Combinator</h5></figcaption>
                         </figure>
                        </div>
                        <div className='col-4 px-5'>
                        <figure class="figure"> 
                    <img src={Stransparent} alt="transparent"
                        height={250} width={250}/>
                         <figcaption class="figure-caption"><h5 className='sa_img_text'>Stanford University</h5> </figcaption>
                         </figure>
                       </div>
                        </div>
                    </div>
                    </section>
                        </div>  

                          <section className='sa_text'>
                        <div className='text-center mt-5'>
                            <h3 className='sa_heading '><strong>About Dreadnought</strong></h3>
                            <p ><br/></p>
                            <p >Our team is comprised of digitally-native entrepreneurs, futurists and operators with strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super charge the future by helping unlock
                                the potential of future deep tech entrepreneurs.</p>
                        </div>
                    </section>  


                    <div className="row px-4 text-center">
                        <div className='col-4'>
                    <div class="card">
  <img src={Ron} class="" alt="..." width={200}/>
  <div class="card-body">
     <h5 class="card-title">Bailee Cooper</h5>
    <p class="card-text">Technophile. Left Brain. Space Nerd.<br/> UC Berkeley Alum.</p>
    </div>
  </div>
</div>  
<div className='col-4'>
                    <div class="card">
  <img src={Anushka} class="" alt="..." width={200}/>
  <div class="card-body">
     <h5 class="card-title">Jason Miller</h5>
    <p class="card-text">﻿Futurist. Entrepreneur. Hardcore<br/>Nerd. Stanford Alum.</p>
    </div>
  </div>
</div>  
<div className='col-4'>
                    <div class="card">
  <img src={David} class="" alt="..." width={200}/>
  <div class="card-body">
     <h5 class="card-title">Ragini Malhotra</h5>
    <p class="card-text">AI Researcher. Right Brain. Loves<br/> Dogs. MIT Alum.</p>
    </div>
  </div>
</div>  
</div>                


<section className='sa_overall_clr'>
                        <div className='text-center'>
                            <h3 className='sa_heading pt-5'><strong>Student Experiences</strong></h3>
                            <p><br/></p>
                        </div>
                   
<div className="row px-4 text-center">
                        <div className='col-4 '>
                    <div class="card sa-card text-center">
  <img src={Ron} class="" alt="..." width={200} style={{textAlign:'center'}}/>
  <div class="card-body">
     <h5 class="card-title">Rob Nielsen</h5>
    <p class="card-text text-center">Sophomore year student at MIT says, 'I have been coding since I was 12 but this course blew my mind away because now I know no fear. I can keep launching again and again till I win. The startup lessons are invaluable and practical.'</p>
    </div>
  </div>
</div>  
<div className='col-4'>
                    <div class="card sa-card">
  <img src={Anushka} class="" alt="..." width={200}/>
  <div class="card-body">
     <h5 class="card-title">Rashmi Tirke</h5>
    <p class="card-text">Final year student at IIT Madras says, 'I almost gave up but then I realised that if I can't build these things in a controlled learning environment then I am not going to survive as an entrepreneur in the real world. I am far more confident now.'</p>
    </div>
  </div>
</div>  
<div className='col-4'>
                    <div class="card sa-card">
  <img src={David} class="" alt="..." width={200}/>
  <div class="card-body">
     <h5 class="card-title">David Raum</h5>
    <p class="card-text">First year student at Cambridge says, 'I learnt so much and I plan to use the money I earned as a seed money for my startup. The smartest thing I did was to refer my friends as it increased my earnings and now we are working together.'</p>
    </div>
  </div>
</div>  
</div>  
</section>


<section  >
                        <div className='text-center sa-clr text-white' >
                            <h4 className='pt-5'><strong>Sign up to learn and earn</strong></h4>
                            <p ><br/></p>
                            <p >Course enables future founders to learn how to launch quickly as most first time founders pivot 4 to 5 times before achieving product-market fit.</p>
                            <p><br/></p>
                            <div className="container sa-inside text-center pb-3">
                                <img src={image} alt="" className='mt-3'
                                width={300}
                                height={200}/>
                                  <h4 className='sa-inside_text mt-3'>

Future Deep Tech Founders

</h4>
<h6 className='sa-inside_text mt-3 text-center'>

Everything you need to know about building startup other than coding. Milestone based <br/>earnings upto USD $1000.

</h6>
<div className="d-flex align-items-center justify-content-between px-4 sa-inside_text">
    <div className='pl'>Jason Miller</div>
    <h4 className='ul'>FREE</h4>
</div>
                            </div>
                            </div>
                            </section>

                          

<div>

</div>
  <div className="d-flex align-items-center justify-content-between px-5 sa-image text-white">
    <div >  &copy; Dreadnought 2022 <br/> FAQs</div>
    <div className='pt-2'>Terms of Use<br/>
Privacy Policy<br/><br/>Teach Online with<br/>
Teachable</div>
  </div>
    </div>
  )
}

export default chart