import { defineField, defineType } from "sanity"

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role/Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "image",
      title: "Client Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: { type: "project" },
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "image",
      featured: "featured",
    },
    prepare(selection) {
      const { featured } = selection
      return {
        ...selection,
        subtitle: `${selection.subtitle}${featured ? " • Featured" : ""}`,
      }
    },
  },
})
