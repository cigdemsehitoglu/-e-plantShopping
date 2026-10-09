import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/09/21/18/25/spider-plant-3693921_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://cdn.pixabay.com/photo/2016/08/24/16/35/lavender-1616871_1280.jpg",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://cdn.pixabay.com/photo/2018/07/31/14/09/jasmine-3574727_1280.jpg",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/03/29/19/39/rosemary-4090086_1280.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/02/24/19/04/mint-1220161_1280.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Citrusy scent, relieves stress and promotes sleep.",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Beautiful flowering plant known for its fragrance.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://cdn.pixabay.com/photo/2015/05/30/21/33/oregano-790697_1280.jpg",
          description: "Contains compounds that can deter pests.",
          cost: "$10"
        },
        {
          name: "Marigold",
          image: "https://cdn.pixabay.com/photo/2016/07/15/18/51/marigold-1520471_1280.jpg",
          description: "Natural insect repellent, also adds color.",
          cost: "$8"
        },
        {
          name: "Geraniums",
          image: "https://cdn.pixabay.com/photo/2012/04/26/22/31/geranium-42996_1280.jpg",
          description: "Known for their insect-repelling properties.",
          cost: "$16"
        },
        {
          name: "Basil",
          image: "https://cdn.pixabay.com/photo/2016/07/24/22/38/basil-1539303_1280.jpg",
          description: "Repels flies and mosquitoes, great for cooking.",
          cost: "$12"
        },
        {
          name: "Lavender",
          image: "https://cdn.pixabay.com/photo/2016/08/24/16/35/lavender-1616871_1280.jpg",
          description: "Calming scent, also deters mosquitoes.",
          cost: "$20"
        },
        {
          name: "Catnip",
          image: "https://cdn.pixabay.com/photo/2016/11/29/12/50/catnip-1869758_1280.jpg",
          description: "Repels mosquitoes and attracts cats.",
          cost: "$13"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel used for skin ailments.",
          cost: "$14"
        },
        {
          name: "Echinacea",
          image: "https://cdn.pixabay.com/photo/2014/12/17/21/37/echinacea-571928_1280.jpg",
          description: "Boosts immune system, helps fight colds.",
          cost: "$16"
        },
        {
          name: "Ginger",
          image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/ginger-1972050_1280.jpg",
          description: "Relieves nausea and aids digestion.",
          cost: "$14"
        },
        {
          name: "Turmeric",
          image: "https://cdn.pixabay.com/photo/2015/09/02/13/11/turmeric-918588_1280.jpg",
          description: "Anti-inflammatory and antioxidant properties.",
          cost: "$15"
        },
        {
          name: "Peppermint",
          image: "https://cdn.pixabay.com/photo/2016/02/24/19/04/mint-1220161_1280.jpg",
          description: "Relieves headaches and improves digestion.",
          cost: "$12"
        },
        {
          name: "Chamomile",
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/chamomile-1838640_1280.jpg",
          description: "Soothes anxiety and promotes sleep.",
          cost: "$11"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://cdn.pixabay.com/photo/2020/07/27/15/16/zz-plant-5442476_1280.jpg",
          description: "Thrives in low light and requires minimal watering.",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Tolerates neglect and can grow in various conditions.",
          cost: "$10"
        },
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Needs infrequent watering and is resilient to most pests.",
          cost: "$15"
        },
        {
          name: "Cast Iron Plant",
          image: "https://cdn.pixabay.com/photo/2017/02/22/17/38/plant-2090492_1280.jpg",
          description: "Extremely hardy and can survive in tough conditions.",
          cost: "$20"
        },
        {
          name: "Succulents",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/plants-1845814_1280.jpg",
          description: "Drought-tolerant plants with unique shapes and colors.",
          cost: "$18"
        },
        {
          name: "Aglaonema",
          image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          description: "Requires minimal care and adds color to indoor spaces.",
          cost: "$22"
        }
      ]
    }
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1 className="product-category">
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
