import React from "react";

function Pricebox({ priceboxItem }) {
  // const { icon, title, content, price, badge, best } = priceboxItem;
  const { icon, title, content, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      
      {/* <a href="blogs/blog-details/1/we_need_a_designer" className="btn btn-default">
        <h3 className="price">
          <span>중요도 </span>
          {price}
          <em>%</em>
        </h3>
      </a> */}
    </div>
  );
}

export default Pricebox;
