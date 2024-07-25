import {gql} from '@apollo/client';


export const GET_TEST=gql`
query GetTest{
contentManegement(content_category_name: "Testimonials") {
             id
            status
            title
            image_url
            content_category_name
            sort_order
            video_url
            link_url
            description
            reviewer_name
            reviewer_designation
            reviewer_company
        }

}
`;

export interface ContentItem {
    // id: number;
    // image: string;
    // name: string;
    // designation: string;
    // company: string;
    // video: string;
    // // id: string;
    //  status?: number;
    //  title?: string;
    // // image_url: string;
    //  content_category_name: string;
    //  sort_order?: number;
    // // video_url: string;
    //  link_url?: string;
    //  description?: string;
    // // reviewer_name: string;
    // // reviewer_designation: string;
    // // reviewer_company: string;


    id:string;
            status:number;
            title:string;
            image_url:string;
            content_category_name:string;
            sort_order:number;
            video_url?:string;
            link_url?:string;
            description?:string;
            reviewer_name:string;
            reviewer_designation:string;
            reviewer_company:string;
  }
  

  export interface GetTestData {
    contentManegement: ContentItem[];
  }
  

  export interface GetTestVars {
    content_category_name: string;
  }


//   interface TestimonialsCardProps {
//     testimonialsItem: ContentItem;
//   }
  
//   const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonialsItem }) => {
//     return (
//       <div className="testimonials-card">
//         {testimonialsItem.image_url && <img src={testimonialsItem.image_url} alt={testimonialsItem.title} />}
//         <h3>{testimonialsItem.title}</h3>
//         <p>{testimonialsItem.description}</p>
//         <p><strong>{testimonialsItem.reviewer_name}</strong></p>
//         <p>{testimonialsItem.reviewer_designation} at {testimonialsItem.reviewer_company}</p>
//         {testimonialsItem.video_url && <a href={testimonialsItem.video_url}>Watch Video</a>}
//         {testimonialsItem.link_url && <a href={testimonialsItem.link_url}>Learn More</a>}
//       </div>
//     );
//   };
  
//   export default TestimonialsCard;