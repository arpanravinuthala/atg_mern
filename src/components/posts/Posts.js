import './Posts.css';
import post1 from 'A:/atg_mern/src/images/post1.png';
import post2 from 'A:/atg_mern/src/images/post2.png';
import post3 from 'A:/atg_mern/src/images/post3.png';
import profile1 from 'A:/atg_mern/src/images/profile1.png';
import profile2 from 'A:/atg_mern/src/images/profile2.png';
import profile3 from 'A:/atg_mern/src/images/profile3.png';
import profile4 from 'A:/atg_mern/src/images/profile4.png';
import share from 'A:/atg_mern/src/images/share.png';
import loc_pointer from 'A:/atg_mern/src/images/loc_pointer.png';
import edit from 'A:/atg_mern/src/images/edit.png';
import Vector from 'A:/atg_mern/src/images/Vector.png';

function Posts(){

    const listStyle = {
        display: 'flex',
        flexDirection :'row',
        listStyle: 'none',
        left:'255px',
        padding: 0,
    };

    const listItemStyle={
        margin: '0 10px'
    }


    return(
        <div className="container custom-container">
            <br/>
            <br/>
            <div className="mob">
                <div><b>Posts(368)</b></div>
                <div><button className='btn btn-secondary' style={{color:'white'}}>Filter:All</button></div>
            </div>
                <div className="container1">
                    <ul style={listStyle}>
                        <b><li style={listItemStyle}>All Posts(32)</li></b>
                        <li style={listItemStyle}>Article</li>
                        <li style={listItemStyle}>Event</li>
                        <li style={listItemStyle}>Education</li>
                        <li style={listItemStyle}>Job</li>
                    </ul>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><button type='submit' className='btn' style={{backgroundColor:'#EDEEF0'}}>Write a Post</button></li>
                        <li style={listItemStyle}><button type='submit' className='btn' style={{backgroundColor:'#2F6CE5', color:'white'}}>Join Group</button></li>
                    </ul>
                </div>  
            <hr/>
            <br/>
            <div className='text-group'>
                <div className='post-group'>
                    <div className='single-post'>
                        <img src={post1} alt='' width='100%'></img>
                        <br/>
                        <br/>
                        <div className='container'>
                            <p style={{fontSize:'1rem'}}><b>Article</b></p>
                            <div className='text'>
                                <p>What if famous brands had regular fonts? Meet <br></br>RegulaBrands!{' '} </p>
                                <p>...</p>
                            </div>
                            <p style={{fontSize:'19px',color:'#5C5C5C'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='container_tag'>
                                <div className='container_tag1'>
                                    <div style={{paddingRight:'10px'}}>
                                        <img src={profile1} alt="" width="48px" height="48px"left="10px"/>
                                    </div>
                                    <div><b><p>Sarthak Kamra</p></b></div>
                            </div>
                            <div className='container_tag1'>
                                <p style={{paddingRight:'30px'}}>1.4k views</p>
                                <img src={share} alt="" width='42px' height='36px'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-post'>
                    <img src={post2} alt='' ></img>
                    <br/>
                    <br/>
                    <div className='container'>
                        <p><b>Education</b></p>
                        <div className='text'>
                            <p>Tax Benefits for Investment under National Pension <br></br>Scheme launched by Government </p>
                            <p>...</p>
                        </div>
                        <p style={{fontSize:'19px',color:'#5C5C5C'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='container_tag'>
                            <div className='container_tag1'>
                                <div style={{paddingRight:'10px'}}>
                                    <img src={profile2} alt="" width="48px" height="48px" left="10px"/>
                                    </div>
                                <div><b><p>Sarah West</p></b></div>
                            </div>
                            <div className='container_tag1'>
                                <p style={{paddingRight:'30px'}}>1.4k views</p>
                                <img src={share} alt="" width='42px' height='36px'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-post'>
                    <img src={post3} alt='' ></img>
                    <br/>
                    <br/>
                    <div className='container'>
                        <p><b>Meetup</b></p>
                        <div className='text'>
                            <p>Finance & Investment Elite Social Mixer @Lujiazui </p>
                            <p>...</p>
                        </div>
                        <div className="text">
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>Fri,12 Oct,2018</p>
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>Ahmedabad,India</p>
                        </div>
                        <button className="btn" style={{width:'100%',color:'#E56135', borderColor:'#A9AEB8',marginBottom:'10px', textSize:'13px',fontWeight:'bold'}}>Visit Website</button>
                        <div className='container_tag'>
                            <div className='container_tag1'>
                                <div style={{paddingRight:'10px'}}>
                                    <img src={profile3} alt="" width="48px" height="48px" left="10px"/>
                                    </div>
                                <div><b><p>Ronal Jones</p></b></div>
                            </div>
                            <div className='container_tag1'>
                                <p style={{paddingRight:'30px'}}>1.4k views</p>
                                <img src={share} alt="" width='42px' height='36px'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-post'>
                    <div className='container'>
                        <p><b>Job</b></p>
                        <div className='text'>
                            <p>Software Developer</p>
                            <p>...</p>
                        </div>
                        <div className="text">
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>Innovaccer Analytics Private Ltd.</p>
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>Ahmedabad,India</p>
                        </div>
                        <button className="btn" style={{width:'100%',color:'#02B875', borderColor:'#A9AEB8',marginBottom:'10px', textSize:'13px',fontWeight:'bold'}}>Apply on Timesjobs</button>
                        <div className='container_tag'>
                            <div className='container_tag1'>
                                <div style={{paddingRight:'10px'}}>
                                    <img src={profile4} alt="" width="48px" height="48px" left="10px"/>
                                    </div>
                                <div><b><p>Joseph Gray</p></b></div>
                            </div>
                            <div className='container_tag1'>
                                <p style={{paddingRight:'30px'}}>1.4k views</p>
                                <img src={share} alt="" width='42px' height='36px'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="container2">
                <div className='container1'>
                    <img src={loc_pointer} alt="" width='18px' height='18px'/>
                    <p style={{fontWeight:'bold', paddingRight:'120px'}}>Noida, India</p>
                </div>
                <div>
                    <img src={edit} alt='' width='18px' height='18px'/>
                </div>
            </div>
            <hr style={{paddingBottom:'15px'}}/>
            <div className="container3">
                <img src={Vector} alt="" width="16px" height="16px" style={{marginRight:'10px'}}/>
               <div> <p style={{color:'#000000', fontSize:'12px'}}>Your location will help us serve better</p>
                <p style={{color:'#000000', fontSize:'12px'}}>and extend a personalised experience.</p> </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Posts;

