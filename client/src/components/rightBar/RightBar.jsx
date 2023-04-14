import "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/8c9ypJnY/5cf5b996-5d7c-4ef7-9812-edae898dbc73.png" alt="" />
                            <span>Sakshi Mishra</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/fLKnRKxr/10f780c6-3c02-4916-862b-0bc37ba3fd26.png" alt="" />
                            <span>Kunal Sharma</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>                        
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activites</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/m2mQTwYP/ranjan-profile.png" alt="" />
                            <p>
                            <span>Ranjan Sahu </span>
                            liked your story 
                            </p>
                        </div>
                        <span>2 min ago</span>                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/7ZBxmKFn/ee7c0c9f-674e-4028-8fe1-3c6f1ba01976.png" alt="" />
                            <p>
                            <span>Hrisabh </span>
                            liked a post
                            </p>
                        </div>
                        <span>20 min ago</span>                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/658JBBgn/701bbc3c-89fc-43ae-b8c7-6986b4067216.png" alt="" />
                            <p>
                            <span>Avi </span>
                            liked a comment 
                            </p>
                        </div>
                        <span>1 hr ago</span>                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/s2TxtVbq/95d64e81-a7c3-4bc6-b526-e2c7cb696087.png" alt="" />
                            <p>
                            <span>Vimal </span>
                            posted
                            </p>
                        </div>
                        <span>3 hrs ago</span>                        
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/658JBBgn/701bbc3c-89fc-43ae-b8c7-6986b4067216.png" alt="" />
                            <div className="online" />
                            <span>Avi Sukhla </span>
                        </div>                       
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/br66K2pW/d30ad975-2097-4c8e-8210-5128e2c734a2.png" alt="" />
                            <div className="online" />
                            <span>Gulshan Kumar </span>
                        </div>                       
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/7ZBxmKFn/ee7c0c9f-674e-4028-8fe1-3c6f1ba01976.png" alt="" />
                            <div className="online" />
                            <span>Hrisabh Anand </span>
                        </div>                       
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/m2mQTwYP/ranjan-profile.png" alt="" />
                            <div className="online" />
                            <span>Ranjan Sahu </span>
                        </div>                       
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.postimg.cc/s2TxtVbq/95d64e81-a7c3-4bc6-b526-e2c7cb696087.png" alt="" />
                            <div className="online" />
                            <span>Vimal Kunwar </span>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar