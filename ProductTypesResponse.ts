/**
 * file generated by modelina
 * this file represents the output from removing
 * the additionalItems property from the ProductTypesResponse json schema line 12
 */

import ProductTypes from "./ProductTypes"; // correctly generated - moved for demo purposes
interface ProductTypesResponse {
  productTypes: (ProductTypes | any)[]; // incorrectly generated - should be ProductTypes[]
}
export default ProductTypesResponse;