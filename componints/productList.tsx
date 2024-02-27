type Product = {
    text: string;
    number: number;
}

function ProductList(props: Product){
    return (
        <>
        <ul>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Galaxy</li>
            <li>Blackberry</li>
            <li>Apple</li>
            <li>{props.text}</li>
            <li>{props.number}</li>
        </ul>
        </>
    )
} export default ProductList  