type ProductPrams = {
    text?: string;
    number?: number;
}

function ProductList({text, number}: ProductPrams){
    return (
        <>
        <ul>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Galaxy</li>
            <li>Blackberry</li>
            <li>Apple</li>
            <li>{text}</li>
            <li>{number}</li>
        </ul>
        </>
    )
} export default ProductList  