/* eslint-disable no-unused-vars */
import {useLoaderData, useLocation,useNavigate} from 'react-router-dom'

const PaginationContainer = () => {
  const {meta} = useLoaderData()
  const {pageCount, page} = meta.pagination
  
  return (
    <div>
    
    </div>
  )
}

export default PaginationContainer
