function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer ">
        <h2 className=" d-flex justify-between mb-30">
          Korzina
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg">
                    {console.log(obj)}
                    <img
                      className="cu-p"
                      width={70}
                      height={70}
                      src={obj.imgUrl}
                      alt="Sneakers"
                    />
                  </div>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Itogo:</span>
                  <div></div>
                  <b>21498rub.</b>
                </li>
              </ul>
              <ul className="cartTotalBlock">
                <li className="d-flex">
                  <span>Nalog 5%</span>
                  <div></div>
                  <b>1074rub</b>
                </li>
              </ul>
              <button className="greenButton">
                Oformit zdes <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120PX"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Korzina pustaya</h2>
            <p className="opacity-6">
              Dobavite xotya bi odny paru kroccobok, chtobi sdelat zakaz
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              vernutsya nazad
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
