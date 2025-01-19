import css from "./FriendsItem.module.css"
export default function FriendsItem({friend}){
    function getDisplayValue(value, defaultText = "No data") {
        return value || defaultText;
    }
    const sliceText = (text, maxLength = 35) => {
        if (!text) return "Not provided";
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };
    let currentDay = new Date().getDay();
    if (currentDay === 0) {
        currentDay = 0; // Для неділі залишаємо 0
      } else {
        currentDay = currentDay; // Для інших днів використовуємо поточний індекс
      }

    return(
        <div className={css.container}>
            <img className={css.img} src={friend.imageUrl} alt="elipse"  width={80} height={80}/>
            <div>
            {friend.workDays &&
          friend.workDays.map((day, index) => {
            // Перевіряємо, чи поточний день співпадає з робочим
            if (index === currentDay) {
              return (
                <p key={day.id} className={css.time}>
                  {day.isOpen === false ? "Closed" : `${day.from} - ${day.to}`}
                </p>
              );
            }
            return null; // Якщо день не поточний, нічого не виводимо
          })}
                <h3 className={css.name}>
                    <a  className={css.name}
                        target="_blank" 
                        rel="noopener noreferrer"  
                        href={friend.url}>{friend.title}
                    </a>
                </h3>
                <ul className={css.list}>
                    <li className={css.item}>
                        <p className={css.contacts}>Email:</p> 
                        <p className={css.contactDetails}>{getDisplayValue(friend.email)}</p></li>
                    <li className={css.item}>
                        <p className={css.contacts}>Address: </p>
                        <a  
                        target="_blank" 
                        rel="noopener noreferrer"  
                        href={friend.addressUrl} 
                        className={css.contactDetails}> {sliceText(friend.address)}</a>
                    </li>
                    <li className={css.item}>
                        <p className={css.contacts}>Phone: </p>
                        <p className={css.contactDetails}> {getDisplayValue(friend.phone)}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}