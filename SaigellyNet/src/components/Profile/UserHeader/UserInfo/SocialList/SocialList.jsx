import SocialItem from "./SocialItem/SocialItem";
import s from "./SocialList.module.css"

const SocialList = ({socialItems}) => {
    return (
        <ul className={s.list}>
            {socialItems.map((social, index) => <SocialItem item={social} key={index}/>)}
        </ul>
    )
}

export default SocialList;