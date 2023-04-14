import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Ranjan Sahu",
            img: "https://i.postimg.cc/yYtwpFDZ/bf7572eb-673b-4d38-9328-46a2b1919263.png",
        },
        {
            id: 2,
            name: "Vimal",
            img: "https://i.postimg.cc/fRMbynvC/e05a4be6-4d19-4e02-ab74-d15df4b1c7f3.png",
        },
        {
            id: 3,
            name: "Hrisabh",
            img: "https://i.postimg.cc/ZK8RJK60/c886165f-8e52-4089-801b-13b7e6ecee54.png",
        },
        {
            id: 4,
            name: "Avi Sukhla",
            img: "https://i.postimg.cc/MTgTpnsf/de1848ca-2f6d-4699-8418-c24ad9fce7f1.png",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src="https://i.postimg.cc/wvDv36nW/e0eb7bfc-0c95-44d3-af9d-06cccfe42b06.png" alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>

    )
}

export default Stories