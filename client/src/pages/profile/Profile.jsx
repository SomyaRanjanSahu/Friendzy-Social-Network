import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.postimg.cc/5yxCVYj5/152bbb90-d04a-49b3-a32c-1fd1ed98c3c3.png"
          alt=""
          className="cover"
        />
        <img
          src="https://i.postimg.cc/m2mQTwYP/ranjan-profile.png"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>Ranjan Sahu</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small"/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize="small"/>
                <span>sahu.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize="medium"/>
            <MoreVertIcon fontSize="medium"/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;