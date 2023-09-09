import { gql } from "@apollo/client";

export const JOB=gql`
query jobList ($id:Int){
    job(id:$id) {
     job{
      id
      title
      description
      city
      skills{
        id
        title
      }
      updatedAt
    }
    }
  }
`;
export const JOBS_LIST=gql`
query Jobs($page: Int!, $pageSize: Int!, $sort: String!) {
    jobs(page: $page, pageSize: $pageSize, sort: $sort) {
      jobs {
        id
        title
        description
        city
        updatedAt
        skills {
          id
          title
        }
      }
      message
      totalPage
    }
  }
`;
export const EDIT_JOB=gql`
query Editjob($id:Int) {
  job (id:$id) {
    job{
      id
      title
      description
      city
      skills{
        id
        title
      }
    }
    message
    status
  }
}`
