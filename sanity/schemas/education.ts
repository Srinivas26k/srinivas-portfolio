import { defineField, defineType } from "sanity"

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
    }),
    defineField({
      name: "startYear",
      title: "Start Year",
      type: "string",
    }),
    defineField({
      name: "endYear",
      title: "End Year",
      type: "string",
    }),
    defineField({
      name: "current",
      title: "Currently Studying",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "gpa",
      title: "GPA/Grade",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
