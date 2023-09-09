import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation createUser($email:String!, $password: String!){
    createUser(
        email:$email,
        password:$password
        ){
          message,
          status
        }
  }
`;

export const LOGIN_MUTATION = gql`
mutation login( $email: String!, $password: String!) {
  login(email: $email, password: $password) {
   user {
    email
  }
    token
    message
    status
  }
}
`;
export const CREATE_JOBS = gql`
mutation createJobs(
  $title: String!,
  $description: String!,
  $city: String!,
  $skills: [String]!) {
    createJob(
title: $title
description:$description
city:  $city
skills: $skills
    ){
      message
      job{title}
      status
    }
    
  } 
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($id: Int!) {
    deleteJob(id: $id) {
      message
      status
    }
  }
`;

export const UPDATE_JOB=gql`
mutation Editjob(
  $id:Int!
  $title:String!
  $description:String!
  $city:String!
  $skills:[String]!) {
  updateJob (
    id:$id
    title:$title
    description:$description
    city:$city
    skills:$skills
  ){
    message
    status
  }
  }`;
