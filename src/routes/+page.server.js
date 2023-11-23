import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {  
  let query = gql`
    query wishes {
      wishes {
        id
        heading
        description
        date
        label
        image {
          url
          width
          height
        }
      }
    }
  `;

  const request = await hygraph.request(query);

  return request
}