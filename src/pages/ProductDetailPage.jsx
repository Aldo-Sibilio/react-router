import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {

  const [product, setProduct] = useState(null);

  // useParams ci permette di leggere l'id dall'URL
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotto ricevuto:", data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Errore durante il caricamento:", error);
      });
  }, [id]);

  // se il prodotto non è ancora caricato mostriamo un messaggio
  if (!product) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price} €</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetailPage;