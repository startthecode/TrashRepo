
const Category = async({params}:{params:Promise<{category:string}>}) => {
  const  category= (await params).category
  return (
    <div>Category {category}</div>
  )
}

export default Category