import { defineField, defineType } from "sanity"

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Proficiency Level (%)",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Core Engineering", value: "core" },
          { title: "AI & Machine Learning", value: "ai" },
          { title: "Design & CAD", value: "design" },
          { title: "Programming", value: "programming" },
          { title: "Management", value: "management" },
          { title: "Communication", value: "communication" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "active",
      title: "Show on Website",
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
    {
      title: "Proficiency Level",
      name: "levelDesc",
      by: [{ field: "level", direction: "desc" }],
    },
  ],
})
