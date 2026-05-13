import { useState, useEffect } from "react";
import { Link } from "react-router";

function ProductsPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotti ricevuti:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore durante il caricamento:", error);
      });
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>
      <div>
        {products.map((product) => (
          // Link che porta alla pagina di dettaglio con l'id del prodotto
          <Link to={`/products/${product.id}`} key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



export default ProductsPage;