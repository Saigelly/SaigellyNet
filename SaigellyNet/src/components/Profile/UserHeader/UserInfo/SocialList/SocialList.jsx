import SocialItem from "./SocialItem/SocialItem";
import s from "./SocialList.module.css"

const SocialList = (props) => {
    return (
        <ul className={s.list}>
            {Object.entries(props.contacts).map((c, index) => <SocialItem item={c} key={index}/>)}
        </ul>
    )
}

export default SocialList;