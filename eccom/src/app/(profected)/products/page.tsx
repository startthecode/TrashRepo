
const Products = async({params}:{params:Promise<{category:string}>}) => {
  const  category= (await params).category
  return (
    <div>Products {category}</div>
  )
}

export default Products