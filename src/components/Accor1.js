import { useState } from "react"


const Accor1 = ({data}) => {
    const [displayedItems, setDisplayedItems] = useState({});
    const handleClick = (itemId) => {
      setDisplayedItems((prevState) => ({
        ...prevState,
        [itemId]: !prevState[itemId],
      }));
    };
    return (
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        {data.map((item) => (
          <div key={item.id} className="data-container">
            <div className="title">
              <h2>{item.title}</h2>
              <button onClick={() => handleClick(item.id)}>
                {displayedItems[item.id] ? "-" : "+"}
              </button>
            </div>
            {displayedItems[item.id] && <p>{item.text}</p>}
          </div>
        ))}
      </div>
    );
  };
export default Accor1