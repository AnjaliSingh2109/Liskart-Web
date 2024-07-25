import {gql} from '@apollo/client'

export const GET_BANNER_MANAGEMENT=gql`
    query GetBannerManagement{
    bannerManegement(page_type:"Home Main Slider"){
        id
        status
        title
        image_url
        link_url
        template_name
        page_type
        description
}
}

`;

export interface Banner{
    id: string,
    status: string,
    title:string,
    image_url: string,
    link_url?: string | null,
    template_name:string,
    page_type:string,
    description:string
}

export interface GetBannerManagementData{
    bannerManegement: Banner[];
}