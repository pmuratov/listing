import { TDataItem } from "../Types/DataItem.type";
import { TData } from "../Types/Data.type";
export const Listing = ({ data = [] }: TData) => {
  function defineQuantityClass(quantity: number | undefined) {
    if (!quantity) return "";
    let quantityClass: string = "";
    if (quantity) {
      if (quantity < 10) {
        quantityClass = "level-low";
      } else if (quantity < 20) {
        quantityClass = "level-medium";
      } else {
        quantityClass = "level-high";
      }
    }
    return quantityClass;
  }
  function shortenTitle(title: string = "") {
    if (title && title.length && title.length >= 50) {
      title = title.substring(0, 50) + "...";
    }
    return title;
  }
  function defineCurrency(
    currency: string | undefined,
    value: string | undefined
  ) {
    if (currency && currency === "USD") {
      return `$${value}`;
    } else if (currency && currency === "EUR") {
      return `€${value}`;
    } else {
      return `${currency} ${value}`;
    }
  }

  return (
    <ul className="item-list">
      {data.map((item: TDataItem) => (
        <li key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img
                src={(item.MainImage && item.MainImage.url_570xN) || ""}
                alt=""
              />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{shortenTitle(item.title)}</p>
            <p className="item-price">
              {defineCurrency(item.currency_code, item.price)}
            </p>
            <p className={defineQuantityClass(item.quantity)}>
              {item.quantity}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
