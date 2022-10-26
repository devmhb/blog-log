import React from 'react'
import { getCategories, getCategory } from '../../service'

const CategoryDetails = ({category}) => {
    const {edges: categoryInfo} = category

  return (
    <>
    <div>{categoryInfo[0].node.name}</div>
    <h1>Hello</h1>
    </>
  )
}

export default CategoryDetails

export async function getStaticPaths() {
   
    const { edges: category} = await getCategories()

    return {
        paths: category.map(({node: {slug} }) =>({params: {slug}})),
        fallback: true,
    }
  };
  
  export async function getStaticProps({params}) {
        const category = await getCategory(params.slug) 

        return {
            props: {category}
        }

  }