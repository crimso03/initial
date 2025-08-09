
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from "../assets/image/s.jpg";


const Fetch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => {return res.json();})
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>

      {products.map((product) => (
        < />
      ))}
    </div>
  );
};


// const Cards = () => {
//     return (
//         <div>
//             <Card style={{ width: '18rem' }}>
//      <img src={s} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </div>
//     );
// };

export default Fetch;