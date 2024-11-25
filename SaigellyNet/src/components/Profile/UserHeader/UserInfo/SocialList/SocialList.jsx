import SocialItem from "./SocialItem/SocialItem";
import s from "./SocialList.module.css"

const SocialList = (props) => {
    return (
        <ul className={s.list}>
            {Object.entries(props.contacts).map((c) => <SocialItem item={c}/>)}
        </ul>
    )
}

export default SocialList;