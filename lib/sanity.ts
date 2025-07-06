import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Author queries
export async function getAuthor() {
  return client.fetch(
    groq`*[_type == "author"][0]{
      name,
      title,
      location,
      email,
      linkedin,
      github,
      bio,
      image
    }`,
  )
}

// Blog post queries
export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      featured,
      tags,
      categories[]->{
        title,
        slug,
        color
      },
      author->{
        name,
        image
      }
    }`,
  )
}

export async function getFeaturedPosts() {
  return client.fetch(
    groq`*[_type == "post" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      tags,
      categories[]->{
        title,
        slug,
        color
      },
      author->{
        name,
        image
      }
    }`,
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      body,
      tags,
      categories[]->{
        title,
        slug,
        color
      },
      author->{
        name,
        image,
        bio
      },
      seo
    }`,
    { slug },
  )
}

// Project queries
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(order asc, year desc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      category,
      technologies,
      company,
      year,
      status,
      featured,
      results,
      liveUrl,
      githubUrl
    }`,
  )
}

export async function getFeaturedProjects() {
  return client.fetch(
    groq`*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      category,
      technologies,
      company,
      year,
      status,
      results,
      liveUrl,
      githubUrl
    }`,
  )
}

export async function getProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      longDescription,
      mainImage,
      gallery,
      category,
      technologies,
      company,
      year,
      status,
      results,
      challenges,
      solutions,
      liveUrl,
      githubUrl,
      seo
    }`,
    { slug },
  )
}

// Service queries
export async function getServices() {
  return client.fetch(
    groq`*[_type == "service" && active == true] | order(order asc) {
      _id,
      title,
      slug,
      description,
      longDescription,
      icon,
      features,
      technologies,
      pricing,
      timeline,
      process,
      caseStudies[]->{
        title,
        slug,
        description,
        mainImage,
        results
      }
    }`,
  )
}

export async function getService(slug: string) {
  return client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      longDescription,
      icon,
      features,
      technologies,
      pricing,
      timeline,
      process,
      caseStudies[]->{
        title,
        slug,
        description,
        mainImage,
        results,
        technologies,
        company
      }
    }`,
    { slug },
  )
}

// Testimonial queries
export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial" && active == true] | order(order asc) {
      _id,
      name,
      role,
      company,
      content,
      rating,
      image,
      featured,
      project->{
        title,
        slug
      }
    }`,
  )
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial" && featured == true && active == true] | order(order asc) {
      _id,
      name,
      role,
      company,
      content,
      rating,
      image,
      project->{
        title,
        slug
      }
    }`,
  )
}

// Skills queries
export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skill" && active == true] | order(order asc) {
      _id,
      name,
      level,
      category
    }`,
  )
}

// Experience queries
export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"] | order(order asc) {
      _id,
      title,
      company,
      location,
      startDate,
      endDate,
      current,
      description,
      achievements,
      technologies
    }`,
  )
}

// Education queries
export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"] | order(order asc) {
      _id,
      degree,
      institution,
      startYear,
      endYear,
      current,
      description,
      gpa
    }`,
  )
}

// Certification queries
export async function getCertifications() {
  return client.fetch(
    groq`*[_type == "certification" && active == true] | order(order asc) {
      _id,
      title,
      issuer,
      issueDate,
      expiryDate,
      credentialId,
      credentialUrl,
      description
    }`,
  )
}

// Category queries
export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color
    }`,
  )
}
