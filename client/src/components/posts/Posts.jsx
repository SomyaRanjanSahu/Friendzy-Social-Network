import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {

    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "Ranjan Sahu",
            userId: 1,
            profilePic:
                "https://i.postimg.cc/m2mQTwYP/ranjan-profile.png",
            desc: "Walking towards endless possibilities 🚶‍♂️🌃 #citylights #cityadventures #neverstopexploring",
            img: "https://i.postimg.cc/nVjfJH67/82bec401-9065-4d8a-9b6d-19333e0e3226.png",
        },
        {
            id: 2,
            name: "Avi Sukhla",
            userId: 2,
            profilePic:
                "https://i.postimg.cc/658JBBgn/701bbc3c-89fc-43ae-b8c7-6986b4067216.png",
            desc: "👨‍💼👩‍💼 Adulting can be tough at times, but it's also incredibly rewarding. 💰💸 From paying bills and managing finances to pursuing our passions and building meaningful relationships 💕👥, we are constantly learning and growing as we navigate this thing called life. It's okay to stumble along the way 🚶‍♂️🚶‍♀️, to make mistakes and to not have it all figured out. We're all just trying to do the best we can. So let's embrace the challenges that come with adulting 💪🧗‍♂️🧗‍♀️, and let's celebrate the moments of joy and accomplishment that make it all worth it. 🎉🙌 #adulting #growthmindset #embracethejourney",
        },
        {
            id: 3,
            name: "Hrisabh Anand",
            userId: 1,
            profilePic:
                "https://i.postimg.cc/7ZBxmKFn/ee7c0c9f-674e-4028-8fe1-3c6f1ba01976.png",
            img: "https://i.postimg.cc/L5cMr7Hr/9269b9f8-5d4e-47f1-b662-0a155ce9394c.png",
        },
    ];


    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts