import {gql} from '@apollo/client'


export const    GET_FAQ=gql`
query GetFaq{

    getFaqItems (pageSize: 2) {
        faq_label
        items {
            question
            answer
            sort_order
        }
        page_info {
            total_pages
        }
    }
}

`;

export interface FaqItem {
    question: string;
    answer: string;
    sort_order: number;
  }
  
  // Interface for the PageInfo object
  export interface PageInfo {
    total_pages: number;
  }
  
  // Interface for the entire response data
  export interface GetFaqData {
    getFaqItems: {
      faq_label: string;
      items: FaqItem[];
      page_info: PageInfo;
    };
  }

  // Example interface for accordion item

  

  